const HUBSPOT_BASE = "https://api.hubapi.com"

async function hubspotFetch(path, method, payload) {
  const res = await fetch(`${HUBSPOT_BASE}/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  const body = await res.text()
  if (!res.ok) {
    throw new Error(`HubSpot API error (${res.status}): ${body}`)
  }
  return body ? JSON.parse(body) : null
}

async function createOrUpdateContact({ email, firstName, lastName, company, service, message }) {
  const search = await hubspotFetch("crm/v3/objects/contacts/search", "POST", {
    filterGroups: [
      { filters: [{ propertyName: "email", operator: "EQ", value: email }] },
    ],
    properties: ["email"],
    limit: 1,
  })

  const properties = { email, firstname: firstName, lastname: lastName }
  if (company) properties.company = company

  let contactId
  if (search?.total > 0) {
    contactId = search.results[0].id
    await hubspotFetch(`crm/v3/objects/contacts/${contactId}`, "PATCH", { properties })
  } else {
    const created = await hubspotFetch("crm/v3/objects/contacts", "POST", { properties })
    contactId = created?.id
    if (!contactId) throw new Error("Failed to create HubSpot contact")
  }

  if (service || message) {
    await hubspotFetch("crm/v3/objects/notes", "POST", {
      properties: {
        hs_note_body: `Service: ${service || "N/A"}\n\n${message || ""}`,
        hs_timestamp: Date.now().toString(),
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
        },
      ],
    })
  }

  return contactId
}

export async function POST(request) {
  if (!process.env.HUBSPOT_API_KEY) {
    console.error("[HubSpot] HUBSPOT_API_KEY is not configured")
    return Response.json({ error: "Server misconfigured." }, { status: 500 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = typeof body?.name === "string" ? body.name.trim() : ""
  const email = typeof body?.email === "string" ? body.email.trim() : ""
  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 })
  }

  const [firstName, lastName = ""] = name.split(/\s+(.*)/s)

  try {
    await createOrUpdateContact({
      email,
      firstName,
      lastName,
      company: typeof body.company === "string" ? body.company.trim() : null,
      service: typeof body.service === "string" ? body.service : null,
      message: typeof body.message === "string" ? body.message : null,
    })
    return Response.json({ success: true })
  } catch (err) {
    console.error(`[HubSpot] ERROR: ${err.message}`)
    return Response.json(
      { error: "Something went wrong submitting your request. Please try again." },
      { status: 500 }
    )
  }
}

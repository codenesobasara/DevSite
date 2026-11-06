import assert from "node:assert/strict"
import { schemas } from "../src/lib/schemas.js"

const faq = schemas.faq([{ q: "A?", a: "Yes." }, { q: "B?", a: "No." }])
assert.equal(faq["@type"], "FAQPage")
assert.equal(faq.mainEntity.length, 2)
assert.equal(faq.mainEntity[0].acceptedAnswer.text, "Yes.")

const city = schemas.service("Web Design", "d", "/web-design/guelph", "Guelph")
assert.deepEqual(city.areaServed, { "@type": "City", name: "Guelph" })
assert.equal(city.url, "https://www.ponterastudios.com/web-design/guelph")

const def = schemas.service("Web Design", "d", "/services/custom-websites")
assert.equal(def.areaServed.name, "Kitchener-Waterloo, Ontario, Canada")

console.log("check-schemas ok")

// FAQ content hygiene for the Kitchener page
import { customWebsitesFaq } from "../src/data/customWebsitesFaq.js"
const kw = schemas.faq(customWebsitesFaq)
assert.equal(kw.mainEntity.length, 6)
for (const m of kw.mainEntity) {
  assert.ok(!/[<&]/.test(m.acceptedAnswer.text), `html in answer: ${m.name}`)
  assert.ok(m.acceptedAnswer.text.length > 80, `answer too short: ${m.name}`)
  assert.ok(!/\$\s?\d/.test(m.acceptedAnswer.text), `price in answer: ${m.name}`)
}
console.log("check-schemas faq ok")

// City pages: unknown slug is null; each city has 4 FAQs and real case-study proof
import { cityPages, getCityBySlug } from "../src/data/cityPages.js"
assert.equal(getCityBySlug("cambridge"), null)
assert.ok(cityPages.length >= 2)
for (const c of cityPages) {
  assert.equal(getCityBySlug(c.slug), c)
  assert.equal(c.faq.length, 4, `faq count ${c.slug}`)
  assert.ok(c.proof.some((p) => p.href.startsWith("/case-study/")), `proof ${c.slug}`)
  for (const m of schemas.faq(c.faq).mainEntity) {
    assert.ok(!/[<&]/.test(m.acceptedAnswer.text), `html in answer: ${c.slug} ${m.name}`)
    assert.ok(!/\$\s?\d/.test(m.acceptedAnswer.text), `price in answer: ${c.slug} ${m.name}`)
  }
}
console.log("check-schemas cities ok")

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

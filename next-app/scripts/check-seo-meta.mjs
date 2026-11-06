import { serviceCategories } from "../src/data/serviceDetails.js"

const SUFFIX = " | Pontera Studios"
let bad = 0

function check(id, title, desc) {
  const full = title + SUFFIX
  if (full.length >= 60) { console.error(`TITLE ${id} ${full.length}: ${full}`); bad++ }
  if (desc.length >= 160) { console.error(`DESC ${id} ${desc.length}`); bad++ }
}

for (const cat of serviceCategories) {
  for (const t of cat.tabs) {
    check(t.id, t.seoTitle ?? `${t.title} in Kitchener-Waterloo`, t.seoDescription ?? t.description)
  }
}

if (bad) process.exit(1)
console.log("check-seo-meta ok")

// City landing pages
import { cityPages } from "../src/data/cityPages.js"
let cityBad = 0
for (const c of cityPages) {
  const full = c.title + SUFFIX
  if (full.length >= 60) { console.error(`TITLE city/${c.slug} ${full.length}: ${full}`); cityBad++ }
  if (c.description.length >= 160) { console.error(`DESC city/${c.slug} ${c.description.length}`); cityBad++ }
}
if (cityBad) process.exit(1)
console.log("check-seo-meta cities ok")

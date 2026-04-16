import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "")
      const filePath = path.join(BLOG_DIR, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        date: data.date || null,
        description: data.description || "",
        author: data.author || "Slate Studio",
      }
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0
      return new Date(b.date) - new Date(a.date)
    })

  return posts
}

export async function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)

  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title || slug,
    date: data.date || null,
    description: data.description || "",
    author: data.author || "Slate Studio",
    contentHtml,
  }
}

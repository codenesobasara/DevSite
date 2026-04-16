import { notFound } from "next/navigation"
import NavBar from "@/components/ui/NavBar"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} — Slate Studio Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} — Slate Studio`,
      description: post.description,
    },
    alternates: {
      canonical: `https://slatecode.dev/blog/${params.slug}`,
    },
  }
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <main className="w-full px-5 md:px-8 pt-20 md:pt-50 md:pl-25 md:pr-25 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          All Posts
        </Link>

        {post.date && (
          <p className="text-white/30 text-sm mb-2">
            {new Date(post.date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}

        <h1 className="text-4xl font-medium mb-4">{post.title}</h1>

        {post.author && (
          <p className="text-white/40 text-sm mb-12">By {post.author}</p>
        )}

        <article
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-medium
            prose-p:text-white/70 prose-p:leading-relaxed
            prose-a:text-white prose-a:underline
            prose-strong:text-white
            prose-ul:text-white/70 prose-ol:text-white/70
            prose-blockquote:border-white/20 prose-blockquote:text-white/50
            prose-code:text-white/80 prose-code:bg-white/5 prose-code:px-1 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-16 mb-20 border-t border-white/10 pt-8">
          <Link
            href="/blog"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            &larr; Back to all posts
          </Link>
        </div>
      </main>
    </div>
  )
}

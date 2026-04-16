import NavBar from "@/components/ui/NavBar"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog — Software Development Insights | Slate Studio",
  description:
    "Insights on custom software development, automation, SEO, and growing your business with technology. From Slate Studio in Kitchener-Waterloo.",
  openGraph: {
    title: "Blog | Slate Studio — Software Development Insights",
    description:
      "Thoughts on building software, automation, and growing businesses from a Kitchener-Waterloo dev agency.",
  },
  alternates: {
    canonical: "https://slatecode.dev/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <main className="w-full px-5 md:px-8 pt-20 md:pt-50 md:pl-25 md:pr-25 max-w-4xl">
        <h1 className="text-5xl font-medium mb-4">Blog</h1>
        <p className="text-white/50 text-lg max-w-2xl mb-16">
          Thoughts on building software, growing businesses, and everything in
          between.
        </p>

        {posts.length === 0 ? (
          <p className="text-white/40">Posts coming soon.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group p-6 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
              >
                {post.date && (
                  <p className="text-white/30 text-xs mb-2">
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
                <h2 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-white/50 text-sm">{post.description}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

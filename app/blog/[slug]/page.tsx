"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-posts"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { t } = useLanguage()
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16">
      <div className="container py-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t("backToBlog")}
          </Button>
        </Link>

        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <span className="text-sm px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">Author</div>
              </div>
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }} />
          </div>
        </div>
      </div>
    </div>
  )
}

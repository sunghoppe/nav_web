"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-posts"
import { useLanguage } from "@/components/language-provider"
import BlogCategoryFilter from "@/components/blog-category-filter"

export default function BlogPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter blog posts based on selected category
  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase() === selectedCategory)

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16">
      <div className="container py-8">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold text-purple-600">{t("blogTitle")}</h1>
          <p className="text-muted-foreground">{t("blogDescription")}</p>
        </div>

        <div className="mb-8">
          <BlogCategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="overflow-hidden rounded-lg border bg-background shadow transition-all hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{post.author.name}</span>
                </div>
              </div>
            </Link>
          ))}

          {filteredPosts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

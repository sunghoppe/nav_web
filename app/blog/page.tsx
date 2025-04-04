"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-posts"
import { useLanguage } from "@/components/language-provider"
import BlogCategoryFilter from "@/components/blog-category-filter"

export default function BlogPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [visiblePosts, setVisiblePosts] = useState(6)

  // Filter blog posts based on selected category
  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase() === selectedCategory)

  // Get posts to display based on current visibility limit
  const postsToDisplay = filteredPosts.slice(0, visiblePosts)

  // Reset visible posts when category changes
  useEffect(() => {
    setVisiblePosts(6)
  }, [selectedCategory])

  // Load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6)
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16">
      {/* Fixed header banner with light purple background */}
      <div className="bg-purple-50 dark:bg-purple-900/20 py-8 border-b border-purple-100 dark:border-purple-900/30">
        <div className="container">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl font-bold text-purple-600">{t("blogTitle")}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">{t("blogDescription")}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="container py-8">
        <div className="mb-8">
          <BlogCategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsToDisplay.map((post) => (
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
        </div>

        {/* Load more button */}
        {filteredPosts.length > visiblePosts && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={loadMorePosts}
              variant="outline"
              className="rounded-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:text-purple-700"
            >
              {t("loadMore")}
            </Button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

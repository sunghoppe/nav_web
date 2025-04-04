"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CategorySidebar from "@/components/category-sidebar"
import ProductTagFilter from "@/components/product-tag-filter"
import { products } from "@/lib/products"
import { useLanguage } from "@/components/language-provider"
import { X } from "lucide-react"

export default function Home() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("new")
  const [selectedTag, setSelectedTag] = useState("")

  // Handle category change - reset tag when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedTag("")
  }

  // Filter products based on selected category and tag
  const filteredProducts = products.filter((product) => {
    // First filter by category
    let matchesCategory = true
    if (selectedCategory === "new") matchesCategory = !!product.isNew
    else if (selectedCategory === "featured") matchesCategory = !!product.isFeatured
    else if (selectedCategory === "opensource") matchesCategory = !!product.isOpenSource
    else if (selectedCategory === "free") matchesCategory = !!product.isFree
    else matchesCategory = product.categories?.includes(selectedCategory) || false

    // Then filter by tag if one is selected
    if (!selectedTag) return matchesCategory

    // For demo purposes, we'll just use a random assignment of tags
    // In a real app, you'd have tags in your product data
    const productId = product.id.toLowerCase()
    const tagMatch =
      {
        nextjs: ["mantine-ui", "play-nextjs", "saaskit", "hikari"],
        astro: ["wsrv-nl", "fumadocs"],
        nuxt: ["outstatic", "monetag"],
        svelte: ["query-domains", "microlink"],
        documentation: ["fumadocs", "n8n-chinese"],
        blog: ["outstatic", "saaskit"],
        "landing-page": ["preline-ui", "socialscreenshots"],
        ecommerce: ["saaskit", "hikari"],
        dashboard: ["aiven", "featurebase"],
      }[selectedTag] || []

    return matchesCategory && tagMatch.includes(productId)
  })

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16">
      {/* Header banner with light purple background */}
      <div className="bg-purple-50 dark:bg-purple-900/20 py-8 border-b border-purple-100 dark:border-purple-900/30">
        <div className="container">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl font-bold text-purple-600">{t("productsTitle")}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">{t("productsDescription")}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:block">
            <div className="sticky top-[80px]">
              <CategorySidebar activeCategory={selectedCategory} setActiveCategory={handleCategoryChange} />
            </div>
          </div>

          <div className="col-span-3">
            <div className="mb-6">
              <ProductTagFilter selectedTag={selectedTag} onTagChange={setSelectedTag} />
            </div>

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold capitalize">
                {t(selectedCategory)} {t("products")}
              </h2>

              {selectedTag && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 text-sm"
                  onClick={() => setSelectedTag("")}
                >
                  <span>{selectedTag}</span>
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{t("noProducts")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CategorySidebar from "@/components/category-sidebar"
import ProductCategoryFilter from "@/components/product-category-filter"
import { products } from "@/lib/products"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("new")
  const [sidebarTop, setSidebarTop] = useState(0)
  const titleRef = useRef<HTMLDivElement>(null)

  // Filter products based on selected category
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "new") return product.isNew
    if (selectedCategory === "featured") return product.isFeatured
    if (selectedCategory === "opensource") return product.isOpenSource
    if (selectedCategory === "free") return product.isFree
    return product.categories?.includes(selectedCategory) || true
  })

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
    if (category === "opensource") return t("openSource")
    return t(category)
  }

  // Calculate sidebar position on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleBottom = titleRef.current.getBoundingClientRect().bottom
        const headerHeight = 64 // Approximate header height

        if (titleBottom <= headerHeight) {
          setSidebarTop(headerHeight - titleBottom + 16) // 16px for padding
        } else {
          setSidebarTop(0)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16">
      <div className="container py-8">
        <div ref={titleRef} className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold text-purple-600">{t("productsTitle")}</h1>
          <p className="text-muted-foreground">{t("productsDescription")}</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <ProductCategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

          <Button className="bg-purple-600 hover:bg-purple-700">{t("submitProduct")}</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative">
            <div style={{ top: `${sidebarTop}px` }} className="transition-all duration-200 sticky">
              <CategorySidebar activeCategory={selectedCategory} setActiveCategory={setSelectedCategory} />
            </div>
          </div>

          <div className="col-span-3">
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {t("productsInCategory", { category: getCategoryDisplayName(selectedCategory) })}
            </h2>

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

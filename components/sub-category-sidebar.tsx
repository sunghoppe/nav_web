"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

interface SubCategorySidebarProps {
  categories: { name: string; slug: string }[]
  activeCategory: string
  setActiveCategory: (category: string) => void
  mainCategory: string
}

export default function SubCategorySidebar({
  categories,
  activeCategory,
  setActiveCategory,
  mainCategory,
}: SubCategorySidebarProps) {
  const { t } = useLanguage()

  // If there are no subcategories, don't render anything
  if (categories.length === 0) {
    return null
  }

  return (
    <div className="space-y-1">
      <h3 className="font-medium text-sm mb-2 text-muted-foreground">
        {t(mainCategory)} {t("subcategories")}
      </h3>

      <button
        onClick={() => setActiveCategory("all")}
        className={cn(
          "flex w-full h-9 items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
          activeCategory === "all"
            ? "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-50"
            : "text-muted-foreground",
        )}
      >
        {t("all")}
      </button>

      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => setActiveCategory(category.slug)}
          className={cn(
            "flex w-full h-9 items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
            activeCategory === category.slug
              ? "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-50"
              : "text-muted-foreground",
          )}
        >
          {t(category.name)}
        </button>
      ))}
    </div>
  )
}

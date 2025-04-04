"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

const categories = [
  { name: "new", slug: "new" },
  { name: "featured", slug: "featured" },
  { name: "templates", slug: "templates" },
  { name: "tools", slug: "tools" },
  { name: "design", slug: "design" },
  { name: "saas", slug: "saas" },
  { name: "cms", slug: "cms" },
  { name: "hosting", slug: "hosting" },
  { name: "framework", slug: "framework" },
  { name: "domain", slug: "domain" },
  { name: "database", slug: "database" },
]

interface CategorySidebarProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function CategorySidebar({ activeCategory, setActiveCategory }: CategorySidebarProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => setActiveCategory(category.slug)}
          className={cn(
            "flex w-full h-10 items-center rounded-md px-4 text-sm font-medium transition-colors border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800",
            activeCategory === category.slug
              ? "text-purple-600 dark:text-purple-400 font-semibold"
              : "text-slate-700 dark:text-slate-300",
          )}
        >
          {t(category.name)}
        </button>
      ))}
    </div>
  )
}

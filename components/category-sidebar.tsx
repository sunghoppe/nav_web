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
  { name: "openSource", slug: "opensource" },
  { name: "free", slug: "free" },
  { name: "hosting", slug: "hosting" },
  { name: "framework", slug: "framework" },
  { name: "domain", slug: "domain" },
  { name: "database", slug: "database" },
  { name: "monetization", slug: "monetization" },
  { name: "learning", slug: "learning" },
  { name: "community", slug: "community" },
]

interface CategorySidebarProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function CategorySidebar({ activeCategory, setActiveCategory }: CategorySidebarProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-1">
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

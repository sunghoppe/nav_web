"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"

interface ProductTagFilterProps {
  selectedTag: string
  onTagChange: (tag: string) => void
}

export default function ProductTagFilter({ selectedTag, onTagChange }: ProductTagFilterProps) {
  const { t } = useLanguage()
  const [showDropdown, setShowDropdown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const tags = [
    { name: "Next.js", slug: "nextjs" },
    { name: "Astro", slug: "astro" },
    { name: "Nuxt", slug: "nuxt" },
    { name: "Remix", slug: "remix" },
    { name: "Svelte", slug: "svelte" },
    { name: "Landing Page", slug: "landing-page" },
    { name: "Browser Extension", slug: "browser-extension" },
    { name: "Documentation", slug: "documentation" },
    { name: "Blog", slug: "blog" },
    { name: "E-commerce", slug: "ecommerce" },
    { name: "Dashboard", slug: "dashboard" },
  ]

  const [visibleTags, setVisibleTags] = useState<typeof tags>([])
  const [overflowTags, setOverflowTags] = useState<typeof tags>([])

  // Calculate which tags should be visible and which should be in dropdown
  useEffect(() => {
    const calculateVisibleTags = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const tagWidth = 120 // Approximate width of a tag button
      const dropdownButtonWidth = 80 // Approximate width of the dropdown button

      // Calculate how many tags can fit in the container
      const maxVisibleTags = Math.floor((containerWidth - dropdownButtonWidth) / tagWidth)

      // Ensure we show at least 1 tag button, but no more than 6
      const numVisible = Math.max(1, Math.min(maxVisibleTags, 6))

      setVisibleTags(tags.slice(0, numVisible))
      setOverflowTags(tags.slice(numVisible))
      setShowDropdown(tags.length > numVisible)
    }

    calculateVisibleTags()

    // Recalculate on window resize
    window.addEventListener("resize", calculateVisibleTags)
    return () => window.removeEventListener("resize", calculateVisibleTags)
  }, [])

  return (
    <div ref={containerRef} className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
      {visibleTags.map((tag) => (
        <Button
          key={tag.slug}
          variant={selectedTag === tag.slug ? "default" : "outline"}
          size="sm"
          className={cn(
            "rounded-full whitespace-nowrap",
            selectedTag === tag.slug
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
          )}
          onClick={() => onTagChange(tag.slug)}
        >
          {tag.name}
        </Button>
      ))}

      {showDropdown && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full flex items-center gap-1 whitespace-nowrap bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
            >
              <span>{t("more")}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {overflowTags.map((tag) => (
              <DropdownMenuItem
                key={tag.slug}
                className={cn(
                  "cursor-pointer",
                  selectedTag === tag.slug
                    ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
                    : "",
                )}
                onClick={() => onTagChange(tag.slug)}
              >
                {tag.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}

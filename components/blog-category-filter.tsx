"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"
import { blogCategories } from "@/lib/blog-categories"

interface BlogCategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function BlogCategoryFilter({ selectedCategory, onCategoryChange }: BlogCategoryFilterProps) {
  const { t } = useLanguage()
  const [showDropdown, setShowDropdown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCategories, setVisibleCategories] = useState<typeof blogCategories>([])
  const [overflowCategories, setOverflowCategories] = useState<typeof blogCategories>([])

  // Calculate which categories should be visible and which should be in dropdown
  useEffect(() => {
    const calculateVisibleCategories = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const buttonWidth = 100 // Approximate width of a category button
      const dropdownButtonWidth = 50 // Approximate width of the dropdown button

      // Calculate how many categories can fit in the container
      const maxVisibleCategories = Math.floor((containerWidth - dropdownButtonWidth) / buttonWidth)

      // Ensure we show at least 1 category button
      const numVisible = Math.max(1, Math.min(maxVisibleCategories, 10))

      setVisibleCategories(blogCategories.slice(0, numVisible))
      setOverflowCategories(blogCategories.slice(numVisible))
      setShowDropdown(blogCategories.length > numVisible)
    }

    calculateVisibleCategories()

    // Recalculate on window resize
    window.addEventListener("resize", calculateVisibleCategories)
    return () => window.removeEventListener("resize", calculateVisibleCategories)
  }, [])

  return (
    <div ref={containerRef} className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {visibleCategories.map((category) => (
        <Button
          key={category.slug}
          variant={selectedCategory === category.slug ? "default" : "outline"}
          size="sm"
          className={cn(
            "rounded-full",
            selectedCategory === category.slug
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "text-muted-foreground",
          )}
          onClick={() => onCategoryChange(category.slug)}
        >
          {category.name}
        </Button>
      ))}

      {showDropdown && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
              <span>More</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {overflowCategories.map((category) => (
              <DropdownMenuItem
                key={category.slug}
                className={cn(
                  "cursor-pointer",
                  selectedCategory === category.slug ? "bg-purple-100 dark:bg-purple-900" : "",
                )}
                onClick={() => onCategoryChange(category.slug)}
              >
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}

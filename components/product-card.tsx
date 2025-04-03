"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    image: string
    isFree: boolean
    isOpenSource: boolean
    isNew?: boolean
    isFeatured?: boolean
    categories?: string[]
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage()

  return (
    <div className="overflow-hidden rounded-lg border bg-background shadow transition-all hover:shadow-md">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.isFree && (
              <Badge variant="outline" className="text-xs bg-slate-100 dark:bg-slate-800">
                {t("freeLabel")}
              </Badge>
            )}
            {product.isOpenSource && (
              <Badge variant="outline" className="text-xs bg-slate-100 dark:bg-slate-800">
                {t("openSourceLabel")}
              </Badge>
            )}
            {product.isNew && (
              <Badge className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-green-200">
                {t("newLabel")}
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

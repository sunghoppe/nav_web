import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600 text-white font-bold text-xl">
        N
      </div>
      <div className="font-bold text-lg tracking-wide">
        <span className="text-purple-600">NI</span>
        <span className="text-slate-800 dark:text-slate-200">SOO</span>
      </div>
    </div>
  )
}

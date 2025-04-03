"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { type Language, translations } from "@/lib/i18n"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Simple translation function
  const t = (key: string, params?: Record<string, string | number>): string => {
    // Access translations directly from the imported object
    const translationSet = translations[language] as Record<string, string>
    const fallbackSet = translations.en as Record<string, string>

    let text = translationSet[key] || fallbackSet[key] || key

    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value))
      })
    }

    return text
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

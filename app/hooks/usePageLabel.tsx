"use client"
import { useSelector } from "react-redux"
import { usePathname } from "next/navigation"
import { RootState } from "@lib/types/HeaderTypes"
import { languages } from "@lib/types/languages/languages"
import { useEffect, useState } from "react"

export const usePageLabel = () => {
  const pathname = usePathname()
  const language = useSelector((state: RootState) => state.header.language)
  const [label, setLabel] = useState<string | null>(null)
  const [titlePosition, setTitlePosition] = useState<string>("text-left")

  useEffect(() => {
    const getLabelByPathname = (pathname: string, language: string) => {
      const currentLanguage = languages.find((lang) => lang.code !== language)
      if (!currentLanguage) return null

      const navItems = currentLanguage.content.navItems
      for (const key in navItems) {
        if (navItems[key].route === pathname) {
          return navItems[key].label
        }
      }
      return null
    }

    const label = getLabelByPathname(pathname, language)
    setLabel(label)
    setTitlePosition(language === "ar" ? "text-right" : "text-left")
  }, [pathname, language])

  return { label, titlePosition }
}

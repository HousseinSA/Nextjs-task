"use client"
import React from "react"
import { useSelector } from "react-redux"
import { languages } from "@lib/languages"
import { usePathname } from "next/navigation"

interface StatesProps {
  language: string
}

const Page = () => {
  const pathname = usePathname()
  const language = useSelector((state: StatesProps) => state.language)

  const currentLanguage = languages.find((lang) => lang.code !== language)

  const getLabelByPathname = (pathname: string) => {
    if (!currentLanguage) return null

    const navItems = currentLanguage.content.navItems
    for (const key in navItems) {
      if (navItems[key].route === pathname) {
        return navItems[key].label
      }
    }
    return null
  }

  const label = getLabelByPathname(pathname)

  return (
    <div>
      <h1 className="mt-2 text-center text-lg">{label}</h1>
    </div>
  )
}

export default Page

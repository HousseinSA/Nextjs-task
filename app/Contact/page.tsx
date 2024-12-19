"use client"
import React from "react"
import { useSelector } from "react-redux"
import { languages } from "@lib/languages"
import { usePathname } from "next/navigation"

interface StatesProps {
  language: string
}

const Page = () => {
  const pathname = usePathname() // Get the current pathname
  const language = useSelector((state: StatesProps) => state.language)

  // Find the current language object
  const currentLanguage = languages.find((lang) => lang.code !== language)

  // Function to get label by pathname
  const getLabelByPathname = (pathname: string) => {
    if (!currentLanguage) return null

    const navItems = currentLanguage.content.navItems
    for (const key in navItems) {
      if (navItems[key].route === pathname) {
        return navItems[key].label // Return the label for the matching route
      }
    }
    return null // Return null if no match is found
  }

  const label = getLabelByPathname(pathname)

  return (
    <div>
      <h1>{label || "Page not found"}</h1>
      {/* Additional content can be added here */}
    </div>
  )
}

export default Page

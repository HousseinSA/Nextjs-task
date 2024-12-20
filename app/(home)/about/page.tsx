"use client"
import React from "react"
import { useSelector } from "react-redux"
import { usePathname } from "next/navigation"
import { getLabelByPathname } from "@lib/types/languages/getLabelByPathname"

interface StatesProps {
  language: string
}

const Page = () => {
  const pathname = usePathname()
  const language = useSelector((state: StatesProps) => state.language)
  const label = getLabelByPathname(pathname, language)
  const titlePosition = language == "ar" ? "text-right " : "text-left"

  return (
    <div>
      <h1 className={`mt-6 text-4xl px-2 ${titlePosition}`}>{label}</h1>
    </div>
  )
}

export default Page

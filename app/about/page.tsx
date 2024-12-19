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

  return (
    <div>
      <h1 className="mt-2 text-center text-lg">{label}</h1>
    </div>
  )
}

export default Page

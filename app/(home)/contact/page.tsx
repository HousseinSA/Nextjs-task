"use client"
import React from "react"
import { usePageLabel } from "@hooks/usePageLabel"

const Page = () => {
  const { label, titlePosition } = usePageLabel()

  return (
    <div>
      <h1 className={`mt-6 text-4xl px-2 ${titlePosition}`}>{label}</h1>
    </div>
  )
}

export default Page

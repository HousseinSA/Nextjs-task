import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Techno-trans header ",
  description: "Task ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`overflow-y-auto`}>{children}</body>
    </html>
  )
}

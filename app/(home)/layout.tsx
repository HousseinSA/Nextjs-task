import type { Metadata } from "next"
import Header from "@components/HeaderSection/header"
import ReduxWrapper from "@/app/lib/redux/ReduxWrapper"

import "../globals.css"

export const metadata: Metadata = {
  title: "Techno-trans Task ",
  description: "Task ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`overflow-y-auto`}>
        <ReduxWrapper>
          <Header />
          {children}
        </ReduxWrapper>
      </body>
    </html>
  )
}

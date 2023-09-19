import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NextJS Performance",
  description: "NextJS Performance"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

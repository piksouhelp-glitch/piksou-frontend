import type React from "react"
import type { Metadata } from "next"
import "../globals.css"
import EmbedClient from "./EmbedClient"

export const metadata: Metadata = {
  title: "PiKSou - Mobile Embed",
  description: "PiKSou mobile embedding pages",
  robots: {
    index: false,
    follow: false,
  },
}

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <EmbedClient>{children}</EmbedClient>
}

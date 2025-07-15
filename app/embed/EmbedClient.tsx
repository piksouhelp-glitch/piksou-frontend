"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

export default function EmbedClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
      <div className="embed-container">
        <style jsx global>{`
          /* Optimize for mobile embedding */
          body {
            margin: 0;
            padding: 0;
            font-family: "Nunito", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Remove any potential scrollbar issues in embedded context */
          html, body {
            overflow-x: hidden;
          }
          
          /* Ensure proper touch handling on mobile */
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Optimize animations for mobile */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
        {children}
      </div>
    </ThemeProvider>
  )
}

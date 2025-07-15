import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://piksou.mu"),
  title: {
    default: "PiKSou - Compare Grocery Deals in Mauritius | Save Money on Shopping",
    template: "%s | PiKSou - Grocery Deals Mauritius",
  },
  description:
    "Compare grocery deals across all major supermarkets in Mauritius with PiKSou. Find the best prices at Jumbo, Winners, Intermart & more. Download free on iOS & Android.",
  applicationName: "PiKSou",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Mauritius grocery deals",
    "supermarket price comparison",
    "Jumbo deals",
    "Winners promotions",
    "Intermart offers",
    "grocery shopping app",
    "save money Mauritius",
    "best grocery prices",
    "food deals Mauritius",
    "shopping comparison app",
    "PiKSou",
    "mobile app Mauritius",
    "offres épicerie Maurice",
    "comparaison prix supermarché",
    "promotions Jumbo",
    "offres Winners",
    "promotions Intermart",
    "application courses",
    "économiser argent Maurice",
    "meilleurs prix épicerie",
    "offres alimentaires Maurice",
    "application comparaison achats",
    "application mobile Maurice",
  ],
  authors: [{ name: "PiKSou Team", url: "https://piksou.mu" }],
  creator: "PiKSou",
  publisher: "PiKSou",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#48C774",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#48C774" />
        <meta name="msapplication-TileColor" content="#48C774" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PiKSou" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="canonical" href="https://piksou.mu" />
        <link rel="alternate" hrefLang="en" href="https://piksou.mu" />
        <link rel="alternate" hrefLang="fr" href="https://piksou.mu/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://piksou.mu" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_MU" />
        <meta property="og:site_name" content="PiKSou" />
        <meta name="twitter:site" content="@piksou_mu" />
        <meta name="twitter:creator" content="@piksou_mu" />
        <meta name="geo.region" content="MU" />
        <meta name="geo.placename" content="Mauritius" />
        <meta name="ICBM" content="-20.348404, 57.552152" />
        <meta name="DC.title" content="PiKSou - Compare Grocery Deals in Mauritius" />
        <meta name="DC.creator" content="PiKSou Team" />
        <meta name="DC.subject" content="Grocery price comparison, Mauritius shopping deals" />
        <meta name="DC.description" content="Compare grocery deals across all major supermarkets in Mauritius" />
        <meta name="DC.publisher" content="PiKSou" />
        <meta name="DC.contributor" content="PiKSou Team" />
        <meta name="DC.date" content="2024-01-01" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://piksou.mu" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Mauritius" />
        <meta name="DC.rights" content="© 2024 PiKSou. All rights reserved." />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { AppSmartLinkClient } from "./AppSmartLinkClient"

export const metadata: Metadata = {
  title: "Get PiKSou App",
  description: "Open PiKSou in the App Store or Google Play.",
  openGraph: {
    title: "PiKSou – Save on groceries in Mauritius",
    description: "Compare supermarket deals and never miss a discount.",
    url: "https://piksou.mu/app",
    type: "website",
    images: [
      {
        url: "/images/piksou-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PiKSou – Grocery Deal Comparison App for Mauritius",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get PiKSou App",
    description: "Open PiKSou in the App Store or Google Play.",
    images: ["/images/piksou-twitter-card.jpg"],
  },
}

export default function AppSmartLinkPage() {
  return <AppSmartLinkClient />
}

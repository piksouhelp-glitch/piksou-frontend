import type { Metadata } from "next"
import { AppSmartLinkClient } from "@/app/app/AppSmartLinkClient"

export const metadata: Metadata = {
  title: "Télécharger PiKSou",
  description: "Ouvrez PiKSou sur l'App Store ou Google Play.",
  openGraph: {
    title: "PiKSou – Économisez sur vos courses à Maurice",
    description: "Comparez les offres des supermarchés et ne manquez plus aucune réduction.",
    url: "https://piksou.mu/fr/app",
    type: "website",
    images: [
      {
        url: "/images/piksou-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PiKSou – Application de comparaison des offres à Maurice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Télécharger PiKSou",
    description: "Ouvrez PiKSou sur l'App Store ou Google Play.",
    images: ["/images/piksou-twitter-card.jpg"],
  },
}

export default function AppSmartLinkPageFr() {
  return <AppSmartLinkClient locale="fr" />
}

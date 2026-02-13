import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devenir Partenaire PiKSou - Développez Votre Activité à Maurice",
  description:
    "Rejoignez le programme partenaires PiKSou pour augmenter la visibilité de votre magasin, accéder à des analyses et générer des commandes depuis la première plateforme de comparaison de courses à Maurice.",
  openGraph: {
    title: "Devenir Partenaire PiKSou - Développez Votre Activité",
    description:
      "Rejoignez le programme partenaires PiKSou pour plus de visibilité, des analyses et des commandes directes.",
    url: "https://piksou.mu/fr/partners",
  },
}

export default function PartnersLayoutFr({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

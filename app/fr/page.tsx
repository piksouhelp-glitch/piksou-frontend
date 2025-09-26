import type { Metadata } from "next"
import Navbar from "@/components/fr/navbar"
import HeroSection from "@/components/fr/hero-section"
import ValuePropositionStrip from "@/components/fr/value-proposition-strip"
import AboutSection from "@/components/fr/about-section"
import FeaturesSection from "@/components/fr/features-section"
import AppPreviewSection from "@/components/fr/app-preview-section"
import HowItWorksSection from "@/components/fr/how-it-works-section"
import FAQSection from "@/components/fr/faq-section"
import ContactSection from "@/components/fr/contact-section"
import DownloadSection from "@/components/fr/download-section"
import Footer from "@/components/fr/footer"
import FloatingDownloadButton from "@/components/fr/floating-download-button"
import ScrollProgress from "@/components/scroll-progress"
import ScrollToTop from "@/components/scroll-to-top"
import StructuredDataFr from "@/components/fr/structured-data-fr"

export const metadata: Metadata = {
  title: "PiKSou - Comparez les Offres d'Épicerie à Maurice | Économisez sur vos Courses",
  description:
    "Comparez les offres d'épicerie dans tous les grands supermarchés de Maurice avec PiKSou. Trouvez les meilleurs prix chez Jumbo, Winners, Intermart et plus. Téléchargez gratuitement sur iOS et Android.",
  keywords: [
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
  ],
  authors: [{ name: "Équipe PiKSou" }],
  creator: "PiKSou",
  publisher: "PiKSou",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MU",
    url: "https://piksou.mu/fr",
    siteName: "PiKSou",
    title: "PiKSou - Comparez les Offres d'Épicerie à Maurice",
    description:
      "Comparez les offres d'épicerie dans tous les grands supermarchés de Maurice. Trouvez les meilleurs prix et économisez sur vos courses hebdomadaires avec PiKSou.",
    images: [
      {
        url: "/images/piksou-og-image-fr.jpg",
        width: 1200,
        height: 630,
        alt: "PiKSou - Application de Comparaison d'Offres d'Épicerie pour Maurice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PiKSou - Comparez les Offres d'Épicerie à Maurice",
    description:
      "Comparez les offres d'épicerie dans tous les grands supermarchés de Maurice. Économisez sur vos courses hebdomadaires !",
    images: ["/images/piksou-twitter-card-fr.jpg"],
    creator: "@piksou_mu",
  },
  alternates: {
    canonical: "https://piksou.mu/fr",
    languages: {
      "en-US": "https://piksou.mu",
      "fr-MU": "https://piksou.mu/fr",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Shopping",
  classification: "Comparaison Prix Épicerie",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "PiKSou",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#48C774",
    "theme-color": "#48C774",
  },
}

export default function HomeFr() {
  return (
    <>
      <StructuredDataFr />
      <main className="min-h-screen">
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <ValuePropositionStrip />
        <AboutSection />
        <FeaturesSection />
        <AppPreviewSection />
        <HowItWorksSection />
        <FAQSection />
        <ContactSection />
        <DownloadSection />
        <Footer />
        <FloatingDownloadButton />
        <ScrollToTop />
      </main>
    </>
  )
}

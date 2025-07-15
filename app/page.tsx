import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import AppPreviewSection from "@/components/app-preview-section"
import HowItWorksSection from "@/components/how-it-works-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import DownloadSection from "@/components/download-section"
import Footer from "@/components/footer"
import FloatingDownloadButton from "@/components/floating-download-button"
import ScrollProgress from "@/components/scroll-progress"
import ScrollToTop from "@/components/scroll-to-top"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "PiKSou - Compare Grocery Deals in Mauritius | Save Money on Shopping",
  description:
    "Compare grocery deals across all major supermarkets in Mauritius with PiKSou. Find the best prices at Jumbo, Winners, Intermart & more. Download free on iOS & Android.",
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
  ],
  authors: [{ name: "PiKSou Team" }],
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
    locale: "en_US",
    url: "https://piksou.mu",
    siteName: "PiKSou",
    title: "PiKSou - Compare Grocery Deals in Mauritius",
    description:
      "Compare grocery deals across all major supermarkets in Mauritius. Find the best prices and save money on your weekly shopping with PiKSou.",
    images: [
      {
        url: "/images/piksou-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PiKSou - Grocery Deal Comparison App for Mauritius",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PiKSou - Compare Grocery Deals in Mauritius",
    description:
      "Compare grocery deals across all major supermarkets in Mauritius. Save money on your weekly shopping!",
    images: ["/images/piksou-twitter-card.jpg"],
    creator: "@piksou_mu",
  },
  alternates: {
    canonical: "https://piksou.mu",
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
  classification: "Grocery Price Comparison",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "PiKSou",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#48C774",
    "theme-color": "#48C774",
  },
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen">
        <ScrollProgress />
        <Navbar />
        <HeroSection />
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

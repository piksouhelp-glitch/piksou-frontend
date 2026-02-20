import PartnersPageHero from "@/components/partners/hero"
import WhatWeOffer from "@/components/partners/what-we-offer"
import PartnersPageLogos from "@/components/partners/partners-logos"
import Testimonials from "@/components/partners/testimonials"
import PartnersPageForm from "@/components/partners/form"
import Navbar from "@/components/fr/navbar"
import Footer from "@/components/fr/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"

export default function PartnersPageFr() {
  return (
    <main className="min-h-screen">
      <ScrollToTopOnMount />
      <Navbar />
      <PartnersPageHero locale="fr" />
      <WhatWeOffer locale="fr" />
      <PartnersPageLogos locale="fr" />
      <Testimonials locale="fr" />
      <PartnersPageForm locale="fr" />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

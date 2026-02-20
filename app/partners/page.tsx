import PartnersPageHero from "@/components/partners/hero"
import WhatWeOffer from "@/components/partners/what-we-offer"
import PartnersPageLogos from "@/components/partners/partners-logos"
import Testimonials from "@/components/partners/testimonials"
import PartnersPageForm from "@/components/partners/form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <ScrollToTopOnMount />
      <Navbar />
      <PartnersPageHero locale="en" />
      <WhatWeOffer locale="en" />
      <PartnersPageLogos locale="en" />
      <Testimonials locale="en" />
      <PartnersPageForm locale="en" />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

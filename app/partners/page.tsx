import PartnersPageHero from "@/components/partners-page-hero"
import PartnersPagePillars from "@/components/partners-page-pillars"
import PartnersPageBenefits from "@/components/partners-page-benefits"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PartnersPageHero locale="en" />
      <PartnersPagePillars locale="en" />
      <PartnersPageBenefits locale="en" />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

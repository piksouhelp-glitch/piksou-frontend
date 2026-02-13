import PartnersPageHero from "@/components/partners-page-hero"
import PartnersPagePillars from "@/components/partners-page-pillars"
import PartnersPageBenefits from "@/components/partners-page-benefits"
import ContactSectionFr from "@/components/fr/contact-section"
import Navbar from "@/components/fr/navbar"
import Footer from "@/components/fr/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function PartnersPageFr() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PartnersPageHero locale="fr" />
      <PartnersPagePillars locale="fr" />
      <PartnersPageBenefits locale="fr" />
      <ContactSectionFr />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

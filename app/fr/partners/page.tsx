import PartnersPageHero from "@/components/partners/hero"
import PartnersPagePillars from "@/components/partners/pillars"
import PartnersPageLogos from "@/components/partners/partners-logos"
import PartnersPageWhy from "@/components/partners/why"
import PartnersPageForm from "@/components/partners/form"
import Navbar from "@/components/fr/navbar"
import Footer from "@/components/fr/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function PartnersPageFr() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PartnersPageHero locale="fr" />
      <PartnersPagePillars locale="fr" />
      <PartnersPageLogos locale="fr" />
      <PartnersPageWhy locale="fr" />
      <PartnersPageForm locale="fr" />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

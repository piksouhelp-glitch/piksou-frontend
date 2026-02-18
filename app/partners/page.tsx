import PartnersPageHero from "@/components/partners/hero"
import PartnersPagePillars from "@/components/partners/pillars"
import PartnersPageLogos from "@/components/partners/partners-logos"
import PartnersPageWhy from "@/components/partners/why"
import PartnersPageForm from "@/components/partners/form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PartnersPageHero locale="en" />
      <PartnersPagePillars locale="en" />
      <PartnersPageLogos locale="en" />
      <PartnersPageWhy locale="en" />
      <PartnersPageForm locale="en" />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

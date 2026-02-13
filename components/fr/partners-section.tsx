import { Eye, BarChart3, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

export default function PartnersSectionFr() {
  const pillars = [
    {
      icon: Eye,
      number: "01",
      title: "Visibilité Accrue",
      description:
        "Associez-vous directement avec PiKSou pour booster les promotions de votre magasin, augmenter le trafic et générer des revenus grâce aux produits vérifiés et aux placements en vedette.",
    },
    {
      icon: BarChart3,
      number: "02",
      title: "Analyses et Données",
      description:
        "Accédez à des analyses détaillées sur les tendances de recherche, les catégories de produits populaires, les ajouts aux listes de courses et le comportement d'achat.",
    },
    {
      icon: ShoppingCart,
      number: "03",
      title: "Commandes Directes",
      description:
        "Permettez à vos clients de commander directement via PiKSou — de la navigation au paiement — pour un retrait ou une livraison directement vers votre boutique en ligne.",
    },
  ]

  return (
    <section id="partners" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-palm-shadow dark:text-white mb-4">
              Devenez Partenaire <span className="text-sugarcane-green">PiKSou</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Développez votre activité avec la première plateforme de comparaison de courses à Maurice
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {pillars.map((pillar, index) => (
            <StaggerItem key={index}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                {/* Number Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 text-lg font-bold border-2 border-gray-900 dark:border-white rounded-full text-gray-900 dark:text-white">
                    {pillar.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 flex-grow mb-6">
                  {pillar.description}
                </p>

                {/* Icon at bottom */}
                <div className="mt-auto">
                  <pillar.icon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <Link
              href="/fr/partners"
              className="inline-flex items-center space-x-2 bg-sugarcane-green hover:bg-emerald-500 text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors duration-300"
            >
              <span>Devenir Partenaire</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

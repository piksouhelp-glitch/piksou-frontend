import {
  Eye,
  BarChart3,
  ShoppingCart,
  FileSpreadsheet,
  Megaphone,
  Video,
  Globe,
  Search,
  TrendingUp,
  ShoppingBag,
  LayoutDashboard,
  Truck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SubFeature {
  icon: LucideIcon
  title: string
}

interface Pillar {
  number: string
  icon: LucideIcon
  title: string
  description: string
  subFeatures: SubFeature[]
}

interface PartnersPagePillarsProps {
  locale?: "en" | "fr"
}

const contentEn = {
  sectionTitle: "What We Offer",
  sectionSubtitle: "Partner with PiKSou and unlock powerful tools to grow your business",
  pillars: [
    {
      number: "01",
      icon: Eye,
      title: "Increased Visibility",
      description:
        "We partner directly with stores to increase visibility of their promotions, drive traffic, and boost revenue.",
      subFeatures: [
        { icon: FileSpreadsheet, title: "Verified Product Listings" },
        { icon: Megaphone, title: "Featured & Sponsored Placements" },
        { icon: Video, title: "Social Media Marketing" },
        { icon: Globe, title: "Expanded Reach" },
      ],
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description:
        "We provide detailed analytics on key metrics that enable smarter decisions and drive more sales.",
      subFeatures: [
        { icon: Search, title: "Top Search Terms" },
        { icon: TrendingUp, title: "Category & Item Views" },
        { icon: ShoppingBag, title: "Shopping List & Purchase Data" },
        { icon: LayoutDashboard, title: "Live Admin Dashboard" },
      ],
    },
    {
      number: "03",
      icon: ShoppingCart,
      title: "Push Orders",
      description:
        "Users want to order directly from the app. We push orders straight to your e-commerce store.",
      subFeatures: [
        { icon: ShoppingCart, title: "In-App Ordering" },
        { icon: Truck, title: "Pickup & Delivery" },
        { icon: TrendingUp, title: "Revenue Growth" },
      ],
    },
  ] as Pillar[],
}

const contentFr = {
  sectionTitle: "Ce Que Nous Offrons",
  sectionSubtitle: "Devenez partenaire PiKSou et accédez à des outils puissants pour développer votre activité",
  pillars: [
    {
      number: "01",
      icon: Eye,
      title: "Visibilité Accrue",
      description:
        "Nous collaborons directement avec les magasins pour augmenter la visibilité de leurs promotions et générer du trafic.",
      subFeatures: [
        { icon: FileSpreadsheet, title: "Produits Vérifiés" },
        { icon: Megaphone, title: "Placements Sponsorisés" },
        { icon: Video, title: "Marketing Réseaux Sociaux" },
        { icon: Globe, title: "Portée Élargie" },
      ],
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Analyses et Données",
      description:
        "Nous fournissons des analyses détaillées sur des métriques clés pour des décisions plus éclairées.",
      subFeatures: [
        { icon: Search, title: "Termes de Recherche" },
        { icon: TrendingUp, title: "Vues par Catégorie" },
        { icon: ShoppingBag, title: "Données d'Achat" },
        { icon: LayoutDashboard, title: "Tableau de Bord" },
      ],
    },
    {
      number: "03",
      icon: ShoppingCart,
      title: "Commandes Directes",
      description:
        "Les utilisateurs veulent commander depuis l'app. Nous transmettons les commandes à votre boutique.",
      subFeatures: [
        { icon: ShoppingCart, title: "Commande In-App" },
        { icon: Truck, title: "Retrait et Livraison" },
        { icon: TrendingUp, title: "Croissance Revenus" },
      ],
    },
  ] as Pillar[],
}

export default function PartnersPagePillars({ locale = "en" }: PartnersPagePillarsProps) {
  const content = locale === "fr" ? contentFr : contentEn

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.sectionTitle}
          </h2>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Pillars */}
          <div className="space-y-12 md:space-y-16">
            {content.pillars.map((pillar, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-white dark:bg-gray-900 border-2 border-emerald-600 dark:border-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="font-sans text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-gray-600 dark:text-gray-400 mb-6">
                      {pillar.description}
                    </p>

                    {/* Sub-features as pills */}
                    <div className="flex flex-wrap gap-3">
                      {pillar.subFeatures.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          <feature.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span className="font-sans">{feature.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

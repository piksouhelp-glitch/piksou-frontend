import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import HoverCard from "@/components/micro-interactions/hover-card"

interface PartnersPageBenefitsProps {
  locale?: "en" | "fr"
}

const content = {
  en: {
    title: "Why Partner with PiKSou?",
    benefits: [
      {
        emoji: "🆓",
        title: "Free to Start",
        description: "No upfront costs to begin partnering. We grow together.",
      },
      {
        emoji: "🏝️",
        title: "Local Expertise",
        description: "Built by Mauritians, for Mauritius. We understand the market.",
      },
      {
        emoji: "📈",
        title: "Growing Platform",
        description: "Rapidly expanding user base across the island, every week.",
      },
      {
        emoji: "🤝",
        title: "Dedicated Support",
        description: "Personal account management and hands-on onboarding.",
      },
    ],
  },
  fr: {
    title: "Pourquoi Choisir PiKSou ?",
    benefits: [
      {
        emoji: "🆓",
        title: "Gratuit pour Commencer",
        description: "Aucun coût initial pour devenir partenaire. On grandit ensemble.",
      },
      {
        emoji: "🏝️",
        title: "Expertise Locale",
        description: "Créé par des Mauriciens, pour Maurice. On connaît le marché.",
      },
      {
        emoji: "📈",
        title: "Plateforme en Croissance",
        description: "Base d'utilisateurs en expansion rapide à travers l'île, chaque semaine.",
      },
      {
        emoji: "🤝",
        title: "Support Dédié",
        description: "Gestion de compte personnalisée et accompagnement pratique.",
      },
    ],
  },
}

export default function PartnersPageBenefits({ locale = "en" }: PartnersPageBenefitsProps) {
  const t = content[locale]

  return (
    <section className="py-16 bg-gradient-to-r from-sugarcane-green/10 via-ocean-blue/10 to-mango-yellow/10 dark:from-sugarcane-green/5 dark:via-ocean-blue/5 dark:to-mango-yellow/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-palm-shadow dark:text-sugarcane-green mb-12 handwritten">
            {t.title}
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {t.benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <HoverCard
                className="organic-card p-8 text-center group h-full"
                hoverScale={1.05}
                hoverRotate={index % 2 === 0 ? 2 : -2}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.emoji}
                </div>
                <h3 className="text-xl font-bold text-palm-shadow dark:text-white mb-3 group-hover:text-sugarcane-green transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

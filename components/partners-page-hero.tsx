"use client"

import FadeIn from "@/components/animations/fade-in"

interface PartnersPageHeroProps {
  locale?: "en" | "fr"
}

const content = {
  en: {
    title: "Grow Your Business",
    titleHighlight: "with PiKSou",
    subtitle:
      "Join Mauritius's leading grocery comparison platform and connect with thousands of deal-seeking shoppers ready to discover your store.",
    stats: [
      { value: "10K+", label: "Active Users" },
      { value: "50+", label: "Store Partners" },
      { value: "1000+", label: "Deals Compared Daily" },
    ],
  },
  fr: {
    title: "Développez Votre Activité",
    titleHighlight: "avec PiKSou",
    subtitle:
      "Rejoignez la première plateforme de comparaison de courses à Maurice et connectez-vous avec des milliers de consommateurs à la recherche de bonnes affaires.",
    stats: [
      { value: "10K+", label: "Utilisateurs Actifs" },
      { value: "50+", label: "Magasins Partenaires" },
      { value: "1000+", label: "Offres Comparées par Jour" },
    ],
  },
}

export default function PartnersPageHero({ locale = "en" }: PartnersPageHeroProps) {
  const t = content[locale]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 h-[80vh] flex items-center justify-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.title}{" "}
              <span className="handwritten text-emerald-600 dark:text-emerald-400">{t.titleHighlight}</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {t.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-8 py-6 text-center min-w-[160px]"
                >
                  <span className="handwritten text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400 block">
                    {stat.value}
                  </span>
                  <p className="font-sans text-base text-gray-500 dark:text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

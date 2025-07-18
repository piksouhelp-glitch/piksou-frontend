import { Search, MessageCircle, Lightbulb } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import HoverCard from "@/components/micro-interactions/hover-card"

export default function AboutSectionFr() {
  const features = [
    {
      icon: Search,
      title: "Comparaison Intelligente",
      description: "Scannez les offres de tous les grands supermarchés en une seule app",
      creoleTitle: "Konpare Malin",
      emoji: "🔍",
      color: "from-sugarcane-green to-emerald-400",
    },
    {
      icon: MessageCircle,
      title: "Local et Convivial",
      description: "Options créoles et recommandations hyper-locales",
      creoleTitle: "Lokal ek Zanmi",
      emoji: "🏝️",
      color: "from-mango-yellow to-amber-400",
    },
    {
      icon: Lightbulb,
      title: "Vraies Économies",
      description: "Économisez sur l'épicerie chaque semaine, sans effort",
      creoleTitle: "Ekonomi Vrai",
      emoji: "💡",
      color: "from-ocean-blue to-sky-400",
    },
  ]

  return (
    <section className="section-padding market-section" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4 handwritten">
              Kifer PiKSou?
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-mango-yellow via-sunset-orange to-ocean-blue mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-palm-shadow dark:text-gray-300 handwritten">
              Parce qu'économiser de l'argent devrait être aussi facile qu'une journée ensoleillée à Maurice !
              <span className="creole-text"> Nou la pou ede ou! </span>
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <HoverCard
                className="organic-card p-8 text-center group doodle-decoration"
                hoverScale={1.05}
                hoverRotate={index % 2 === 0 ? 3 : -3}
              >
                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}
                  >
                    <span className="text-3xl">{feature.emoji}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-palm-shadow dark:text-white mb-2 handwritten group-hover:text-sugarcane-green transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-lg creole-text mb-3">{feature.creoleTitle}</p>

                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    {feature.description}
                  </p>

                  <div className="absolute -top-4 -right-4 text-mango-yellow text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ↗️
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.8}>
          <div className="mt-16 text-center">
            <div className="organic-card p-8 bg-gradient-to-r from-warm-sand/50 to-white/50 dark:from-gray-800/50 dark:to-gray-700/50">
              <h3 className="text-3xl handwritten text-palm-shadow dark:text-sugarcane-green mb-4">
                "Mo ti kone sa depi lontan!"
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                C'est ce que vous direz quand vous découvrirez toutes les offres que vous avez manquées. PikSou, c'est
                comme avoir un ami malin qui sait toujours où trouver les meilleurs prix.
              </p>
              <div className="mt-4 flex justify-center space-x-2 text-2xl">
                <span>🛒</span>
                <span>💰</span>
                <span>😊</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

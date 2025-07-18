import { UserPlus, Search, Bookmark } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import HoverCard from "@/components/micro-interactions/hover-card"

export default function FeaturesSectionFr() {
  const features = [
    {
      icon: UserPlus,
      title: "Inscrivez-vous et Suivez vos Économies",
      description: "Créez votre compte et commencez à suivre combien vous économisez sur l'épicerie",
      creole: "Anrejistre ek gete to ekonomi",
      emoji: "📝",
      animation: "bounce" as const,
    },
    {
      icon: Search,
      title: "Recherchez et Filtrez",
      description: "Trouvez des produits par nom, localisation ou supermarché",
      creole: "Serser ek filtre",
      emoji: "🔍",
      animation: "pulse" as const,
    },
    {
      icon: Bookmark,
      title: "Sauvegardez pour Plus Tard",
      description: "Marquez les offres pour les revisiter quand vous êtes prêt à faire vos courses",
      creole: "Gard pou pli tar",
      emoji: "🔖",
      animation: "shake" as const,
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4 handwritten">
              Ki ou kapav fer?
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-mango-yellow via-sunset-orange to-ocean-blue mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-palm-shadow dark:text-gray-300">
              Tout ce dont vous avez besoin pour devenir un expert en économies !
              <span className="creole-text"> Nou pou montre ou! </span>
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <HoverCard className="organic-card p-6 flex items-start space-x-4 group" hoverScale={1.02}>
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-palm-shadow dark:text-white mb-1 handwritten group-hover:text-sugarcane-green transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm creole-text mb-2">{feature.creole}</p>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.8}>
          <div className="mt-16 text-center">
            <div className="organic-card p-8 bg-gradient-to-r from-sugarcane-green/10 to-ocean-blue/10">
              <h3 className="text-3xl handwritten text-palm-shadow dark:text-sugarcane-green mb-4">
                Prêt à commencer à économiser ?<span className="creole-text"> Ale nou koumans! </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Rejoignez des milliers de Mauriciens qui économisent déjà avec PikSou. C'est gratuit, c'est facile, et
                c'est fait ici même au paradis ! 🏝️
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

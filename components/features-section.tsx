import { Search, Bookmark, TrendingUp, Filter } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import HoverCard from "@/components/micro-interactions/hover-card"
import Image from "next/image"

export default function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Smart Search & Compare",
      description: "Find the best deals across all supermarkets in Mauritius with our intelligent search",
      creole: "Serser ek konpare malin",
      emoji: "🔍",
      screenshot: "/images/app-screenshot-1.jpg",
      color: "from-sugarcane-green to-emerald-400",
    },
    {
      icon: Bookmark,
      title: "Bookmark Your Favorites",
      description: "Save deals you love and never miss out on your favorite products",
      creole: "Gard to favori",
      emoji: "🔖",
      screenshot: "/images/app-screenshot-2.jpg",
      color: "from-mango-yellow to-amber-400",
    },
    {
      icon: TrendingUp,
      title: "Track Your Savings",
      description: "See exactly how much you're saving with every purchase",
      creole: "Gete to ekonomi",
      emoji: "💰",
      screenshot: "/images/app-screenshot-3.jpg",
      color: "from-ocean-blue to-sky-400",
    },
    {
      icon: Filter,
      title: "Smart Filtering",
      description: "Filter deals by category, store, or price range to find exactly what you need",
      creole: "Filtre malin",
      emoji: "🎯",
      screenshot: "/images/app-screenshot-2.jpg",
      color: "from-purple-500 to-indigo-400",
    },
  ]

  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4 handwritten">
              Ki ou kapav fer?
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-mango-yellow via-sunset-orange to-ocean-blue mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-palm-shadow dark:text-gray-300">
              Everything you need to become a savings expert!
              <span className="creole-text"> Nou pou montre ou! </span>
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.2}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <HoverCard className="organic-card overflow-hidden group" hoverScale={1.02}>
                <div className="flex flex-col md:flex-row h-full">
                  {/* Phone Mockup */}
                  <div className="md:w-1/2 p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                    <div className="relative">
                      {/* Phone Frame */}
                      <div className="w-40 h-80 bg-black rounded-3xl p-2 shadow-2xl">
                        <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                          <Image
                            src={feature.screenshot}
                            alt={`${feature.title} screenshot`}
                            width={180}
                            height={360}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {/* Floating Icon */}
                      <div className={`absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-xl">{feature.emoji}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-palm-shadow dark:text-white mb-2 handwritten group-hover:text-sugarcane-green transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-base creole-text mb-3">{feature.creole}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300 text-base leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Feature highlight */}
                    <div className="mt-4 flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-br ${feature.color} rounded-full`}></div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Key Feature</span>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.8}>
          <div className="mt-16 text-center">
            <div className="organic-card p-8 bg-gradient-to-r from-sugarcane-green/10 to-ocean-blue/10">
              <h3 className="text-3xl handwritten text-palm-shadow dark:text-sugarcane-green mb-4">
                Ready to start saving?
                <span className="creole-text"> Ale nou koumans! </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Join thousands of Mauritians who are already saving money with PikSou. It's free, it's easy, and it's
                made right here in paradise! 🏝️
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

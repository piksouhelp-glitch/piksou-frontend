"use client"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import MagneticButton from "@/components/micro-interactions/magnetic-button"

export default function HeroSectionFr() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient">
        {/* Floating tropical elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-8 h-8 text-mango-yellow opacity-30">🥭</div>
          <div className="absolute top-40 right-10 w-6 h-6 text-ocean-blue opacity-30">🌊</div>
          <div className="absolute bottom-40 left-10 w-10 h-10 text-sugarcane-green opacity-30">🌿</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <motion.div
                  className="inline-block"
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-palm-shadow dark:text-sugarcane-green leading-tight">
                    Ne Surpayez Plus Jamais vos Courses.
                  </h1>
                </motion.div>
              </FadeIn>

              <p className="text-xl md:text-2xl text-palm-shadow dark:text-gray-300 font-medium">
                Comparez les offres de supermarchés à Maurice et économisez chaque semaine.
              </p>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-palm-shadow dark:text-gray-300">
                  Obtenez l'App Gratuitement
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://codebase-frontend.amanabiy.tech/downloads/app-release-v1.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src="/images/app-store-badge.svg"
                      alt="Télécharger sur l'App Store"
                      className="h-14 w-auto"
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.piksou.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src="/images/google-play-badge.svg"
                      alt="Disponible sur Google Play"
                      className="h-14 w-auto"
                    />
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-palm-shadow dark:text-gray-300">
                <p className="text-sm">
                  <span className="font-bold handwritten text-mango-yellow">1000+</span> Mauriciens économisent déjà !
                  <span className="creole-text"> Zot kontan! </span>
                </p>
              </div>
            </div>

            <div className="relative h-[320px] md:h-[360px]">
              <div className="relative w-full h-full">
                {/* Multiple app screenshots in a visually appealing layout */}
                <div className="relative w-full h-full">
                  {/* Main screenshot - larger and centered */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-[220px] h-[300px] bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-3xl p-4 organic-card shadow-2xl">
                      <div className="bg-white rounded-2xl h-full p-3 shadow-lg overflow-hidden">
                        <div className="flex items-center justify-center mb-3">
                          <h3 className="text-sm font-bold text-gray-800">App PikSou</h3>
                        </div>
                        <div className="relative h-[calc(100%-2rem)]">
                          <img
                            src="/images/app-screenshot-fr-1.jpg"
                            alt="App PikSou montrant la comparaison des offres d'épicerie"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary screenshot - smaller, behind and to the left */}
                  <div className="absolute top-6 left-2 z-10 transform rotate-[-8deg]">
                    <div className="w-[180px] h-[240px] bg-gradient-to-br from-mango-yellow to-sunset-orange rounded-2xl p-3 organic-card shadow-xl">
                      <div className="bg-white rounded-xl h-full p-2 shadow-lg overflow-hidden">
                        <div className="flex items-center justify-center mb-2">
                          <h3 className="text-xs font-bold text-gray-800">Offres</h3>
                        </div>
                        <div className="relative h-[calc(100%-1.5rem)]">
                          <img
                            src="/images/app-screenshot-fr-2.jpg"
                            alt="App PikSou vue des offres"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third screenshot - smaller, behind and to the right */}
                  <div className="absolute top-8 right-2 z-10 transform rotate-[6deg]">
                    <div className="w-[170px] h-[220px] bg-gradient-to-br from-ocean-blue to-sugarcane-green rounded-2xl p-3 organic-card shadow-xl">
                      <div className="bg-white rounded-xl h-full p-2 shadow-lg overflow-hidden">
                        <div className="flex items-center justify-center mb-2">
                          <h3 className="text-xs font-bold text-gray-800">Comparer</h3>
                        </div>
                        <div className="relative h-[calc(100%-1.5rem)]">
                          <img
                            src="/images/app-screenshot-fr-3.jpg"
                            alt="App PikSou vue de comparaison"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements for visual appeal */}
                  <div className="absolute top-2 right-8 w-6 h-6 bg-mango-yellow rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute bottom-4 left-8 w-4 h-4 bg-ocean-blue rounded-full opacity-40 animate-pulse"></div>
                  <div className="absolute top-16 left-12 w-3 h-3 bg-sugarcane-green rounded-full opacity-50 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hand-drawn wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 Z"
            fill="rgba(255,255,255,0.8)"
            className="dark:fill-gray-900/80"
          />
        </svg>
      </div>
    </section>
  )
}

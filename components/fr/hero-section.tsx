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
          <motion.div
            className="absolute top-20 left-10 w-8 h-8 text-mango-yellow opacity-30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            🥭
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 text-ocean-blue opacity-30"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            🌊
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 w-10 h-10 text-sugarcane-green opacity-30"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            🌿
          </motion.div>
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
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-palm-shadow dark:text-sugarcane-green leading-tight handwritten">
                    Pik to sou, <span className="text-mango-yellow hand-underline">pa gaspiy to larzan!</span>
                  </h1>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <motion.p
                  className="text-xl md:text-2xl text-palm-shadow dark:text-gray-300 font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Comparez les offres de supermarchés à travers Maurice instantanément.
                  <span className="creole-text"> PikSou </span>
                  facilite la recherche des meilleures économies d'épicerie en ville,
                  <span className="handwritten text-ocean-blue"> mo kapav! </span>
                </motion.p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton
                    href="https://apps.apple.com/app/idXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transform hover:scale-105 transition-all duration-300"
                    strength={0.2}
                  >
                    <motion.div
                      className="organic-card p-4 flex items-center space-x-3"
                      whileHover={{ rotate: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">🍎</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Télécharger sur</p>
                        <p className="text-lg font-bold text-palm-shadow dark:text-white handwritten">App Store</p>
                      </div>
                    </motion.div>
                  </MagneticButton>

                  <MagneticButton
                    href="https://play.google.com/store/apps/details?id=com.piksou.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transform hover:scale-105 transition-all duration-300"
                    strength={0.2}
                  >
                    <motion.div
                      className="organic-card p-4 flex items-center space-x-3"
                      whileHover={{ rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-mango-yellow to-sunset-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">🤖</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Disponible sur</p>
                        <p className="text-lg font-bold text-palm-shadow dark:text-white handwritten">Google Play</p>
                      </div>
                    </motion.div>
                  </MagneticButton>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <motion.div
                  className="flex items-center space-x-4 text-palm-shadow dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-full border-2 border-white flex items-center justify-center"
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="text-white text-xs">😊</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm">
                    <span className="font-bold handwritten text-mango-yellow">1000+</span> Mauriciens économisent déjà !
                    <span className="creole-text"> Zot kontan! </span>
                  </p>
                </motion.div>
              </FadeIn>
            </div>

            <FadeIn delay={1.0} direction="left">
              <div className="relative h-[400px] md:h-[500px]">
                <motion.div
                  className="mascot-float"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-mango-yellow via-sunset-orange to-ocean-blue rounded-3xl p-8 organic-card">
                      <div className="text-center h-full flex flex-col justify-center items-center space-y-4">
                        <motion.div
                          className="text-8xl mascot-wink"
                          animate={{
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          🦆
                        </motion.div>
                        <div className="bg-white/90 rounded-2xl p-4 shadow-lg">
                          <p className="handwritten text-2xl text-palm-shadow">
                            "Mo konnen kot ena
                            <br />
                            <span className="text-mango-yellow">bon deal!</span>"
                          </p>
                          <p className="text-sm text-gray-600 mt-2">- PikSou, votre ami économies</p>
                        </div>
                        <div className="flex space-x-2">
                          <span className="text-2xl">😎</span>
                          <span className="text-2xl">📱</span>
                          <span className="text-2xl">💰</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Hand-drawn wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.8)"
            className="dark:fill-gray-900/80"
          />
        </svg>
      </div>
    </section>
  )
}

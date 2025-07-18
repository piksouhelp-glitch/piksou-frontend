"use client"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import ScaleIn from "@/components/animations/scale-in"
import MagneticButton from "@/components/micro-interactions/magnetic-button"

export default function DownloadSectionFr() {
  return (
    <section className="section-padding market-section relative overflow-hidden" id="download">
      {/* Floating tropical elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 text-4xl opacity-20"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          🌺
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-3xl opacity-20"
          animate={{
            x: [0, 20, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🥥
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 text-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🌴
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4 handwritten"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Pret pou ekonomi sak semenn?
            </motion.h2>
            <div className="w-32 h-2 bg-gradient-to-r from-mango-yellow via-sunset-orange to-ocean-blue mx-auto rounded-full mb-6"></div>
            <motion.p
              className="text-xl md:text-2xl text-palm-shadow dark:text-gray-300 mb-8"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Téléchargez PiKSou maintenant et commencez à comparer les offres instantanément !
              <br />
              <span className="creole-text text-2xl"> Mo pou ede ou ekonomi! </span>
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <MagneticButton
                href="https://apps.apple.com/app/idXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                strength={0.3}
              >
                <motion.div
                  className="organic-card p-6 flex items-center space-x-4"
                  whileHover={{ rotate: -2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🍎</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Télécharger sur</p>
                    <p className="text-2xl font-bold text-palm-shadow dark:text-white handwritten">App Store</p>
                    <p className="text-xs creole-text">Gratis!</p>
                  </div>
                </motion.div>
              </MagneticButton>

              <MagneticButton
                href="https://play.google.com/store/apps/details?id=com.piksou.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                strength={0.3}
              >
                <motion.div
                  className="organic-card p-6 flex items-center space-x-4"
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-mango-yellow to-sunset-orange rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Disponible sur</p>
                    <p className="text-2xl font-bold text-palm-shadow dark:text-white handwritten">Google Play</p>
                    <p className="text-xs creole-text">Gratis!</p>
                  </div>
                </motion.div>
              </MagneticButton>
            </div>

            <div className="organic-card p-6 bg-gradient-to-r from-warm-sand/50 to-white/50 dark:from-gray-800/50 dark:to-gray-700/50 mb-8">
              <div className="flex items-center justify-center space-x-4 text-palm-shadow dark:text-gray-300">
                <div className="flex -space-x-2">
                  {["😊", "🤩", "😎", "🥳"].map((emoji, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-full border-2 border-white flex items-center justify-center"
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-white">{emoji}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold handwritten">
                    <span className="text-mango-yellow">5000+</span> téléchargements déjà !
                  </p>
                  <p className="text-sm creole-text">Zot kontan ek PikSou!</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <ScaleIn delay={0.4}>
          <div className="relative h-[200px] md:h-[300px]">
            <motion.div
              className="mascot-float w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="organic-card h-full bg-gradient-to-br from-mango-yellow via-sunset-orange to-ocean-blue p-8 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-8xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    🦆
                  </motion.div>
                  <div className="bg-white/90 rounded-2xl p-4 shadow-lg">
                    <p className="handwritten text-2xl text-palm-shadow mb-2">
                      "Ale download PikSou!
                      <br />
                      <span className="text-mango-yellow">Mo pou montre ou!</span>"
                    </p>
                    <p className="text-sm text-gray-600">- PikSou, votre ami économies cool 😎</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}

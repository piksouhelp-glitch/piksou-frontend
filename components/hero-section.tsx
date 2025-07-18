"use client"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import MagneticButton from "@/components/micro-interactions/magnetic-button"

export default function HeroSection() {
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
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-palm-shadow dark:text-sugarcane-green leading-tight handwritten">
                    Pik to sou, <span className="text-mango-yellow hand-underline">pa bril to larzan!</span>
                  </h1>
                </motion.div>
              </FadeIn>

              <p className="text-xl md:text-2xl text-palm-shadow dark:text-gray-300 font-medium">
                Compare supermarket deals across Mauritius instantly.
                <span className="creole-text"> PikSou </span>
                makes it easy to find the best grocery savings in town,
                <span className="handwritten text-ocean-blue"> mo kapav! </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://codebase-frontend.amanabiy.tech/downloads/app-release-v1.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="organic-card p-4 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">⬇</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Download APK</p>
                    </div>
                  </div>
                </a>

                <MagneticButton
                  href="https://play.google.com/store/apps/details?id=com.piksou.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transform hover:scale-105 transition-all duration-300"
                  strength={0.2}
                >
                  <motion.div
                    className="hidden organic-card p-4 flex items-center space-x-3"
                    whileHover={{ rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-mango-yellow to-sunset-orange rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🤖</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Get it on</p>
                      <p className="text-lg font-bold text-palm-shadow dark:text-white handwritten">Google Play</p>
                    </div>
                  </motion.div>
                </MagneticButton>
              </div>

              <div className="flex items-center space-x-4 text-palm-shadow dark:text-gray-300">
                <p className="text-sm">
                  <span className="font-bold handwritten text-mango-yellow">1000+</span> Mauritians already saving!
                  <span className="creole-text"> Zot kontan! </span>
                </p>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px]">
              <div className="relative w-full h-full">
                {/* Mascot placeholder - would be replaced with actual PikSou duck illustration */}
                <div className="w-full h-full">
                  <div className="relative w-full h-full">
                    {/* Mascot placeholder - would be replaced with actual PikSou duck illustration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mango-yellow via-sunset-orange to-ocean-blue rounded-3xl p-8 organic-card">
                      <div className="text-center h-full flex flex-col justify-center items-center space-y-4">
                        <div className="bg-white/90 rounded-2xl p-4 shadow-lg">
                          <p className="handwritten text-2xl text-palm-shadow">
                            "Mo konnen kot ena
                            <br />
                            <span className="text-mango-yellow">bon deal!</span>"
                          </p>
                          <p className="text-sm text-gray-600 mt-2">- PikSou, your savings buddy</p>
                        </div>
                      </div>
                    </div>
                  </div>
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

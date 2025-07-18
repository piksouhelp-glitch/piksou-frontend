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
        <div className="absolute top-10 left-10 text-4xl opacity-20">🌺</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20">🥥</div>
        <div className="absolute bottom-20 left-1/4 text-3xl opacity-20">🌴</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4 handwritten">
            Pret pou ekonomi sak semenn?
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-mango-yellow via-sunset-orange to-ocean-blue mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-palm-shadow dark:text-gray-300 mb-8">
            Téléchargez PiKSou maintenant et commencez à comparer les offres instantanément !
            <br />
            <span className="creole-text text-2xl"> Mo pou ede ou ekonomi! </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a
              href="https://codebase-frontend.amanabiy.tech/downloads/app-release-v1.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="organic-card p-6 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">⬇</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Télécharger APK</p>
                  <p className="text-xs creole-text">Gratis!</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

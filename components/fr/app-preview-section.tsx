"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/fade-in";
import ScaleIn from "@/components/animations/scale-in";

export default function AppPreviewSectionFr() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      src: "/images/screenshot1.jpg",
      alt: "Écran Recherche d'offres avec catégories et remises",
    },
    {
      src: "/images/screenshot2.jpg",
      alt: "Liste d'achats affichant les économies potentielles et réelles",
    },
    {
      src: "/images/screenshot3.jpg",
      alt: "Liste d'achats avec suivi des achats pour chaque offre",
    },
    {
      src: "/images/screenshot4.jpg",
      alt: "Page Profil présentant les informations personnelles et préférences",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-transparent transition-colors duration-300" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'transparent' }}>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Aperçu de l'Application
            </h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto"></div>
          </div>
        </FadeIn>

        <ScaleIn delay={0.3}>
          <div className="relative max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[9/19] max-w-[280px] mx-auto"
              >
                {/* Phone frame */}
                <div className="absolute inset-0 rounded-[2rem] border-8 border-gray-900 dark:border-gray-600 z-30 pointer-events-none transition-colors duration-300"></div>

                {/* Screenshots */}
                <div className="absolute inset-[8px] overflow-hidden rounded-[1.5rem] z-0">
                  <Image
                    src={screenshots[currentIndex].src || "/placeholder.svg"}
                    alt={screenshots[currentIndex].alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md z-20 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Capture d'écran précédente"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft
                size={24}
                className="text-gray-900 dark:text-white"
              />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md z-20 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Capture d'écran suivante"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight
                size={24}
                className="text-gray-900 dark:text-white"
              />
            </motion.button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {screenshots.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex
                      ? "bg-[#48C774]"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Aller à la capture d'écran ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

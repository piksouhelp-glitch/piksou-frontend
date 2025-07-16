"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X, Smartphone } from "lucide-react"
import Image from "next/image"

export default function FloatingDownloadButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false) // Close expanded state when scrolling back to top
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3,
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Backdrop for expanded state */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
                onClick={() => setIsExpanded(false)}
                style={{ zIndex: -1 }}
              />
            )}
          </AnimatePresence>

          {/* Expanded download options */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-4 min-w-[280px] border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Download PiKSou APK</h3>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close download options"
                  >
                    <X size={20} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <div className="space-y-3">
                  <motion.a
                    href="https://codebase-frontend.amanabiy.tech/downloads/app-release-v1.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Image
                      src="https://bvrxgxzpxhwztnypxwnb.supabase.co/storage/v1/object/public/files/images/apk-image.jpg"
                      alt="Generic Download Button"
                      width={200}
                      height={60}
                      className="w-full h-auto"
                    />
                  </motion.a>

                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.piksou.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image
                      src="/images/google-play-badge.svg"
                      alt="Get it on Google Play"
                      width={200}
                      height={60}
                      className="w-full h-auto"
                    />
                  </motion.a>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Start saving on groceries today!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <motion.button
            onClick={toggleExpanded}
            className={`
  relative w-14 h-14 rounded-full shadow-lg
  bg-gradient-to-r from-[#48C774] to-[#00BFFF]
  hover:shadow-xl
  flex items-center justify-center
  transition-all duration-300
  ${isExpanded ? "ring-4 ring-[#48C774]/30" : ""}
`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isExpanded ? "Close download options" : "Open download options"}
          >
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#48C774] to-[#00BFFF] opacity-75"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.75, 0.3, 0.75],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Icon */}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isExpanded ? <X size={24} className="text-white" /> : <Download size={24} className="text-white" />}
            </motion.div>

            {/* Mobile indicator */}
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFC107] rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Smartphone size={10} className="text-white" />
            </motion.div>
          </motion.button>

          {/* Tooltip for desktop */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block"
              >
                <div className="bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                  Download PiKSou
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-700"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

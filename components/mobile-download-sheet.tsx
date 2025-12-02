"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface MobileDownloadSheetProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileDownloadSheet({ isOpen, onClose }: MobileDownloadSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl z-50 md:hidden"
          >
            <div className="p-6">
              {/* Handle */}
              <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-6"></div>

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Download PiKSou</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Start saving on groceries today!</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Download buttons */}
              <div className="space-y-4">
                <motion.a
                  href="https://apps.apple.com/gh/app/piksou/id6755356394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={250}
                    height={75}
                    className="w-full h-auto max-w-[250px] mx-auto"
                  />
                </motion.a>

                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.piksou.piksou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src="/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={250}
                    height={75}
                    className="w-full h-auto max-w-[250px] mx-auto"
                  />
                </motion.a>
              </div>

              {/* Safe area for home indicator */}
              <div className="h-6"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

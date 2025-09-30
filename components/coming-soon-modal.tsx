"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Smartphone, Clock, Heart } from "lucide-react"
import { useState } from "react"

interface ComingSoonModalProps {
    isOpen: boolean
    onClose: () => void
    language?: "en" | "fr"
}

export default function ComingSoonModal({ isOpen, onClose, language = "en" }: ComingSoonModalProps) {
    const content = {
        en: {
            title: "PiKSou App Coming Soon!",
            subtitle: "We're working hard to bring you the best grocery deal comparison experience in Mauritius",
            cta: "Stay tuned for updates!",
            creole: "Nou pou montre ou!"
        },
        fr: {
            title: "L'App PiKSou Arrive Bientôt!",
            subtitle: "Nous travaillons dur pour vous apporter la meilleure expérience de comparaison d'offres d'épicerie à Maurice",
            cta: "Restez à l'écoute pour les mises à jour!",
            creole: "Nou pou montre ou!"
        }
    }

    const currentContent = content[language]

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
                            {/* Header */}
                            <div className="relative bg-gradient-to-r from-sugarcane-green to-ocean-blue p-6 text-white">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Smartphone size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{currentContent.title}</h2>
                                        <p className="text-sm opacity-90">{currentContent.creole}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-lg">
                                    {currentContent.subtitle}
                                </p>

                                {/* CTA */}
                                <div className="text-center">
                                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-mango-yellow to-sunset-orange text-white px-8 py-4 rounded-full font-semibold text-lg">
                                        <Clock size={20} />
                                        <span>{currentContent.cta}</span>
                                    </div>
                                </div>

                                {/* Progress indicator */}
                                <div className="mt-6">
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-2 h-2 bg-sugarcane-green rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-ocean-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-mango-yellow rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        Development in progress...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

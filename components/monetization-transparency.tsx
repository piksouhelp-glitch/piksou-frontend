"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function MonetizationTransparency() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <section
            ref={ref}
            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-12"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4">
                            How Does PiKSou Make Money?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            We believe in transparency. Here's how we keep PiKSou free for shoppers while building a sustainable business.
                        </p>
                    </div>

                    {/* Main Message */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-sugarcane-green to-ocean-blue rounded-full flex items-center justify-center">
                                <span className="text-2xl">🛒</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4">
                            PiKSou is currently free for shoppers
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Right now, PiKSou is completely free for all users. We're focused on building a community of smart shoppers and helping you save money. As we grow, we may introduce premium features, but the core deal-finding functionality will always remain free.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-mango-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-lg">💰</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">You Save Money</h4>
                                <p className="text-gray-600 dark:text-gray-300">Find the best deals and save on every purchase</p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-lg">🏪</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Stores Get Visibility</h4>
                                <p className="text-gray-600 dark:text-gray-300">Supermarkets get more exposure to deal-seeking customers</p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-sugarcane-green rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-lg">❤️</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">We Build Community</h4>
                                <p className="text-gray-600 dark:text-gray-300">Creating a platform for smart shoppers in Mauritius</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 text-lg">✓</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white">No Hidden Fees</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                PiKSou is currently free with no subscription fees or hidden costs. Core features will always remain free.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-blue-600 text-lg">🔒</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white">Your Data is Safe</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                We only share deal information with stores. Your personal data stays private.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ValuePropositionStrip() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section
            ref={ref}
            className="bg-gradient-to-r from-sugarcane-green/10 to-ocean-blue/10 py-8 sticky top-0 z-40 backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Save Money */}
                    <motion.div
                        className="flex flex-col items-center text-center space-y-3 cursor-pointer group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-mango-yellow to-sunset-orange rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl"
                            whileHover={{
                                rotate: [0, -10, 10, -10, 0],
                                scale: 1.1,
                                transition: { duration: 0.5 }
                            }}
                        >
                            <motion.span
                                className="text-2xl"
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                💰
                            </motion.span>
                        </motion.div>
                        <motion.h3
                            className="text-lg font-bold text-palm-shadow dark:text-sugarcane-green"
                            whileHover={{
                                color: "#F59E0B",
                                transition: { duration: 0.2 }
                            }}
                        >
                            Save Money
                        </motion.h3>
                        <motion.p
                            className="text-sm text-gray-600 dark:text-gray-300 max-w-xs"
                            whileHover={{
                                color: "#374151",
                                transition: { duration: 0.2 }
                            }}
                        >
                            Compare prices across all supermarkets and find the best deals
                        </motion.p>
                    </motion.div>

                    {/* Find Deals Fast */}
                    <motion.div
                        className="flex flex-col items-center text-center space-y-3 cursor-pointer group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-ocean-blue to-sugarcane-green rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl"
                            whileHover={{
                                rotate: [0, -10, 10, -10, 0],
                                scale: 1.1,
                                transition: { duration: 0.5 }
                            }}
                        >
                            <motion.span
                                className="text-2xl"
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                ⚡
                            </motion.span>
                        </motion.div>
                        <motion.h3
                            className="text-lg font-bold text-palm-shadow dark:text-sugarcane-green"
                            whileHover={{
                                color: "#3B82F6",
                                transition: { duration: 0.2 }
                            }}
                        >
                            Find Deals Fast
                        </motion.h3>
                        <motion.p
                            className="text-sm text-gray-600 dark:text-gray-300 max-w-xs"
                            whileHover={{
                                color: "#374151",
                                transition: { duration: 0.2 }
                            }}
                        >
                            Get instant access to the latest promotions and discounts
                        </motion.p>
                    </motion.div>

                    {/* Track Your Savings */}
                    <motion.div
                        className="flex flex-col items-center text-center space-y-3 cursor-pointer group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-sugarcane-green to-mango-yellow rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl"
                            whileHover={{
                                rotate: [0, -10, 10, -10, 0],
                                scale: 1.1,
                                transition: { duration: 0.5 }
                            }}
                        >
                            <motion.span
                                className="text-2xl"
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                📊
                            </motion.span>
                        </motion.div>
                        <motion.h3
                            className="text-lg font-bold text-palm-shadow dark:text-sugarcane-green"
                            whileHover={{
                                color: "#10B981",
                                transition: { duration: 0.2 }
                            }}
                        >
                            Track Your Savings
                        </motion.h3>
                        <motion.p
                            className="text-sm text-gray-600 dark:text-gray-300 max-w-xs"
                            whileHover={{
                                color: "#374151",
                                transition: { duration: 0.2 }
                            }}
                        >
                            Monitor how much you save on every shopping trip
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

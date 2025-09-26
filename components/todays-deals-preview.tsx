"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function TodaysDealsPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    // Mock data for today's deals
    const todaysDeals = [
        {
            id: 1,
            product: "Fresh Chicken Breast",
            originalPrice: "Rs 280",
            salePrice: "Rs 220",
            savings: "Rs 60",
            store: "Jumbo",
            discount: "21% OFF",
            image: "🍗",
            timeLeft: "2h 15m left"
        },
        {
            id: 2,
            product: "Organic Milk 1L",
            originalPrice: "Rs 45",
            salePrice: "Rs 35",
            savings: "Rs 10",
            store: "Winners",
            discount: "22% OFF",
            image: "🥛",
            timeLeft: "4h 30m left"
        },
        {
            id: 3,
            product: "Fresh Bananas (1kg)",
            originalPrice: "Rs 25",
            salePrice: "Rs 18",
            savings: "Rs 7",
            store: "Super U",
            discount: "28% OFF",
            image: "🍌",
            timeLeft: "6h 45m left"
        },
        {
            id: 4,
            product: "Bread Loaf",
            originalPrice: "Rs 12",
            salePrice: "Rs 8",
            savings: "Rs 4",
            store: "Intermart",
            discount: "33% OFF",
            image: "🍞",
            timeLeft: "1h 20m left"
        }
    ]

    return (
        <section
            ref={ref}
            className="bg-gradient-to-br from-mango-yellow/5 to-sunset-orange/5 py-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4">
                        See Today's Top Deals
                    </h2>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">Updated today</span>
                        <span className="text-gray-400">•</span>
                        <span>Live deals from Mauritius supermarkets</span>
                    </div>
                </motion.div>

                {/* Deals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {todaysDeals.map((deal, index) => (
                        <motion.div
                            key={deal.id}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 dark:bg-gray-800"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            {/* Product Image & Store */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-4xl">{deal.image}</div>
                                <div className="text-right">
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{deal.store}</div>
                                    <div className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                        {deal.discount}
                                    </div>
                                </div>
                            </div>

                            {/* Product Name */}
                            <h3 className="font-bold text-gray-800 dark:text-white mb-2 text-sm">
                                {deal.product}
                            </h3>

                            {/* Pricing */}
                            <div className="mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-bold text-green-600">{deal.salePrice}</span>
                                    <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                    Save {deal.savings}
                                </div>
                            </div>

                            {/* Time Left */}
                            <div className="flex items-center justify-between">
                                <div className="text-xs text-orange-600 font-medium bg-orange-100 dark:bg-orange-900/20 px-2 py-1 rounded-full">
                                    ⏰ {deal.timeLeft}
                                </div>
                                <motion.button
                                    className="text-xs bg-mango-yellow text-white px-3 py-1 rounded-full font-medium hover:bg-sunset-orange transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Deal
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <motion.button
                        className="bg-gradient-to-r from-mango-yellow to-sunset-orange text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See All Today's Deals
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

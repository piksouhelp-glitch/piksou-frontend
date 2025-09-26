"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, MapPin, Clock, Star, TrendingUp, ExternalLink } from "lucide-react"
import { apiService, Deal } from "@/lib/api"
import DealModal from "./deal-modal"

export default function TopDealsSection() {
    const [deals, setDeals] = useState<Deal[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [retryCount, setRetryCount] = useState(0)
    const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const fetchTopDeals = async (retryAttempt = 0) => {
        try {
            setLoading(true)
            setError(null)

            console.log(`Fetching deals (attempt ${retryAttempt + 1})...`)
            const result = await apiService.getTopDeals()

            if (result.success && result.data) {
                setDeals(result.data)
                setRetryCount(0) // Reset retry count on success
            } else {
                throw new Error(result.error || "Failed to fetch deals")
            }
        } catch (err: any) {
            console.error("Error fetching deals:", err)

            // Retry logic - try up to 3 times with exponential backoff
            if (retryAttempt < 2) {
                const delay = Math.pow(2, retryAttempt) * 1000 // 1s, 2s, 4s
                console.log(`Retrying in ${delay}ms...`)
                setTimeout(() => {
                    setRetryCount(retryAttempt + 1)
                    fetchTopDeals(retryAttempt + 1)
                }, delay)
                return
            }

            setError(err.message || "An unexpected error occurred")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTopDeals()
    }, [])

    const handleRetry = () => {
        setRetryCount(0)
        fetchTopDeals()
    }

    const handleViewDeal = (deal: Deal) => {
        setSelectedDeal(deal)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedDeal(null)
    }

    const formatPrice = (price: string) => {
        return `Rs ${parseFloat(price).toFixed(2)}`
    }

    const formatDiscountPercentage = (percentage: string) => {
        return `${parseFloat(percentage).toFixed(1)}% OFF`
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
    }

    if (loading) {
        return (
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Today's Top Deals
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Discover the best grocery deals across Mauritius
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-pulse">
                                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-2/3"></div>
                                <div className="flex justify-between items-center">
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Today's Top Deals
                        </h2>
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                            <p className="text-red-600 dark:text-red-400 mb-4">
                                {error}
                            </p>
                            <button
                                onClick={handleRetry}
                                className="bg-[#48C774] hover:bg-[#3ea85f] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                Try Again
                            </button>
                            {retryCount > 0 && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Retry attempt {retryCount} of 3
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-12 bg-gradient-to-br from-mango-yellow/5 to-sunset-orange/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {deals.slice(0, 4).map((deal, index) => (
                        <motion.div
                            key={deal.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-24 mb-4 overflow-hidden">
                                <img
                                    src={deal.product.image}
                                    alt={deal.product.name}
                                    className="w-full h-full object-contain bg-gray-50 dark:bg-gray-700"
                                />
                                <div className="absolute top-2 right-2">
                                    <div className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                        {formatDiscountPercentage(deal.discount_percentage)}
                                    </div>
                                </div>
                            </div>

                            {/* Store Info */}
                            <div className="flex items-center justify-between mb-2 px-4">
                                <div className="flex items-center space-x-3">
                                    <img
                                        src={deal.store.logo}
                                        alt={deal.store.name}
                                        className="w-8 h-8 rounded-lg object-contain bg-white p-1 shadow-sm border border-gray-200"
                                    />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{deal.store.name}</span>
                                </div>
                            </div>

                            {/* Product Name */}
                            <div className="px-4">
                                <h3 className="font-bold text-gray-800 dark:text-white mb-2 text-sm line-clamp-2">
                                    {deal.product.name}
                                </h3>
                            </div>

                            {/* Pricing */}
                            <div className="px-4 mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-bold text-green-600">{formatPrice(deal.discounted_price)}</span>
                                    <span className="text-sm text-gray-500 line-through">{formatPrice(deal.original_price)}</span>
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                    Save Rs {(parseFloat(deal.original_price) - parseFloat(deal.discounted_price)).toFixed(2)}
                                </div>
                            </div>

                            {/* Time Left & Action */}
                            <div className="flex items-center justify-between px-4 pb-4">
                                <div className="text-xs text-orange-600 font-medium bg-orange-100 dark:bg-orange-900/20 px-2 py-1 rounded-full">
                                    ⏰ {formatDate(deal.end_date)}
                                </div>
                                <motion.button
                                    onClick={() => handleViewDeal(deal)}
                                    className="text-xs bg-[#48C774] text-white px-3 py-1 rounded-full font-medium hover:bg-[#3ea85f] transition-colors"
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <motion.button
                        onClick={() => window.location.href = '/deals'}
                        className="bg-gradient-to-r from-mango-yellow to-sunset-orange text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See All Today's Deals
                    </motion.button>
                </motion.div>
            </div>

            {/* Deal Modal */}
            <DealModal
                deal={selectedDeal}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}

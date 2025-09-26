"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag, ExternalLink, Clock, MapPin, Tag, Info, Scale, Package, Globe } from "lucide-react"
import { Deal } from "@/lib/api"

interface DealModalProps {
    deal: Deal | null
    isOpen: boolean
    onClose: () => void
}

export default function DealModal({ deal, isOpen, onClose }: DealModalProps) {
    const formatPrice = (price: string) => {
        return `Rs ${parseFloat(price).toFixed(2)}`
    }

    const formatDiscountPercentage = (percentage: string) => {
        return `${parseFloat(percentage).toFixed(1)}% DE RÉDUCTION`
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("fr-FR", {
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    }

    const formatTimeLeft = (endDate: string) => {
        const now = new Date()
        const end = new Date(endDate)
        const diff = end.getTime() - now.getTime()

        if (diff <= 0) return "Expiré"

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

        if (days > 0) return `${days}j ${hours}h restantes`
        if (hours > 0) return `${hours}h ${minutes}m restantes`
        return `${minutes}m restantes`
    }

    if (!deal) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with Image and Close Button */}
                        <div className="relative">
                            <div className="h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                <img
                                    src={deal.product.image}
                                    alt={deal.product.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Discount Badge */}
                            <div className="absolute top-4 right-16">
                                <span className="bg-[#48C774] text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg">
                                    {formatDiscountPercentage(deal.discount_percentage)}
                                </span>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full p-2 transition-all duration-200 shadow-lg"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 max-h-[calc(90vh-16rem)] overflow-y-auto">
                            {/* Store Info */}
                            <div className="flex items-center space-x-3 mb-6">
                                <img
                                    src={deal.store.logo}
                                    alt={deal.store.name}
                                    className="w-12 h-12 rounded-full object-contain bg-white p-2 shadow-md border border-gray-200"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{deal.store.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{deal.product.category.name}</p>
                                </div>
                            </div>

                            {/* Product Name */}
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {deal.product.name}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {deal.product.description}
                            </p>

                            {/* Pricing */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                                <div className="flex items-baseline space-x-4 mb-2">
                                    <span className="text-3xl font-bold text-[#48C774]">
                                        {formatPrice(deal.discounted_price)}
                                    </span>
                                    <span className="text-xl text-gray-500 line-through">
                                        {formatPrice(deal.original_price)}
                                    </span>
                                </div>
                                <div className="text-lg text-[#48C774] font-semibold">
                                    Économisez Rs {(parseFloat(deal.original_price) - parseFloat(deal.discounted_price)).toFixed(2)}
                                </div>
                            </div>

                            {/* Deal Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                    <Clock className="text-[#48C774]" size={20} />
                                    <div>
                                        <p className="font-medium">Expire le</p>
                                        <p className="text-sm">{formatDate(deal.end_date)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                    <Package className="text-[#48C774]" size={20} />
                                    <div>
                                        <p className="font-medium">Quantité</p>
                                        <p className="text-sm">{deal.quantity_available} disponibles</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                    <Tag className="text-[#48C774]" size={20} />
                                    <div>
                                        <p className="font-medium">Marque</p>
                                        <p className="text-sm">{deal.product.brand}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                    <Scale className="text-[#48C774]" size={20} />
                                    <div>
                                        <p className="font-medium">Poids</p>
                                        <p className="text-sm">{deal.product.weight}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Time Left */}
                            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-6">
                                <div className="flex items-center space-x-2 text-orange-700 dark:text-orange-300">
                                    <Clock size={20} />
                                    <span className="font-semibold">
                                        {formatTimeLeft(deal.end_date)}
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 bg-[#48C774] hover:bg-[#3ea85f] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                                >
                                    <ShoppingBag size={20} className="mr-2" />
                                    Ajouter au Panier
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 bg-white dark:bg-gray-700 text-[#48C774] border-2 border-[#48C774] hover:bg-[#48C774] hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
                                >
                                    <ExternalLink size={20} className="mr-2" />
                                    Visiter le Magasin
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

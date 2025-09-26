"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Clock, Star, ShoppingBag, ExternalLink, Calendar, Tag, Package } from "lucide-react"
import { Deal } from "@/lib/api"

interface DealModalProps {
    deal: Deal | null
    isOpen: boolean
    onClose: () => void
}

export default function DealModal({ deal, isOpen, onClose }: DealModalProps) {
    if (!deal) return null

    const formatPrice = (price: string) => {
        return `Rs ${parseFloat(price).toFixed(2)}`
    }

    const formatDiscountPercentage = (percentage: string) => {
        return `${parseFloat(percentage).toFixed(1)}% OFF`
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    }

    const formatTime = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        })
    }

    const savings = parseFloat(deal.original_price) - parseFloat(deal.discounted_price)

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="relative">
                            {/* Product Image */}
                            <div className="h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                <img
                                    src={deal.product.image}
                                    alt={deal.product.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-colors duration-200"
                            >
                                <X size={20} />
                            </button>

                            {/* Discount Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#48C774] text-white px-4 py-2 rounded-full text-lg font-bold">
                                    {formatDiscountPercentage(deal.discount_percentage)}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Store Info */}
                            <div className="flex items-center space-x-3">
                                <img
                                    src={deal.store.logo}
                                    alt={deal.store.name}
                                    className="w-10 h-10 rounded-lg object-contain bg-white p-1 shadow-sm border border-gray-200"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {deal.store.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {deal.product.category.name}
                                    </p>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {deal.product.name}
                                </h2>
                                {deal.product.description && (
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {deal.product.description}
                                    </p>
                                )}
                            </div>

                            {/* Pricing */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <span className="text-3xl font-bold text-[#48C774]">
                                            {formatPrice(deal.discounted_price)}
                                        </span>
                                        <span className="text-xl text-gray-500 dark:text-gray-400 line-through ml-3">
                                            {formatPrice(deal.original_price)}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-600 dark:text-gray-400">You Save</div>
                                        <div className="text-lg font-bold text-green-600">
                                            Rs {savings.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {formatDiscountPercentage(deal.discount_percentage)} discount
                                </div>
                            </div>

                            {/* Deal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Validity Period */}
                                <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                                    <div>
                                        <div className="text-sm font-medium text-blue-900 dark:text-blue-100">
                                            Valid Until
                                        </div>
                                        <div className="text-sm text-blue-700 dark:text-blue-300">
                                            {formatDate(deal.end_date)}
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity Required */}
                                <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                    <Package className="text-orange-600 dark:text-orange-400" size={20} />
                                    <div>
                                        <div className="text-sm font-medium text-orange-900 dark:text-orange-100">
                                            Quantity Required
                                        </div>
                                        <div className="text-sm text-orange-700 dark:text-orange-300">
                                            {deal.quantity_required} item{deal.quantity_required > 1 ? 's' : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Details */}
                            {(deal.product.brand || deal.product.weight || deal.product.unit) && (
                                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        Product Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {deal.product.brand && (
                                            <div className="flex items-center space-x-2">
                                                <Tag size={16} className="text-gray-400" />
                                                <span className="text-sm text-gray-600 dark:text-gray-400">Brand:</span>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {deal.product.brand}
                                                </span>
                                            </div>
                                        )}
                                        {(deal.product.weight || deal.product.unit) && (
                                            <div className="flex items-center space-x-2">
                                                <Package size={16} className="text-gray-400" />
                                                <span className="text-sm text-gray-600 dark:text-gray-400">Size:</span>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {deal.product.weight} {deal.product.unit}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Deal Conditions */}
                            {deal.deal_conditions.notes && (
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                    <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                                        Deal Conditions
                                    </h4>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                        {deal.deal_conditions.notes}
                                    </p>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button className="flex-1 bg-[#48C774] hover:bg-[#3ea85f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                                    <ShoppingBag size={20} className="mr-2" />
                                    Add to Cart
                                </button>
                                <button className="flex-1 bg-white dark:bg-gray-700 text-[#48C774] border-2 border-[#48C774] hover:bg-[#48C774] hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center">
                                    <ExternalLink size={20} className="mr-2" />
                                    Visit Store
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

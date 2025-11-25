"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { apiService, Deal } from "@/lib/api"
import { diversifyDeals, getStoreInitials } from "@/lib/utils"
import DealModal from "@/components/fr/deal-modal"

export default function TopDealsSectionFr() {
    const [deals, setDeals] = useState<Deal[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [retryCount, setRetryCount] = useState(0)
    const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidesToShow, setSlidesToShow] = useState(4)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const fetchTopDeals = async (retryAttempt = 0) => {
        try {
            setLoading(true)
            setError(null)

            const result = await apiService.getTopDeals()

            if (result.success && result.data) {
                const diversifiedDeals = diversifyDeals(result.data, 4)
                setDeals(diversifiedDeals)
                setRetryCount(0)
            } else {
                throw new Error(result.error || "Échec du chargement des offres")
            }
        } catch (err: any) {
            console.error("Error fetching deals:", err)

            if (retryAttempt < 2) {
                const delay = Math.pow(2, retryAttempt) * 1000
                setTimeout(() => {
                    setRetryCount(retryAttempt + 1)
                    fetchTopDeals(retryAttempt + 1)
                }, delay)
                return
            }

            setError(err.message || "Une erreur inattendue s'est produite")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTopDeals()
    }, [])

    useEffect(() => {
        if (!isAutoPlaying || deals.length <= slidesToShow) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                const maxSlides = Math.ceil(deals.length / slidesToShow)
                return (prev + 1) % maxSlides
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, deals.length, slidesToShow])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1)
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2)
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2)
            } else {
                setSlidesToShow(3)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const nextSlide = () => {
        const maxSlides = Math.ceil(deals.length / slidesToShow)
        setCurrentSlide((prev) => (prev + 1) % maxSlides)
        setIsAutoPlaying(false)
    }

    const prevSlide = () => {
        const maxSlides = Math.ceil(deals.length / slidesToShow)
        setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setIsAutoPlaying(false)
    }

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
        return `${parseFloat(percentage).toFixed(1)}% RÉDUCTION`
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("fr-FR", {
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
                            Meilleures Offres du Jour
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Découvrez les meilleures offres d'épicerie à Maurice
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
                            Meilleures Offres du Jour
                        </h2>
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                            <p className="text-red-600 dark:text-red-400 mb-4">
                                {error}
                            </p>
                            <button
                                onClick={handleRetry}
                                className="bg-[#48C774] hover:bg-[#3ea85f] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                Réessayer
                            </button>
                            {retryCount > 0 && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Tentative {retryCount} sur 3
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4">
                        Voir les Meilleures Offres du Jour
                    </h2>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">Mis à jour aujourd'hui</span>
                        <span className="text-gray-400">•</span>
                        <span>Offres en direct des supermarchés de Maurice</span>
                    </div>
                </motion.div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{
                                x: `-${currentSlide * (100 / slidesToShow)}%`
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            {deals.map((deal, index) => {
                                const productName = deal.product.name_fr || deal.product.name

                                return (
                                    <div
                                        key={deal.id}
                                        className="flex-shrink-0 px-2"
                                        style={{ width: `${100 / slidesToShow}%` }}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group h-full"
                                        >
                                            <div className="relative w-full h-24 mb-4 overflow-hidden">
                                                <img
                                                    src={deal.product.image}
                                                    alt={productName}
                                                    className="w-full h-full object-contain bg-gray-50 dark:bg-gray-700"
                                                />
                                                <div className="absolute top-2 right-2">
                                                    <div className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                                        {formatDiscountPercentage(deal.discount_percentage)}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mb-2 px-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sunset-orange to-mango-yellow text-white text-xs font-bold flex items-center justify-center shadow-sm">
                                                        {getStoreInitials(deal.store.name)}
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{deal.store.name}</span>
                                                </div>
                                            </div>

                                            <div className="px-4">
                                                <h3 className="font-bold text-gray-800 dark:text-white mb-2 text-sm line-clamp-2">
                                                    {productName}
                                                </h3>
                                            </div>

                                            <div className="px-4 mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-lg font-bold text-green-600">{formatPrice(deal.discounted_price)}</span>
                                                    <span className="text-sm text-gray-500 line-through">{formatPrice(deal.original_price)}</span>
                                                </div>
                                                <div className="text-sm text-green-600 font-medium">
                                                    Économisez Rs {(parseFloat(deal.original_price) - parseFloat(deal.discounted_price)).toFixed(2)}
                                                </div>
                                            </div>

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
                                                    Voir l'offre
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </div>

                    {deals.length > slidesToShow && Math.ceil(deals.length / slidesToShow) > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                                aria-label="Offres précédentes"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                                aria-label="Offres suivantes"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </button>
                        </>
                    )}

                    {deals.length > slidesToShow && Math.ceil(deals.length / slidesToShow) > 1 && (
                        <div className="flex justify-center mt-6 space-x-2">
                            {Array.from({ length: Math.ceil(deals.length / slidesToShow) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? "bg-[#48C774] w-8"
                                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                                        }`}
                                    aria-label={`Aller à la diapositive ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <DealModal
                deal={selectedDeal}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}


"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Grid, List, Star, Clock, MapPin, ShoppingBag, ExternalLink } from "lucide-react"
import { apiService, Deal, Store, Category } from "@/lib/api"
import DealModal from "@/components/fr/deal-modal"

export default function AllDealsPageFr() {
    const [deals, setDeals] = useState<Deal[]>([])
    const [stores, setStores] = useState<Store[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedStore, setSelectedStore] = useState<string>("all")
    const [selectedCategory, setSelectedCategory] = useState<string>("all")
    const [sortBy, setSortBy] = useState<"discount" | "price" | "name">("discount")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const [dealsResult, storesResult, categoriesResult] = await Promise.all([
                    apiService.getTopDeals(),
                    apiService.getStores(),
                    apiService.getCategories()
                ])

                if (dealsResult.success && dealsResult.data) {
                    setDeals(dealsResult.data)
                } else {
                    setError(dealsResult.error || "Échec du chargement des offres")
                }

                if (storesResult.success && storesResult.data) {
                    setStores(storesResult.data)
                }

                if (categoriesResult.success && categoriesResult.data) {
                    setCategories(categoriesResult.data)
                }
            } catch (err) {
                setError("Une erreur inattendue s'est produite")
                console.error("Error fetching data:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const formatPrice = (price: string) => {
        return `Rs ${parseFloat(price).toFixed(2)}`
    }

    const formatDiscountPercentage = (percentage: string) => {
        return `${parseFloat(percentage).toFixed(1)}% DE RÉDUCTION`
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("fr-FR", {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
    }

    const handleViewDeal = (deal: Deal) => {
        setSelectedDeal(deal)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedDeal(null)
    }

    // Filter and sort deals
    const filteredDeals = deals
        .filter(deal => {
            const matchesSearch = deal.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                deal.product.description.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesStore = selectedStore === "all" || deal.store.id === selectedStore
            const matchesCategory = selectedCategory === "all" || deal.product.category.id === selectedCategory
            return matchesSearch && matchesStore && matchesCategory
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "discount":
                    return parseFloat(b.discount_percentage) - parseFloat(a.discount_percentage)
                case "price":
                    return parseFloat(a.discounted_price) - parseFloat(b.discounted_price)
                case "name":
                    return a.product.name.localeCompare(b.product.name)
                default:
                    return 0
            }
        })

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#48C774] mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Chargement des offres...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#48C774] hover:bg-[#3ea85f] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                        >
                            Réessayer
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Toutes les Offres du Jour
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Découvrez {deals.length} offres incroyables dans les supermarchés de Maurice
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="space-y-4">
                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Rechercher des produits..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#48C774] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>

                        {/* Filters */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Store Filter */}
                            <select
                                value={selectedStore}
                                onChange={(e) => setSelectedStore(e.target.value)}
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#48C774] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            >
                                <option value="all">Tous les Magasins</option>
                                {stores.map(store => (
                                    <option key={store.id} value={store.id}>{store.name}</option>
                                ))}
                            </select>

                            {/* Category Filter */}
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#48C774] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            >
                                <option value="all">Toutes les Catégories</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>

                            {/* Sort By */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as "discount" | "price" | "name")}
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#48C774] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            >
                                <option value="discount">Trier par Réduction</option>
                                <option value="price">Trier par Prix</option>
                                <option value="name">Trier par Nom</option>
                            </select>

                            {/* View Mode */}
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === "grid"
                                            ? "bg-[#48C774] text-white"
                                            : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                                        }`}
                                >
                                    <Grid size={20} />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === "list"
                                            ? "bg-[#48C774] text-white"
                                            : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                                        }`}
                                >
                                    <List size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-400">
                        Affichage de {filteredDeals.length} sur {deals.length} offres
                    </p>
                </div>

                {/* Deals Grid/List */}
                {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredDeals.map((deal, index) => (
                            <motion.div
                                key={deal.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                {/* Product Image */}
                                <div className="relative w-full h-32 mb-4 overflow-hidden">
                                    <img
                                        src={deal.product.image}
                                        alt={deal.product.name}
                                        className="w-full h-full object-contain bg-gray-50 dark:bg-gray-700"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-[#48C774] text-white px-2 py-1 rounded-full text-xs font-semibold">
                                            {formatDiscountPercentage(deal.discount_percentage)}
                                        </span>
                                    </div>
                                </div>

                                {/* Store Info */}
                                <div className="flex items-center space-x-2 mb-2 px-4">
                                    <img
                                        src={deal.store.logo}
                                        alt={deal.store.name}
                                        className="w-6 h-6 rounded object-contain bg-white p-1 shadow-sm border border-gray-200"
                                    />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{deal.store.name}</span>
                                </div>

                                {/* Product Name */}
                                <div className="px-4 mb-3">
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2">
                                        {deal.product.name}
                                    </h3>
                                </div>

                                {/* Pricing */}
                                <div className="px-4 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-lg font-bold text-[#48C774]">
                                            {formatPrice(deal.discounted_price)}
                                        </span>
                                        <span className="text-sm text-gray-500 line-through">
                                            {formatPrice(deal.original_price)}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="px-4 pb-4">
                                    <button
                                        onClick={() => handleViewDeal(deal)}
                                        className="w-full bg-[#48C774] hover:bg-[#3ea85f] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                                    >
                                        Voir l'Offre
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredDeals.map((deal, index) => (
                            <motion.div
                                key={deal.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                            >
                                <div className="flex items-center space-x-4">
                                    {/* Product Image */}
                                    <div className="w-20 h-20 flex-shrink-0">
                                        <img
                                            src={deal.product.image}
                                            alt={deal.product.name}
                                            className="w-full h-full object-contain bg-gray-50 dark:bg-gray-700 rounded-lg"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <img
                                                src={deal.store.logo}
                                                alt={deal.store.name}
                                                className="w-5 h-5 rounded object-contain bg-white p-1 shadow-sm border border-gray-200"
                                            />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{deal.store.name}</span>
                                            <span className="bg-[#48C774] text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                {formatDiscountPercentage(deal.discount_percentage)}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            {deal.product.name}
                                        </h3>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-lg font-bold text-[#48C774]">
                                                {formatPrice(deal.discounted_price)}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through">
                                                {formatPrice(deal.original_price)}
                                            </span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                Économisez Rs {(parseFloat(deal.original_price) - parseFloat(deal.discounted_price)).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="flex-shrink-0">
                                        <button
                                            onClick={() => handleViewDeal(deal)}
                                            className="bg-[#48C774] hover:bg-[#3ea85f] text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                                        >
                                            Voir l'Offre
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* No Results */}
                {filteredDeals.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 dark:text-gray-600 mb-4">
                            <Search size={48} className="mx-auto" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Aucune offre trouvée
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Essayez d'ajuster vos critères de recherche ou de filtrage
                        </p>
                    </div>
                )}
            </div>

            {/* Deal Modal */}
            <DealModal
                deal={selectedDeal}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    )
}

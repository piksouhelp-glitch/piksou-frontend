"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function MonetizationTransparencyFr() {
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
                            Comment PiKSou Gagne-t-il de l'Argent ?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Nous croyons en la transparence. Voici comment nous gardons PiKSou gratuit pour les acheteurs tout en construisant une entreprise durable.
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
                            PiKSou est actuellement gratuit pour les acheteurs
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Actuellement, PiKSou est actuellement complètement gratuit pour tous les utilisateurs. Nous nous concentrons sur la construction d'une communauté d'acheteurs intelligents et vous aider à économiser de l'argent. En grandissant, nous pourrions introduire des fonctionnalités premium, mais la fonctionnalité principale de recherche d'offres restera toujours gratuite.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-mango-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-lg">💰</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Vous Économisez</h4>
                                <p className="text-gray-600 dark:text-gray-300">Trouvez les meilleures offres et économisez sur chaque achat</p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-lg">🏪</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Les Magasins Gagnent en Visibilité</h4>
                                <p className="text-gray-600 dark:text-gray-300">Les supermarchés obtiennent plus d'exposition auprès des clients cherchant des offres</p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-sugarcane-green rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-lg">❤️</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Nous Construisons une Communauté</h4>
                                <p className="text-gray-600 dark:text-gray-300">Créer une plateforme pour les acheteurs intelligents à Maurice</p>
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
                                <h4 className="font-bold text-gray-800 dark:text-white">Aucun Frais Caché</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                PiKSou est actuellement gratuit sans frais d'abonnement ou coûts cachés. Les fonctionnalités principales resteront toujours gratuites.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-blue-600 text-lg">🔒</span>
                                </div>
                                <h4 className="font-bold text-gray-800 dark:text-white">Vos Données sont Sécurisées</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Nous ne partageons que les informations d'offres avec les magasins. Vos données personnelles restent privées.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

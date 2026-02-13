"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Wallet, Store, Users, Check, Lock } from "lucide-react"

export default function MonetizationTransparencyFr() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const steps = [
        {
            number: "01",
            icon: Wallet,
            title: "Vous Économisez",
            description: "Trouvez les meilleures offres et économisez sur chaque achat",
            color: "bg-mango-yellow",
        },
        {
            number: "02",
            icon: Store,
            title: "Les Magasins Gagnent en Visibilité",
            description: "Les supermarchés obtiennent plus d'exposition auprès des clients",
            color: "bg-ocean-blue",
        },
        {
            number: "03",
            icon: Users,
            title: "Nous Construisons une Communauté",
            description: "Créer une plateforme pour les acheteurs intelligents à Maurice",
            color: "bg-sugarcane-green",
        },
    ]

    return (
        <section
            ref={ref}
            className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Comment <span className="text-mango-yellow">PiKSou</span> Vous Fait Économiser ?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            PiKSou est entièrement gratuit pour tous les utilisateurs. Voici comment tout le monde profite de notre plateforme.
                        </p>
                    </div>

                    {/* Step-based Flow */}
                    <div className="relative mb-12">
                        {/* Desktop: Horizontal connecting line */}
                        <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700" />

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex flex-col items-center text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                                >
                                    {/* Step Number Circle */}
                                    <div className={`relative z-10 w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Step Number Badge */}
                                    <span className="absolute top-0 right-1/2 translate-x-10 -translate-y-1 text-xs font-bold text-gray-400 dark:text-gray-500">
                                        {step.number}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-base max-w-xs">
                                        {step.description}
                                    </p>

                                    {/* Mobile: Arrow between steps */}
                                    {index < steps.length - 1 && (
                                        <div className="md:hidden my-4">
                                            <svg className="w-6 h-6 text-gray-300 dark:text-gray-600 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-3">
                                    <Check className="w-5 h-5 text-green-600" />
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Aucun Frais Caché</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                PiKSou est actuellement gratuit sans frais d'abonnement ou coûts cachés.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-3">
                                    <Lock className="w-5 h-5 text-blue-600" />
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Vos Données sont Sécurisées</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Vos données personnelles restent privées et ne sont jamais vendues.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

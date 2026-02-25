"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Wallet, Store, Users } from "lucide-react"

export default function MonetizationTransparency() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const steps = [
        {
            number: "01",
            icon: Wallet,
            title: "You Save Money",
            description: "Find the best deals and save on every purchase",
            color: "bg-mango-yellow",
        },
        {
            number: "02",
            icon: Store,
            title: "Stores Get Visibility",
            description: "Supermarkets get more exposure to deal-seeking customers",
            color: "bg-ocean-blue",
        },
        {
            number: "03",
            icon: Users,
            title: "We Build Community",
            description: "Creating a platform for smart shoppers in Mauritius",
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
                        <h2 className="text-3xl md:text-4xl font-bold text-palm-shadow dark:text-white mb-4">
                            How Does <span className="text-sugarcane-green">PiKSou</span> Save You Money?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            PiKSou is completely free for all users. We're focused on building a community of smart shoppers and helping you save money. As we grow, we may introduce premium features, but the core deal-finding functionality will always remain free.
                        </p>
                    </div>

                    {/* Step-based Flow */}
                    <div className="relative">
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
                                    <h3 className="text-2xl font-bold text-palm-shadow dark:text-white mb-2">
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

                </motion.div>
            </div>
        </section>
    )
}

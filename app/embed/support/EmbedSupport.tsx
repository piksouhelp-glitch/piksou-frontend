"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"
import { MessageCircle, Mail, Phone, Clock, HelpCircle } from "lucide-react"

export default function EmbedSupportPage() {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)

  // Handle theme from query params
  useEffect(() => {
    setMounted(true)
    const theme = searchParams.get("theme")
    if (theme === "dark" || theme === "light") {
      document.documentElement.classList.remove("dark", "light")
      document.documentElement.classList.add(theme)
    }
  }, [searchParams])

  const supportInfo = [
    {
      icon: Mail,
      title: "Email Support",
      content: "hello@piksou.mu",
      description: "Get help via email",
      href: "mailto:hello@piksou.mu",
      color: "#48C774",
    },
    {
      icon: Phone,
      title: "Phone Support",
      content: "+230 5XXX XXXX",
      description: "Mon-Fri, 9AM-6PM",
      href: "tel:+2305XXXXXXX",
      color: "#FFC107",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We respond quickly",
      href: "#",
      color: "#00BFFF",
    },
  ]

  const quickHelp = [
    {
      question: "How do I download the app?",
      answer:
        "PiKSou is available on both iOS App Store and Google Play Store. Search for 'PiKSou' and download for free.",
    },
    {
      question: "Is PiKSou really free?",
      answer: "Yes! PiKSou is completely free to download and use. No hidden fees or premium subscriptions.",
    },
    {
      question: "Which stores are supported?",
      answer: "We support all major supermarkets in Mauritius including Jumbo, Winners, Intermart, and more.",
    },
    {
      question: "How often are deals updated?",
      answer: "Our deals are updated daily to ensure you always have access to the latest promotions and prices.",
    },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#48C774]/10 rounded-full mb-4">
            <HelpCircle size={32} className="text-[#48C774]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">How can we help you?</h1>
          <p className="text-gray-600 dark:text-gray-400">Get support for PiKSou or send us your feedback</p>
        </motion.div>

        {/* Quick Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <MessageCircle size={20} className="mr-2 text-[#48C774]" />
            Quick Help
          </h2>
          <div className="space-y-4">
            {quickHelp.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="border-l-4 border-[#48C774] pl-4"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#48C774] dark:hover:border-[#48C774] transition-all duration-300 group"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <info.icon size={20} style={{ color: info.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-[#48C774] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-900 dark:text-white font-medium truncate">{info.content}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{info.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Send us a Message</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Can't find what you're looking for? Send us a detailed message and we'll get back to you within 24 hours.
          </p>
          <ContactForm />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          <p>© 2024 PiKSou. Made with ❤️ in Mauritius.</p>
        </motion.div>
      </div>
    </div>
  )
}

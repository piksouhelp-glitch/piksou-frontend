"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { LEGAL_CONTENT } from "@/app/legal/legal-content"

export default function EmbedLegalPage() {
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState<string | null>(null)
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
        {/* Mobile-optimized header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {LEGAL_CONTENT.header.title}
          </h1>
          <p className="text-lg text-[#48C774] font-semibold mb-2">{LEGAL_CONTENT.header.subtitle}</p>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>Last Updated: {LEGAL_CONTENT.header.lastUpdated}</p>
            <p>Version: {LEGAL_CONTENT.header.version}</p>
          </div>
        </motion.div>

        {/* Mobile-optimized navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-6"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 gap-2">
            {LEGAL_CONTENT.navigation.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                  activeSection === section.id
                    ? "bg-[#48C774]/10 text-[#48C774]"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <section.icon size={16} />
                <span className="truncate">{section.title}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-300"
        >
          <div className="p-6 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* Introduction */}
            <section id="introduction">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {LEGAL_CONTENT.sections.introduction.title}
              </h2>
              <div className="space-y-4 text-sm">
                {LEGAL_CONTENT.sections.introduction.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Privacy Policy Section */}
            <section id="privacy-policy">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {LEGAL_CONTENT.sections.privacyPolicy.title}
              </h2>

              {LEGAL_CONTENT.sections.privacyPolicy.subsections.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{subsection.title}</h3>
                  <div className="space-y-3 text-sm">
                    {subsection.items.map((item, itemIndex) => (
                      <p key={itemIndex}>
                        <strong>{item.subtitle}</strong> {item.content}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Terms of Service Section */}
            <section id="terms-of-service">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {LEGAL_CONTENT.sections.termsOfService.title}
              </h2>

              {LEGAL_CONTENT.sections.termsOfService.subsections.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{subsection.title}</h3>
                  <div className="space-y-3 text-sm">
                    {subsection.items.map((item, itemIndex) => (
                      <p key={itemIndex}>
                        <strong>{item.subtitle}</strong> {item.content}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Disclaimers */}
            <section id="disclaimers">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {LEGAL_CONTENT.sections.disclaimers.title}
              </h2>
              <div className="space-y-3 text-sm">
                {LEGAL_CONTENT.sections.disclaimers.content.map((item, index) => (
                  <p key={index}>
                    <strong>{item.subtitle}</strong> {item.content}
                  </p>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {LEGAL_CONTENT.sections.contact.title}
              </h2>
              <div className="space-y-3 text-sm">
                {LEGAL_CONTENT.sections.contact.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-4">
                  <div className="space-y-2 text-sm">
                    {LEGAL_CONTENT.company.name && (
                      <p>
                        <strong>Company:</strong> {LEGAL_CONTENT.company.name}
                      </p>
                    )}
                    {LEGAL_CONTENT.company.address && (
                      <p>
                        <strong>Address:</strong> {LEGAL_CONTENT.company.address}
                      </p>
                    )}
                    {LEGAL_CONTENT.company.emails.general && (
                      <p>
                        <strong>Email:</strong> {LEGAL_CONTENT.company.emails.general}
                      </p>
                    )}
                    {LEGAL_CONTENT.company.emails.privacy && (
                      <p>
                        <strong>Privacy:</strong> {LEGAL_CONTENT.company.emails.privacy}
                      </p>
                    )}
                    {LEGAL_CONTENT.company.emails.legal && (
                      <p>
                        <strong>Legal:</strong> {LEGAL_CONTENT.company.emails.legal}
                      </p>
                    )}
                    {LEGAL_CONTENT.company.phone && (
                      <p>
                        <strong>Phone:</strong> {LEGAL_CONTENT.company.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <section className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
              <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                <p className="mb-2">
                  Last updated: {LEGAL_CONTENT.footer.lastUpdated} | Effective: {LEGAL_CONTENT.footer.effectiveDate} |
                  Version: {LEGAL_CONTENT.footer.version}
                </p>
                <p>{LEGAL_CONTENT.footer.copyright}</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

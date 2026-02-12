"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Phone, Building2 } from "lucide-react"
import RippleButton from "@/components/micro-interactions/ripple-button"
import AnimatedIcon from "@/components/micro-interactions/animated-icon"
import FadeIn from "@/components/animations/fade-in"
import { apiService } from "@/lib/api"

interface PartnerFormData {
  storeName: string
  contactName: string
  email: string
  phone: string
  message: string
}

interface PartnerFormErrors {
  storeName?: string
  contactName?: string
  email?: string
  phone?: string
  message?: string
}

interface PartnersPageFormProps {
  locale?: "en" | "fr"
}

const content = {
  en: {
    title: "Ready to Get Started?",
    subtitle: "Fill out the form below and our partnership team will reach out within 48 hours.",
    labels: {
      storeName: "Store / Business Name *",
      contactName: "Contact Person Name *",
      email: "Email Address *",
      phone: "Phone Number",
      message: "Message *",
    },
    placeholders: {
      storeName: "Enter your store or business name",
      contactName: "Enter your full name",
      email: "Enter your email address",
      phone: "Enter your phone number (optional)",
      message: "Tell us about your store and what you're looking for in a partnership...",
    },
    errors: {
      storeNameRequired: "Store name is required",
      storeNameMin: "Store name must be at least 2 characters",
      contactNameRequired: "Contact name is required",
      contactNameMin: "Contact name must be at least 2 characters",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      phoneInvalid: "Please enter a valid phone number",
      messageRequired: "Message is required",
      messageMin: "Message must be at least 10 characters",
    },
    submitButton: "Submit Partnership Inquiry",
    submitting: "Sending...",
    successTitle: "Inquiry Sent!",
    successMessage: "Thank you for your interest in partnering with PiKSou. Our team will reach out within 48 hours.",
    sendAnother: "Send Another Inquiry",
    footer: "We typically respond within 48 hours. For urgent inquiries, email us at contact@piksou.com.",
    messagePrefix: "[Partner Inquiry from",
  },
  fr: {
    title: "Prêt à Commencer ?",
    subtitle: "Remplissez le formulaire ci-dessous et notre équipe partenariats vous contactera sous 48 heures.",
    labels: {
      storeName: "Nom du Magasin / Entreprise *",
      contactName: "Nom du Contact *",
      email: "Adresse Email *",
      phone: "Numéro de Téléphone",
      message: "Message *",
    },
    placeholders: {
      storeName: "Entrez le nom de votre magasin ou entreprise",
      contactName: "Entrez votre nom complet",
      email: "Entrez votre adresse email",
      phone: "Entrez votre numéro de téléphone (optionnel)",
      message: "Parlez-nous de votre magasin et de ce que vous recherchez dans un partenariat...",
    },
    errors: {
      storeNameRequired: "Le nom du magasin est requis",
      storeNameMin: "Le nom du magasin doit comporter au moins 2 caractères",
      contactNameRequired: "Le nom du contact est requis",
      contactNameMin: "Le nom du contact doit comporter au moins 2 caractères",
      emailRequired: "L'email est requis",
      emailInvalid: "Veuillez entrer une adresse email valide",
      phoneInvalid: "Veuillez entrer un numéro de téléphone valide",
      messageRequired: "Le message est requis",
      messageMin: "Le message doit comporter au moins 10 caractères",
    },
    submitButton: "Envoyer la Demande de Partenariat",
    submitting: "Envoi en cours...",
    successTitle: "Demande Envoyée !",
    successMessage: "Merci pour votre intérêt à devenir partenaire PiKSou. Notre équipe vous contactera sous 48 heures.",
    sendAnother: "Envoyer une Autre Demande",
    footer: "Nous répondons généralement sous 48 heures. Pour les demandes urgentes, écrivez-nous à contact@piksou.com.",
    messagePrefix: "[Demande de partenariat de",
  },
}

export default function PartnersPageForm({ locale = "en" }: PartnersPageFormProps) {
  const t = content[locale]

  const [formData, setFormData] = useState<PartnerFormData>({
    storeName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<PartnerFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "storeName":
        if (!value.trim()) return t.errors.storeNameRequired
        if (value.trim().length < 2) return t.errors.storeNameMin
        break
      case "contactName":
        if (!value.trim()) return t.errors.contactNameRequired
        if (value.trim().length < 2) return t.errors.contactNameMin
        break
      case "email":
        if (!value.trim()) return t.errors.emailRequired
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t.errors.emailInvalid
        break
      case "phone":
        if (value && !/^[+]?[0-9\s\-()]{8,}$/.test(value)) return t.errors.phoneInvalid
        break
      case "message":
        if (!value.trim()) return t.errors.messageRequired
        if (value.trim().length < 10) return t.errors.messageMin
        break
    }
    return undefined
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof PartnerFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
    setFocusedField(null)
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const validateForm = (): boolean => {
    const newErrors: PartnerFormErrors = {}
    let isValid = true

    const requiredFields: (keyof PartnerFormData)[] = ["storeName", "contactName", "email", "message"]
    for (const key of requiredFields) {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
        isValid = false
      }
    }

    if (formData.phone) {
      const phoneError = validateField("phone", formData.phone)
      if (phoneError) {
        newErrors.phone = phoneError
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    if (!validateForm()) return

    setIsSubmitting(true)
    setIsSubmitted(false)
    setSubmitError(null)

    try {
      const payload: Record<string, string> = {
        full_name: formData.contactName,
        email: formData.email,
        subject: "partnership",
        message: `${t.messagePrefix} ${formData.storeName}]\n\n${formData.message}`,
      }
      if (formData.phone) {
        payload.phone = formData.phone
      }

      const result = await apiService.sendSupportMessage(payload)

      if (!result.success) {
        throw new Error(result.error || "Failed to submit inquiry.")
      }

      setIsSubmitted(true)
      setFormData({ storeName: "", contactName: "", email: "", phone: "", message: "" })
    } catch (error: any) {
      const errorMessage = error.message || "Failed to submit inquiry. Please try again."
      console.error("Partner form submission error:", errorMessage)
      setSubmitError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focused: { scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 10 } },
    unfocused: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 10 } },
  }

  const errorVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  const inputClasses = (fieldName: keyof PartnerFormErrors) => `
    block w-full pl-10 pr-3 py-3 border rounded-lg
    bg-gray-50 dark:bg-gray-700
    text-gray-900 dark:text-white
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#48C774] focus:border-transparent
    transition-all duration-200
    ${errors[fieldName] ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
  `

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="partner-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/20 text-center max-w-md mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 10 }}
            >
              <CheckCircle size={64} className="text-[#48C774] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.successTitle}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{t.successMessage}</p>
            <RippleButton variant="primary" onClick={() => setIsSubmitted(false)} className="px-6 py-2">
              {t.sendAnother}
            </RippleButton>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="partner-form">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4 handwritten">
              {t.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">{t.subtitle}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/20 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Store Name — full width */}
            <div className="space-y-2 mb-6">
              <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t.labels.storeName}
              </label>
              <motion.div className="relative" variants={inputVariants} animate={focusedField === "storeName" ? "focused" : "unfocused"}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="storeName"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("storeName")}
                  onBlur={handleBlur}
                  className={inputClasses("storeName")}
                  placeholder={t.placeholders.storeName}
                />
              </motion.div>
              <AnimatePresence>
                {errors.storeName && (
                  <motion.div variants={errorVariants} initial="hidden" animate="visible" exit="hidden" className="flex items-center space-x-1 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    <span>{errors.storeName}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Name + Email — side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t.labels.contactName}
                </label>
                <motion.div className="relative" variants={inputVariants} animate={focusedField === "contactName" ? "focused" : "unfocused"}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("contactName")}
                    onBlur={handleBlur}
                    className={inputClasses("contactName")}
                    placeholder={t.placeholders.contactName}
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.contactName && (
                    <motion.div variants={errorVariants} initial="hidden" animate="visible" exit="hidden" className="flex items-center space-x-1 text-red-500 text-sm">
                      <AlertCircle size={16} />
                      <span>{errors.contactName}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t.labels.email}
                </label>
                <motion.div className="relative" variants={inputVariants} animate={focusedField === "email" ? "focused" : "unfocused"}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className={inputClasses("email")}
                    placeholder={t.placeholders.email}
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.div variants={errorVariants} initial="hidden" animate="visible" exit="hidden" className="flex items-center space-x-1 text-red-500 text-sm">
                      <AlertCircle size={16} />
                      <span>{errors.email}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Phone — half width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t.labels.phone}
                </label>
                <motion.div className="relative" variants={inputVariants} animate={focusedField === "phone" ? "focused" : "unfocused"}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={handleBlur}
                    className={inputClasses("phone")}
                    placeholder={t.placeholders.phone}
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.phone && (
                    <motion.div variants={errorVariants} initial="hidden" animate="visible" exit="hidden" className="flex items-center space-x-1 text-red-500 text-sm">
                      <AlertCircle size={16} />
                      <span>{errors.phone}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Message — full width */}
            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t.labels.message}
              </label>
              <motion.div className="relative" variants={inputVariants} animate={focusedField === "message" ? "focused" : "unfocused"}>
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare size={20} className="text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  className={`
                    block w-full pl-10 pr-3 py-3 border rounded-lg resize-none
                    bg-gray-50 dark:bg-gray-700
                    text-gray-900 dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-[#48C774] focus:border-transparent
                    transition-all duration-200
                    ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                  `}
                  placeholder={t.placeholders.message}
                />
              </motion.div>
              <AnimatePresence>
                {errors.message && (
                  <motion.div variants={errorVariants} initial="hidden" animate="visible" exit="hidden" className="flex items-center space-x-1 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    <span>{errors.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <RippleButton
              variant="primary"
              className={`w-full py-3 px-6 text-lg font-medium ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
              onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
            >
              <div className="flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    </motion.div>
                    <span>{t.submitting}</span>
                  </>
                ) : (
                  <>
                    <AnimatedIcon animation="bounce" trigger="hover">
                      <Send size={20} />
                    </AnimatedIcon>
                    <span>{t.submitButton}</span>
                  </>
                )}
              </div>
            </RippleButton>

            {/* Error Message */}
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="mt-4 flex items-center space-x-2 text-red-500 text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3"
                >
                  <AlertCircle size={16} />
                  <span>{submitError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">{t.footer}</p>
            </div>
          </motion.form>
        </FadeIn>
      </div>
    </section>
  )
}

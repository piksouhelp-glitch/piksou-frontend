"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Phone } from "lucide-react"
import RippleButton from "@/components/micro-interactions/ripple-button"
import AnimatedIcon from "@/components/micro-interactions/animated-icon"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5011"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [token, setToken] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const paramToken = params.get("token")
      setToken(paramToken)
      setIsAuthenticated(!!paramToken)
    }
  }, [])

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Le nom est requis"
        if (value.trim().length < 2) return "Le nom doit contenir au moins 2 caractères"
        break
      case "email":
        if (!value.trim()) return "L'e-mail est requis"
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return "Veuillez entrer une addresse e-mail valide"
        break
      case "phone":
        if (value && !/^[+]?[0-9\s\-$$$$]{8,}$/.test(value)) {
          return "Veuillez entrer un numéro de téléphone valide"
        }
        break
      case "subject":
        if (!value.trim()) return "Le sujet est requis"
        if (value.trim().length < 5) return "Le sujet doit contenir au moins 5 caractères"
        break
      case "message":
        if (!value.trim()) return "Le message est requis"
        if (value.trim().length < 10) return "Le message doit contenir au moins 10 caractères"
        break
    }
    return undefined
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    const newErrors: FormErrors = {}
    let isValid = true

    Object.entries(formData).forEach(([key, value]) => {
      if (token && ["name", "email", "phone"].includes(key)) {
        return
      }

      if (key !== "phone") {
        // Phone is optional
        const error = validateField(key, value)
        if (error) {
          newErrors[key as keyof FormErrors] = error
          isValid = false
        }
      } else if (value) {
        // Validate phone only if provided
        const error = validateField(key, value)
        if (error) {
          newErrors[key as keyof FormErrors] = error
          isValid = false
        }
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) {
      return
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setIsSubmitted(false)

    try {
      const payload: Record<string, string> = {
        subject: formData.subject,
        message: formData.message,
      }

      if (!token) {
        payload.full_name = formData.name
        payload.email = formData.email
        if (formData.phone) {
          payload.phone = formData.phone
        }
      }

      const response = await fetch(`${BASE_URL}api/support/messages/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? {Authorization: `Bearer ${token}`} : {}),
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || "Failed to submit message.")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error: any) {
      console.error("Submission error:", error.message || error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focused: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    unfocused: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
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

  if (isSubmitted) {
    return (
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
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message envoyé !</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Merci de nous avoir contactés. Nous vous répondrons sous 24 heures.
        </p>
        <RippleButton variant="primary" onClick={() => setIsSubmitted(false)} className="px-6 py-2">
          Envoyer un autre message
        </RippleButton>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/20 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        {!isAuthenticated && (
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nom Complet *
            </label>
            <motion.div
              className="relative"
              variants={inputVariants}
              animate={focusedField === "name" ? "focused" : "unfocused"}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                className={`
                  block w-full pl-10 pr-3 py-3 border rounded-lg
                  bg-gray-50 dark:bg-gray-700 
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-[#48C774] focus:border-transparent
                  transition-all duration-200
                  ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                `}
                placeholder="Entrez votre nom complet"
              />
            </motion.div>
            <AnimatePresence>
              {errors.name && (
                <motion.div
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex items-center space-x-1 text-red-500 text-sm"
                >
                  <AlertCircle size={16} />
                  <span>{errors.name}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Email Field */}
        {!isAuthenticated && (
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Adresse E-mail *
            </label>
            <motion.div
              className="relative"
              variants={inputVariants}
              animate={focusedField === "email" ? "focused" : "unfocused"}
            >
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
                className={`
                  block w-full pl-10 pr-3 py-3 border rounded-lg
                  bg-gray-50 dark:bg-gray-700 
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-[#48C774] focus:border-transparent
                  transition-all duration-200
                  ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                `}
                placeholder="Entrez votre adresse e-mail"
              />
            </motion.div>
            <AnimatePresence>
              {errors.email && (
                <motion.div
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex items-center space-x-1 text-red-500 text-sm"
                >
                  <AlertCircle size={16} />
                  <span>{errors.email}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Phone Field */}
        {!isAuthenticated && (
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Numéro de Téléphone
            </label>
            <motion.div
              className="relative"
              variants={inputVariants}
              animate={focusedField === "phone" ? "focused" : "unfocused"}
            >
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
                className={`
                  block w-full pl-10 pr-3 py-3 border rounded-lg
                  bg-gray-50 dark:bg-gray-700 
                  text-gray-900 dark:text-white
                  placeholder-gray-500 dark:placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-[#48C774] focus:border-transparent
                  transition-all duration-200
                  ${errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
                `}
                placeholder="Entrez votre numéro de téléphone (facultatif)"
              />
            </motion.div>
            <AnimatePresence>
              {errors.phone && (
                <motion.div
                  variants={errorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex items-center space-x-1 text-red-500 text-sm"
                >
                  <AlertCircle size={16} />
                  <span>{errors.phone}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Subject Field */}
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Sujet *
          </label>
          <motion.div variants={inputVariants} animate={focusedField === "subject" ? "focused" : "unfocused"}>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              onFocus={() => handleFocus("subject")}
              onBlur={handleBlur}
              className={`
                block w-full px-3 py-3 border rounded-lg
                bg-gray-50 dark:bg-gray-700 
                text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-[#48C774] focus:border-transparent
                transition-all duration-200
                ${errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
              `}
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="general">Demande générale</option>
              <option value="support">Support de l'application</option>
              <option value="partnership">Partenariat</option>
              <option value="feedback">Retour d'expérience</option>
              <option value="bug-report">Signaler un bug</option>
              <option value="feature-request">Demande de fonctionnalité</option>
            </select>
          </motion.div>
          <AnimatePresence>
            {errors.subject && (
              <motion.div
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex items-center space-x-1 text-red-500 text-sm"
              >
                <AlertCircle size={16} />
                <span>{errors.subject}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Message Field */}
      <div className="mt-6 space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message *
        </label>
        <motion.div
          className="relative"
          variants={inputVariants}
          animate={focusedField === "message" ? "focused" : "unfocused"}
        >
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
            placeholder="Dites-nous comment nous pouvons vous aider..."
          />
        </motion.div>
        <AnimatePresence>
          {errors.message && (
            <motion.div
              variants={errorVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex items-center space-x-1 text-red-500 text-sm"
            >
              <AlertCircle size={16} />
              <span>{errors.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <RippleButton
          variant="primary"
          className={`
            w-full py-3 px-6 text-lg font-medium
            ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}
          `}
          onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
        >
          <div className="flex items-center justify-center space-x-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                </motion.div>
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <AnimatedIcon animation="bounce" trigger="hover">
                  <Send size={20} />
                </AnimatedIcon>
                <span>Envoyer le Message</span>
              </>
            )}
          </div>
        </RippleButton>
      </div>

      {/* Form Footer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Nous répondons généralement sous 24 heures. Pour toute urgence, veuillez nous appeler directement.
        </p>
      </div>
    </motion.form>
  )
}

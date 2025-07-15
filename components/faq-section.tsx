"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

export default function FAQSection() {
  const faqs = [
    {
      question: "What is PiKSou?",
      answer:
        "PiKSou is a mobile app that helps you compare grocery deals across supermarkets in Mauritius. It allows you to find the best prices, save money on your shopping, and discover promotions all in one place.",
    },
    {
      question: "Is PiKSou free to use?",
      answer:
        "Yes, PiKSou is completely free to download and use. We believe everyone should have access to tools that help them save money on groceries.",
    },
    {
      question: "Which supermarkets are included in the app?",
      answer:
        "PiKSou currently covers all major supermarkets in Mauritius including Jumbo, Winners, Intermart, and more. We're constantly adding new stores to our database.",
    },
    {
      question: "How often are deals updated?",
      answer:
        "We update our deals database daily to ensure you always have access to the most current promotions and prices. Special promotions are added as soon as they become available.",
    },
    {
      question: "Do I need to create an account to use PiKSou?",
      answer:
        "While you can browse deals without an account, creating a free account allows you to save favorite items, get personalized recommendations, and track your savings over time.",
    },
    {
      question: "Can I use PiKSou offline?",
      answer:
        "You can browse previously loaded deals offline, but to get the latest updates and prices, an internet connection is required. We've optimized the app to use minimal data.",
    },
    {
      question: "Is my location data used by the app?",
      answer:
        "With your permission, PiKSou can use your location to show you deals at nearby supermarkets. This is optional and can be disabled in your app settings at any time.",
    },
    {
      question: "How do I report an incorrect price or deal?",
      answer:
        "We appreciate community feedback! In the app, simply tap on the deal, select 'Report Issue', and provide details. Our team reviews all reports to maintain accuracy.",
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#FFC107] mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Got questions about PiKSou? We've got answers to help you get started.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white py-4 hover:text-[#48C774] dark:hover:text-[#48C774] transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 pb-4 pt-1 transition-colors duration-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Still have questions?{" "}
              <a href="mailto:hello@piksou.mu" className="text-[#48C774] font-medium hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

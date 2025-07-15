"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  FileText,
  Shield,
  Eye,
  Database,
  Users,
  AlertTriangle,
  Gavel,
  Mail,
  Download,
  PrinterIcon as Print,
} from "lucide-react"

// EDITABLE CONTENT CONFIGURATION
const LEGAL_CONTENT = {
  // Document Header Information
  header: {
    title: "PRIVACY POLICY & TERMS OF SERVICE",
    subtitle: "PiKSou Mobile Application",
    lastUpdated: "December 28, 2024",
    effectiveDate: "January 1, 2025",
    version: "1.0",
  },

  // Company Information
  company: {
    name: "[Your Company Name]", // EDIT: Replace with your company name
    address: "[Your Complete Address], Mauritius", // EDIT: Replace with your address
    registrationNumber: "[Registration Number]", // EDIT: Replace with your business registration
    phone: "+230 [Your Phone Number]", // EDIT: Replace with your phone
    emails: {
      general: "hello@piksou.mu",
      privacy: "privacy@piksou.mu",
      legal: "legal@piksou.mu",
    },
  },

  // Navigation Sections
  navigation: [
    { id: "privacy-policy", title: "Privacy Policy", icon: Shield },
    { id: "terms-of-service", title: "Terms of Service", icon: FileText },
    { id: "data-collection", title: "Data Collection", icon: Database },
    { id: "user-rights", title: "User Rights", icon: Eye },
    { id: "user-responsibilities", title: "User Responsibilities", icon: Users },
    { id: "disclaimers", title: "Disclaimers", icon: AlertTriangle },
    { id: "legal-compliance", title: "Legal Compliance", icon: Gavel },
    { id: "contact", title: "Contact Information", icon: Mail },
  ],

  // Main Content Sections
  sections: {
    introduction: {
      title: "INTRODUCTION", // EDIT: Change section title
      content: [
        // EDIT: Replace these paragraphs with your content
        'Welcome to PiKSou, a mobile application designed to help residents of Mauritius compare grocery deals and prices across multiple supermarkets. This comprehensive legal document outlines our Privacy Policy and Terms of Service, which govern your use of the PiKSou mobile application ("App"), website, and related services (collectively, the "Services").',

        "By downloading, installing, accessing, or using PiKSou, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and Terms of Service. If you do not agree with any part of these terms, please do not use our Services.",

        "PiKSou is operated by [Company Name], a company incorporated under the laws of Mauritius, with its registered office at [Address], Mauritius. We are committed to protecting your privacy and providing transparent information about how we collect, use, and protect your personal data.",
      ],
    },

    privacyPolicy: {
      title: "PRIVACY POLICY", // EDIT: Change section title
      subsections: [
        {
          title: "1. INFORMATION WE COLLECT", // EDIT: Change subsection title
          items: [
            {
              subtitle: "1.1 Personal Information:", // EDIT: Change item title
              content:
                "When you create an account with PiKSou, we collect personal information that you voluntarily provide, including but not limited to: your full name, email address, phone number (optional), date of birth (for age verification), and location preferences within Mauritius. This information is necessary to provide you with personalized grocery deal recommendations and to ensure compliance with our terms of service.", // EDIT: Replace content
            },
            {
              subtitle: "1.2 Usage Data:",
              content:
                "We automatically collect information about how you interact with our Services, including: pages or screens viewed, time spent on different sections of the app, search queries, deals viewed and saved, user preferences and settings, click-through rates on deals, and frequency of app usage. This data helps us understand user behavior and improve our Services.",
            },
            {
              subtitle: "1.3 Device Information:",
              content:
                "We may collect information about the device you use to access PiKSou, including: device type and model, operating system and version, unique device identifiers, IP address, mobile network information, and app version. This information helps us ensure compatibility and optimize performance across different devices.",
            },
            {
              subtitle: "1.4 Location Data:",
              content:
                "With your explicit consent, we collect precise location data from your device to show you deals at nearby supermarkets. You can control location sharing through your device settings. We may also collect approximate location based on IP address to provide region-specific content.",
            },
            {
              subtitle: "1.5 Communication Data:",
              content:
                "When you contact us through the app, email, or other communication channels, we collect and store the content of your communications, including support requests, feedback, and any attachments you send.",
            },
          ],
        },
        {
          title: "2. HOW WE USE YOUR INFORMATION",
          items: [
            {
              subtitle: "2.1 Service Provision:",
              content:
                "We use your information to provide, maintain, and improve PiKSou's core functionality, including displaying relevant grocery deals, providing price comparisons, sending personalized recommendations, maintaining your saved items and preferences, and ensuring app security and functionality.",
            },
            {
              subtitle: "2.2 Communication:",
              content:
                "We may use your contact information to send you important updates about the app, notify you of new features or changes to our terms, respond to your inquiries and support requests, and send promotional communications (with your consent, which you can withdraw at any time).",
            },
            {
              subtitle: "2.3 Analytics and Improvement:",
              content:
                "We analyze usage patterns and user feedback to improve PiKSou's functionality, develop new features, optimize user experience, identify and fix technical issues, and conduct research and analytics to better understand our users' needs.",
            },
            {
              subtitle: "2.4 Legal Compliance:",
              content:
                "We may use your information to comply with applicable laws and regulations, respond to legal requests and court orders, protect our rights and the rights of our users, prevent fraud and abuse, and enforce our Terms of Service.",
            },
          ],
        },
        {
          title: "3. INFORMATION SHARING AND DISCLOSURE",
          items: [
            {
              subtitle: "3.1 Third-Party Service Providers:",
              content:
                "We work with trusted third-party service providers to help us operate and improve PiKSou. These may include cloud hosting providers, analytics services, customer support platforms, and marketing tools. All third-party providers are bound by strict confidentiality agreements and are only permitted to use your information for the specific services they provide to us.",
            },
            {
              subtitle: "3.2 Aggregated and Anonymized Data:",
              content:
                "We may share aggregated, anonymized data that cannot be used to identify individual users with supermarket partners, researchers, or other third parties for analytical purposes. This helps improve the overall grocery shopping experience in Mauritius.",
            },
            {
              subtitle: "3.3 Legal Requirements:",
              content:
                "We may disclose your information if required by law, court order, or government request, or if we believe in good faith that such disclosure is necessary to protect our rights, your safety, or the safety of others, investigate fraud or security issues, or comply with legal processes.",
            },
            {
              subtitle: "3.4 Business Transfers:",
              content:
                "In the event of a merger, acquisition, or sale of all or part of our business, user information may be transferred as part of the transaction. We will notify you of any such change in ownership or control of your personal information.",
            },
          ],
        },
      ],
    },

    termsOfService: {
      title: "TERMS OF SERVICE",
      subsections: [
        {
          title: "4. ACCEPTANCE AND MODIFICATION OF TERMS",
          items: [
            {
              subtitle: "4.1 Agreement:",
              content:
                "By accessing or using PiKSou, you enter into a legally binding agreement with us and agree to comply with and be bound by these Terms of Service. This agreement is effective from the date you first use our Services and continues until terminated in accordance with these terms.",
            },
            {
              subtitle: "4.2 Modifications:",
              content:
                "We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes through the app, email, or by posting a notice on our website. Your continued use of PiKSou after such modifications constitutes acceptance of the updated terms. If you do not agree to the modified terms, you must stop using our Services.",
            },
            {
              subtitle: "4.3 Eligibility:",
              content:
                "You must be at least 13 years old to use PiKSou. If you are between 13 and 18 years old, you must have parental or guardian consent to use our Services. By using PiKSou, you represent and warrant that you meet these age requirements and have the legal capacity to enter into this agreement.",
            },
          ],
        },
        {
          title: "5. DESCRIPTION OF SERVICES",
          items: [
            {
              subtitle: "5.1 Core Functionality:",
              content:
                "PiKSou is a mobile application that aggregates and displays grocery deals, prices, and promotional offers from various supermarkets and retailers in Mauritius. Our Services include price comparison tools, deal notifications, savings tracking, and personalized recommendations based on your preferences and location.",
            },
            {
              subtitle: "5.2 Information Accuracy:",
              content:
                "While we strive to provide accurate, up-to-date information about deals and prices, we cannot guarantee the accuracy, completeness, or timeliness of all information displayed in the app. Prices, availability, and promotional terms are subject to change without notice and may vary between locations.",
            },
            {
              subtitle: "5.3 Service Availability:",
              content:
                "We aim to provide continuous, uninterrupted access to PiKSou, but we cannot guarantee 100% uptime. We may temporarily suspend or restrict access to our Services for maintenance, updates, or due to technical issues beyond our control.",
            },
            {
              subtitle: "5.4 Geographic Limitations:",
              content:
                "PiKSou is specifically designed for use in Mauritius and focuses on local supermarkets and retailers. Some features may not be available or may function differently if accessed from outside Mauritius.",
            },
          ],
        },
        {
          title: "6. USER RESPONSIBILITIES AND CONDUCT",
          items: [
            {
              subtitle: "6.1 Account Security:",
              content:
                "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other security breach.",
            },
            {
              subtitle: "6.2 Accurate Information:",
              content:
                "You agree to provide accurate, current, and complete information when creating your account and to promptly update this information as necessary. Providing false or misleading information may result in account suspension or termination.",
            },
            {
              subtitle: "6.3 Prohibited Activities:",
              content:
                "You agree not to: use PiKSou for any unlawful purpose or in violation of these terms; attempt to gain unauthorized access to our systems or other users' accounts; use automated tools, bots, or scripts to access or interact with our Services; submit false, misleading, or fraudulent information about deals or prices; interfere with or disrupt the normal operation of PiKSou; use our Services for commercial purposes without our express written consent; violate any applicable laws or regulations while using our Services.",
            },
            {
              subtitle: "6.4 Content and Feedback:",
              content:
                "Any feedback, suggestions, ideas, or other content you provide to us may be used by us without restriction or compensation to you. You grant us a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and distribute such content.",
            },
          ],
        },
      ],
    },

    dataSecurity: {
      title: "DATA SECURITY AND RETENTION",
      content: [
        {
          subtitle: "7.1 Security Measures:",
          content:
            "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit and at rest, regular security audits, access controls and authentication systems, secure data centers with physical security measures, and regular backup procedures to prevent data loss.",
        },
        {
          subtitle: "7.2 Data Retention:",
          content:
            "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Account information is retained while your account is active and for a reasonable period thereafter. Usage data and analytics information may be retained for longer periods in aggregated, anonymized form.",
        },
        {
          subtitle: "7.3 Data Breach Response:",
          content:
            "In the unlikely event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law, typically within 72 hours of becoming aware of the breach.",
        },
      ],
    },

    userRights: {
      title: "YOUR RIGHTS AND CHOICES",
      content: [
        {
          subtitle: "8.1 Access and Portability:",
          content:
            "You have the right to request access to the personal information we hold about you and to receive a copy of this information in a structured, commonly used, and machine-readable format.",
        },
        {
          subtitle: "8.2 Correction and Updates:",
          content:
            "You can update or correct your personal information at any time through the app settings or by contacting us directly. We will make reasonable efforts to ensure your information is accurate and up-to-date.",
        },
        {
          subtitle: "8.3 Deletion:",
          content:
            "You have the right to request deletion of your personal information, subject to certain legal and operational limitations. You can delete your account through the app settings or by contacting us.",
        },
        {
          subtitle: "8.4 Opt-Out Rights:",
          content:
            "You can opt out of marketing communications, location tracking, and certain data collection features through your app settings or device settings.",
        },
      ],
    },

    disclaimers: {
      title: "DISCLAIMERS AND LIMITATIONS OF LIABILITY",
      content: [
        {
          subtitle: "9.1 Service Disclaimer:",
          content:
            'PiKSou is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our Services will be uninterrupted, error-free, or completely secure.',
        },
        {
          subtitle: "9.2 Information Accuracy:",
          content:
            "While we strive to provide accurate information, we make no representations or warranties about the accuracy, completeness, or reliability of deal information, prices, or availability.",
        },
        {
          subtitle: "9.3 Third-Party Relationships:",
          content:
            "PiKSou is not affiliated with, endorsed by, or connected to the supermarkets and retailers featured in our app. We do not control their pricing, policies, or practices.",
        },
        {
          subtitle: "9.4 Limitation of Liability:",
          content:
            "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of PiKSou.",
        },
      ],
    },

    legalCompliance: {
      title: "LEGAL COMPLIANCE AND GOVERNING LAW",
      content: [
        {
          subtitle: "10.1 Governing Law:",
          content:
            "These Terms of Service and Privacy Policy are governed by and construed in accordance with the laws of Mauritius, without regard to conflict of law principles.",
        },
        {
          subtitle: "10.2 Jurisdiction:",
          content:
            "Any disputes arising out of or relating to these terms or your use of PiKSou shall be subject to the exclusive jurisdiction of the courts of Mauritius.",
        },
        {
          subtitle: "10.3 Compliance:",
          content:
            "We comply with applicable data protection laws, including the Data Protection Act of Mauritius and other relevant privacy regulations.",
        },
        {
          subtitle: "10.4 Termination:",
          content:
            "We may terminate or suspend your access to PiKSou at any time, with or without cause, with or without notice. You may also terminate your account at any time by contacting us or using the account deletion feature in the app.",
        },
      ],
    },

    contact: {
      title: "CONTACT INFORMATION",
      content: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy and Terms of Service, or if you need to exercise your rights regarding your personal data, please contact us using the following information:",
        "We are committed to responding to all inquiries within 48 hours for general questions and within 30 days for formal privacy rights requests, as required by applicable law.",
      ],
    },
  },

  // Footer Information
  footer: {
    lastUpdated: "December 28, 2024",
    effectiveDate: "January 1, 2025",
    version: "1.0",
    language: "English",
    copyright: "© 2024 PiKSou. All rights reserved. Made with ❤️ in Mauritius.",
  },
}

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([document.getElementById("legal-content")?.innerText || ""], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "piksou-legal-document.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header - Print Hidden */}
      <div className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="inline-flex items-center text-[#48C774] hover:text-[#22c55e] transition-colors duration-200"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrint}
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <Print size={16} className="mr-2" />
                Print
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 bg-[#48C774] text-white rounded-lg hover:bg-[#22c55e] transition-colors duration-200"
              >
                <Download size={16} className="mr-2" />
                Download
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white handwritten">
              {LEGAL_CONTENT.header.title}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Complete legal documentation for {LEGAL_CONTENT.header.subtitle}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
              Last updated: {LEGAL_CONTENT.header.lastUpdated} | Effective Date: {LEGAL_CONTENT.header.effectiveDate}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Print Hidden */}
          <div className="lg:col-span-1 print:hidden">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 handwritten">Table of Contents</h2>
                <nav className="space-y-2">
                  {LEGAL_CONTENT.navigation.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                        activeSection === section.id
                          ? "bg-[#48C774]/10 text-[#48C774]"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      <section.icon size={16} />
                      <span className="text-sm">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div
              id="legal-content"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 transition-colors duration-300 print:shadow-none print:rounded-none"
            >
              {/* Document Header - Always Visible */}
              <div className="p-8 border-b border-gray-200 dark:border-gray-700 print:border-black">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 print:text-black">
                    {LEGAL_CONTENT.header.title}
                  </h1>
                  <h2 className="text-2xl text-[#48C774] font-semibold mb-4 print:text-black">
                    {LEGAL_CONTENT.header.subtitle}
                  </h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                    <p>Last Updated: {LEGAL_CONTENT.header.lastUpdated}</p>
                    <p>Effective Date: {LEGAL_CONTENT.header.effectiveDate}</p>
                    <p>Version: {LEGAL_CONTENT.header.version}</p>
                  </div>
                </div>
              </div>

              {/* Long Form Content */}
              <div className="p-8 print:p-4 space-y-12 text-gray-700 dark:text-gray-300 print:text-black leading-relaxed">
                {/* Introduction */}
                <section id="introduction">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.introduction.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.introduction.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                {/* Privacy Policy Section */}
                <section id="privacy-policy">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.privacyPolicy.title}
                  </h2>

                  {LEGAL_CONTENT.sections.privacyPolicy.subsections.map((subsection, subsectionIndex) => (
                    <div key={subsectionIndex} className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black mb-3">
                        {subsection.title}
                      </h3>
                      <div className="space-y-4 text-justify">
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
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.termsOfService.title}
                  </h2>

                  {LEGAL_CONTENT.sections.termsOfService.subsections.map((subsection, subsectionIndex) => (
                    <div key={subsectionIndex} className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black mb-3">
                        {subsection.title}
                      </h3>
                      <div className="space-y-4 text-justify">
                        {subsection.items.map((item, itemIndex) => (
                          <p key={itemIndex}>
                            <strong>{item.subtitle}</strong> {item.content}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>

                {/* Data Security */}
                <section id="data-collection">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.dataSecurity.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.dataSecurity.content.map((item, index) => (
                      <p key={index}>
                        <strong>{item.subtitle}</strong> {item.content}
                      </p>
                    ))}
                  </div>
                </section>

                {/* User Rights */}
                <section id="user-rights">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.userRights.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.userRights.content.map((item, index) => (
                      <p key={index}>
                        <strong>{item.subtitle}</strong> {item.content}
                      </p>
                    ))}
                  </div>
                </section>

                {/* Disclaimers */}
                <section id="disclaimers">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.disclaimers.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.disclaimers.content.map((item, index) => (
                      <p key={index}>
                        <strong>{item.subtitle}</strong> {item.content}
                      </p>
                    ))}
                  </div>
                </section>

                {/* Legal Compliance */}
                <section id="legal-compliance">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.legalCompliance.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.legalCompliance.content.map((item, index) => (
                      <p key={index}>
                        <strong>{item.subtitle}</strong> {item.content}
                      </p>
                    ))}
                  </div>
                </section>

                {/* Contact Information */}
                <section id="contact">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.contact.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.contact.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                    <div className="bg-gray-50 dark:bg-gray-700 print:bg-gray-100 p-6 rounded-lg">
                      <p>
                        <strong>Company Name:</strong> {LEGAL_CONTENT.company.name}
                      </p>
                      <p>
                        <strong>Registered Address:</strong> {LEGAL_CONTENT.company.address}
                      </p>
                      <p>
                        <strong>Email:</strong> {LEGAL_CONTENT.company.emails.general}
                      </p>
                      <p>
                        <strong>Privacy Inquiries:</strong> {LEGAL_CONTENT.company.emails.privacy}
                      </p>
                      <p>
                        <strong>Legal Inquiries:</strong> {LEGAL_CONTENT.company.emails.legal}
                      </p>
                      <p>
                        <strong>Phone:</strong> {LEGAL_CONTENT.company.phone}
                      </p>
                      <p>
                        <strong>Business Registration:</strong> {LEGAL_CONTENT.company.registrationNumber}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Document Footer */}
                <section className="border-t border-gray-200 dark:border-gray-700 print:border-black pt-8 mt-12">
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 print:text-black">
                    <p className="mb-2">
                      This document was last updated on {LEGAL_CONTENT.footer.lastUpdated}, and is effective as of{" "}
                      {LEGAL_CONTENT.footer.effectiveDate}.
                    </p>
                    <p className="mb-2">
                      Document Version: {LEGAL_CONTENT.footer.version} | Language: {LEGAL_CONTENT.footer.language}
                    </p>
                    <p>{LEGAL_CONTENT.footer.copyright}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

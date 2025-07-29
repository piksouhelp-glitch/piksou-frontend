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
      title: "INTRODUCTION",
      content: [
        "Welcome to PiKSou — a mobile app that helps people in Mauritius compare grocery prices and deals across different supermarkets. This document explains our Privacy Policy and Terms of Service.",

        "By using PiKSou, you agree to our policies. If you don’t agree, please don’t use the app.",
        "PiKSou is run by [Company Name], based in Mauritius at [Address]. We respect your privacy and are transparent about how we use your information.",
      ],
    },

    privacyPolicy: {
      title: "PRIVACY POLICY",
      subsections: [
        {
          title: "1. INFORMATION WE COLLECT",
          items: [
            {
              subtitle: "1.1 Personal Info:",
              content:
                "When you sign up, we may collect your name, email, and location preferences to show you local deals.",
            },
            {
              subtitle: "1.2 Usage Info:",
              content:
                "We track how you use the app — like which deals you save or purchase — to improve your experience.",
            },
            {
              subtitle: "1.3 Device Info:",
              content:
                "We collect info about your phone like device type, operating system, and app version to help with support and performance.",
            },
            // {
            //   subtitle: "1.4 Location Data:",
            //   content:
            //     "With your permission, we use your location to show nearby deals. You can turn this off in your settings."
            // },
            {
              subtitle: "1.5 Messages:",
              content:
                "If you contact us, we keep your messages and any files you send to help solve your issue.",
            },
          ],
        },
        {
          title: "2. HOW WE USE YOUR INFORMATION",
          items: [
            {
              subtitle: "2.1 To Run the App:",
              content:
                "We use your info to show deals, save your preferences, and keep the app working well.",
            },
            {
              subtitle: "2.2 To Contact You:",
              content:
                "We may send you updates or replies to your messages. We only send promo messages if you agree — and you can opt out anytime.",
            },
            {
              subtitle: "2.3 To Improve PiKSou:",
              content:
                "We use data to fix bugs, make features better, and understand what users like.",
            },
            {
              subtitle: "2.4 Legal Reasons:",
              content:
                "We may use your info to follow the law, respond to legal requests, or stop fraud.",
            },
          ],
        },
        {
          title: "3. SHARING YOUR INFORMATION",
          items: [
            {
              subtitle: "3.1 Service Providers:",
              content:
                "We may share info with trusted companies that help us run the app — like cloud hosting or support services.",
            },
            {
              subtitle: "3.2 Anonymous Data:",
              content:
                "We may share anonymous, non-personal data with partners to improve shopping in Mauritius.",
            },
            {
              subtitle: "3.3 Legal Requirements:",
              content:
                "We share your data if the law requires it or to protect your safety or ours.",
            },
            {
              subtitle: "3.4 Business Transfers:",
              content:
                "If PiKSou is ever sold or merged, your data may be shared as part of that process. We'll let you know if that happens.",
            },
          ],
        },
      ],
    },

    termsOfService: {
      title: "TERMS OF SERVICE",
      subsections: [
        {
          title: "4. USING PiKSou",
          items: [
            {
              subtitle: "4.1 Agreement:",
              content:
                "By using PiKSou, you agree to follow these terms and use the app responsibly.",
            },
            {
              subtitle: "4.2 Changes to Terms:",
              content:
                "We may update these terms and will let you know if anything important changes.",
            },
            {
              subtitle: "4.3 Age Requirement:",
              content:
                "You must be at least 13 years old. If you're under 18, you need a parent or guardian’s permission.",
            },
          ],
        },
        {
          title: "5. ABOUT THE APP",
          items: [
            {
              subtitle: "5.1 What PiKSou Does:",
              content:
                "PiKSou shows you grocery deals and lets you compare prices from supermarkets in Mauritius.",
            },
            {
              subtitle: "5.2 Deal Accuracy:",
              content:
                "We try to keep deal info accurate, but prices and offers may change without notice.",
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
          title: "6. YOUR RESPONSIBILITIES",
          items: [
            {
              subtitle: "6.1 Keep Your Account Safe:",
              content:
                "You’re responsible for your account. Let us know right away if someone else uses it without your permission.",
            },
            {
              subtitle: "6.2 Be Honest:",
              content:
                "Give accurate info when signing up or contacting us. Don’t pretend to be someone else.",
            },
            {
              subtitle: "6.3 Don’t Misuse the App:",
              content:
                "Don’t hack, spam, or use bots. Don’t share fake deals or use the app for illegal stuff.",
            },
            {
              subtitle: "6.4 Sharing Ideas:",
              content:
                "If you send us suggestions or feedback, we can use them without paying you.",
            },
          ],
        },
      ],
    },

    dataSecurity: {
      title: "DATA SECURITY AND RETENTION",
      content: [
        {
          subtitle: "7.1 Keeping Data Safe:",
          content:
            "We use encryption, secure servers, and access controls to protect your data.",
        },
        {
          subtitle: "7.2 How Long We Keep It:",
          content:
            "We keep your info while your account is active. Some non-personal data may be kept longer for analysis.",
        },
        {
          subtitle: "7.3 If There's a Breach:",
          content:
            "If your data is ever compromised, we’ll let you and the authorities know as required by law.",
        },
      ],
    },

    userRights: {
      title: "YOUR RIGHTS AND CHOICES",
      content: [
        {
          subtitle: "8.1 Access Your Info:",
          content: "You can ask for a copy of your personal data anytime.",
        },
        {
          subtitle: "8.2 Update Info:",
          content:
            "You can edit your info in the app or contact us to correct it.",
        },
        {
          subtitle: "8.3 Delete Account:",
          content:
            "You can delete your account anytime from the app or by contacting us.",
        },
        {
          subtitle: "8.4 Turn Off Tracking:",
          content:
            "You can disable location tracking and opt out of marketing through your app settings.",
        },
      ],
    },

    disclaimers: {
      title: "DISCLAIMERS AND LIMITATIONS OF LIABILITY",
      content: [
        {
          subtitle: "9.1 No Guarantees:",
          content:
            "PiKSou is provided 'as is'. We can’t promise it will always work perfectly.",
        },
        {
          subtitle: "9.2 Info Accuracy:",
          content:
            "We do our best, but we can’t guarantee all deal info is always correct or up-to-date.",
        },
        {
          subtitle: "9.3 Not Affiliated:",
          content:
            "We aren’t officially partnered with the supermarkets listed in the app.",
        },
        {
          subtitle: "9.4 Limited Liability:",
          content:
            "We aren’t responsible for indirect damages like lost savings or data from using PiKSou.",
        },
      ],
    },

    legalCompliance: {
      title: "LEGAL COMPLIANCE AND GOVERNING LAW",
      content: [
        {
          subtitle: "10.1 Laws We Follow:",
          content:
            "We follow the laws of Mauritius, including the Data Protection Act.",
        },
        {
          subtitle: "10.2 Where Disputes Go:",
          content:
            "Any legal issues will be handled by the courts of Mauritius.",
        },
        {
          subtitle: "10.3 Ending the Agreement:",
          content:
            "We may suspend your account if needed. You can also delete your account at any time.",
        },
      ],
    },

    contact: {
      title: "CONTACT INFORMATION",
      content: [
        "Questions or concerns? Contact us via email or through the app.",
        "We reply to general questions within 48 hours and formal data requests within 30 days.",
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
};

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [document.getElementById("legal-content")?.innerText || ""],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "piksou-legal-document.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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
              Last updated: {LEGAL_CONTENT.header.lastUpdated} | Effective Date:{" "}
              {LEGAL_CONTENT.header.effectiveDate}
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
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 handwritten">
                  Table of Contents
                </h2>
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
                    {LEGAL_CONTENT.sections.introduction.content.map(
                      (paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      )
                    )}
                  </div>
                </section>

                {/* Privacy Policy Section */}
                <section id="privacy-policy">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.privacyPolicy.title}
                  </h2>

                  {LEGAL_CONTENT.sections.privacyPolicy.subsections.map(
                    (subsection, subsectionIndex) => (
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
                    )
                  )}
                </section>

                {/* Terms of Service Section */}
                <section id="terms-of-service">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.termsOfService.title}
                  </h2>

                  {LEGAL_CONTENT.sections.termsOfService.subsections.map(
                    (subsection, subsectionIndex) => (
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
                    )
                  )}
                </section>

                {/* Data Security */}
                <section id="data-collection">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.dataSecurity.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.dataSecurity.content.map(
                      (item, index) => (
                        <p key={index}>
                          <strong>{item.subtitle}</strong> {item.content}
                        </p>
                      )
                    )}
                  </div>
                </section>

                {/* User Rights */}
                <section id="user-rights">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.userRights.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.userRights.content.map(
                      (item, index) => (
                        <p key={index}>
                          <strong>{item.subtitle}</strong> {item.content}
                        </p>
                      )
                    )}
                  </div>
                </section>

                {/* Disclaimers */}
                <section id="disclaimers">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.disclaimers.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.disclaimers.content.map(
                      (item, index) => (
                        <p key={index}>
                          <strong>{item.subtitle}</strong> {item.content}
                        </p>
                      )
                    )}
                  </div>
                </section>

                {/* Legal Compliance */}
                <section id="legal-compliance">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.legalCompliance.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.legalCompliance.content.map(
                      (item, index) => (
                        <p key={index}>
                          <strong>{item.subtitle}</strong> {item.content}
                        </p>
                      )
                    )}
                  </div>
                </section>

                {/* Contact Information */}
                <section id="contact">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                    {LEGAL_CONTENT.sections.contact.title}
                  </h2>
                  <div className="space-y-4 text-justify">
                    {LEGAL_CONTENT.sections.contact.content.map(
                      (paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      )
                    )}
                    <div className="bg-gray-50 dark:bg-gray-700 print:bg-gray-100 p-6 rounded-lg">
                      <p>
                        <strong>Company Name:</strong>{" "}
                        {LEGAL_CONTENT.company.name}
                      </p>
                      <p>
                        <strong>Registered Address:</strong>{" "}
                        {LEGAL_CONTENT.company.address}
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        {LEGAL_CONTENT.company.emails.general}
                      </p>
                      <p>
                        <strong>Privacy Inquiries:</strong>{" "}
                        {LEGAL_CONTENT.company.emails.privacy}
                      </p>
                      <p>
                        <strong>Legal Inquiries:</strong>{" "}
                        {LEGAL_CONTENT.company.emails.legal}
                      </p>
                      <p>
                        <strong>Phone:</strong> {LEGAL_CONTENT.company.phone}
                      </p>
                      <p>
                        <strong>Business Registration:</strong>{" "}
                        {LEGAL_CONTENT.company.registrationNumber}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Document Footer */}
                <section className="border-t border-gray-200 dark:border-gray-700 print:border-black pt-8 mt-12">
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 print:text-black">
                    <p className="mb-2">
                      This document was last updated on{" "}
                      {LEGAL_CONTENT.footer.lastUpdated}, and is effective as of{" "}
                      {LEGAL_CONTENT.footer.effectiveDate}.
                    </p>
                    <p className="mb-2">
                      Document Version: {LEGAL_CONTENT.footer.version} |
                      Language: {LEGAL_CONTENT.footer.language}
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
  );
}

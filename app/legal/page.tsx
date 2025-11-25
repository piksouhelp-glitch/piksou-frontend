"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, PrinterIcon as Print } from "lucide-react"

import { LEGAL_CONTENT } from "./legal-content"

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

                {/* Legal Disclaimer */}
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
                    <div className="bg-gray-50 dark:bg-gray-700 print:bg-gray-100 p-6 rounded-lg space-y-2">
                      {LEGAL_CONTENT.company.name && (
                        <p>
                          <strong>Company Name:</strong>{" "}
                          {LEGAL_CONTENT.company.name}
                        </p>
                      )}
                      {LEGAL_CONTENT.company.address && (
                        <p>
                          <strong>Registered Address:</strong>{" "}
                          {LEGAL_CONTENT.company.address}
                        </p>
                      )}
                      {LEGAL_CONTENT.company.emails.general && (
                        <p>
                          <strong>Email:</strong>{" "}
                          {LEGAL_CONTENT.company.emails.general}
                        </p>
                      )}
                      {LEGAL_CONTENT.company.emails.privacy && (
                        <p>
                          <strong>Privacy Inquiries:</strong>{" "}
                          {LEGAL_CONTENT.company.emails.privacy}
                        </p>
                      )}
                      {LEGAL_CONTENT.company.emails.legal && (
                        <p>
                          <strong>Legal Inquiries:</strong>{" "}
                          {LEGAL_CONTENT.company.emails.legal}
                        </p>
                      )}
                      {LEGAL_CONTENT.company.phone && (
                        <p>
                          <strong>Phone:</strong> {LEGAL_CONTENT.company.phone}
                        </p>
                      )}
                      {LEGAL_CONTENT.company.registrationNumber && (
                        <p>
                          <strong>Business Registration:</strong>{" "}
                          {LEGAL_CONTENT.company.registrationNumber}
                        </p>
                      )}
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

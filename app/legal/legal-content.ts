import { AlertTriangle, FileText, Mail, Shield } from "lucide-react"

export const LEGAL_CONTENT = {
  header: {
    title: "PikSou – Legal Center",
    subtitle: "Privacy Policy, Terms of Use & Legal Disclaimer",
    lastUpdated: "November 15, 2025",
    effectiveDate: "November 15, 2025",
    version: "1.0",
  },

  company: {
    name: "PikSou Ltd",
    address: "26, Le Petit Trianon, Trianon, Quatre Bornes, Mauritius",
    registrationNumber: "",
    phone: "",
    emails: {
      general: "contact@piksou.com",
      privacy: "",
      legal: "",
    },
  },

  navigation: [
    { id: "privacy-policy", title: "Privacy Policy", icon: Shield },
    { id: "terms-of-service", title: "Terms of Use", icon: FileText },
    { id: "disclaimers", title: "Legal Disclaimer", icon: AlertTriangle },
    { id: "contact", title: "Contact", icon: Mail },
  ],

  sections: {
    introduction: {
      title: "INTRODUCTION",
      content: [
        "PikSou (“we”, “our”, “us”) is committed to protecting your privacy and being transparent about how our app works. This page brings together the latest versions of our Privacy Policy, Terms of Use, and Legal Disclaimer so you can review how we collect data, what you can expect from PikSou, and the responsibilities that come with using our services.",
        "By downloading or using the PikSou mobile app, website, or related services (“App”), you acknowledge that you have read and agree to the documents below. If you do not agree, please discontinue use of the App.",
      ],
    },

    privacyPolicy: {
      title: "PRIVACY POLICY",
      subsections: [
        {
          title: "1. INFORMATION WE COLLECT",
          items: [
            {
              subtitle: "1.1 Information You Provide:",
              content:
                "Account information such as your name, email address, and phone number (when required), your shopping preferences including saved items, shopping lists, or categories you follow, and any support messages or feedback you share with us.",
            },
            {
              subtitle: "1.2 Information We Automatically Collect:",
              content:
                "Device details (model, operating system, unique identifiers), log and analytics data (IP address, time zone, feature usage, performance metrics, crash diagnostics), and optional approximate location data to personalise supermarkets near you. We do not track precise location without consent.",
            },
            {
              subtitle: "1.3 Information From Images:",
              content:
                "If you use scanning features, we process receipt images, product photos, or screenshots of catalogues/shelves using OCR to extract text such as product names, prices, quantities, and supermarket names. Images are processed securely and never sold to third parties.",
            },
          ],
        },
        {
          title: "2. HOW WE USE YOUR INFORMATION",
          items: [
            {
              subtitle: "",
              content:
                "Provide core app features (price comparison, search, and notifications), improve data accuracy through OCR and machine learning, personalise your experience, analyse trends and usage patterns, troubleshoot or prevent technical issues, and communicate updates, new features, or relevant alerts. We do not sell your personal information.",
            },
          ],
        },
        {
          title: "3. HOW WE SHARE INFORMATION",
          items: [
            {
              subtitle: "3.1 Service Providers:",
              content:
                "Trusted partners that assist with hosting, analytics, data processing, and app security. They only access the data necessary to perform their services.",
            },
            {
              subtitle: "3.2 Legal Requirements:",
              content:
                "We may disclose information if required by law or to protect our rights, users, or the public.",
            },
            {
              subtitle: "3.3 Aggregated or Anonymised Data:",
              content:
                "We may share anonymised insights (e.g., “Most searched product categories in Mauritius”) that do not identify individuals, and we never share user data with supermarkets unless you explicitly agree.",
            },
          ],
        },
        {
          title: "4. HOW WE STORE & PROTECT YOUR DATA",
          items: [
            {
              subtitle: "",
              content:
                "We use encrypted storage, secure servers, and industry-standard security measures. No system is 100% secure, and while you use PikSou at your own risk, we take all reasonable steps to safeguard your data.",
            },
          ],
        },
        {
          title: "5. DATA RETENTION",
          items: [
            {
              subtitle: "",
              content:
                "We retain your data only as long as necessary to operate the App. If you delete your account, personal data is deleted while anonymised or aggregated data may be retained for analytics.",
            },
          ],
        },
        {
          title: "6. YOUR RIGHTS",
          items: [
            {
              subtitle: "",
              content:
                "You may access, correct, or request deletion of your personal data (“right to be forgotten”), withdraw consent for specific processing, and disable permissions such as camera, photos, or location at any time. To exercise your rights, email contact@piksou.com.",
            },
          ],
        },
        {
          title: "7. CHILDREN’S PRIVACY",
          items: [
            {
              subtitle: "",
              content:
                "PikSou is not intended for children under 16 without parental supervision, and we do not knowingly collect data from children.",
            },
          ],
        },
        {
          title: "8. INTERNATIONAL DATA TRANSFERS",
          items: [
            {
              subtitle: "",
              content:
                "Your data may be processed outside Mauritius (e.g., via cloud services), and we ensure adequate protection wherever the data is processed.",
            },
          ],
        },
        {
          title: "9. UPDATES TO THIS POLICY",
          items: [
            {
              subtitle: "",
              content:
                "We may update this Privacy Policy periodically and will communicate significant changes through the App.",
            },
          ],
        },
        {
          title: "10. CONTACT US",
          items: [
            {
              subtitle: "",
              content:
                "PikSou Ltd, 26, Le Petit Trianon, Trianon, Quatre Bornes, Mauritius. Email: contact@piksou.com.",
            },
          ],
        },
      ],
    },

    termsOfService: {
      title: "TERMS OF USE",
      subsections: [
        {
          title: "1. WHAT PIKSOU DOES",
          items: [
            {
              subtitle: "",
              content:
                "PikSou helps users compare supermarket prices by extracting information from publicly available brochures, catalogues, and promotional materials. We do not sell products, set prices, or represent any supermarket or brand, and all information is for reference only.",
            },
          ],
        },
        {
          title: "2. ELIGIBILITY",
          items: [
            {
              subtitle: "",
              content:
                "You must be at least 16 years old to use PikSou. Younger users may only use the App with parental consent.",
            },
          ],
        },
        {
          title: "3. USE OF PUBLICLY AVAILABLE CONTENT",
          items: [
            {
              subtitle: "",
              content:
                "We use product names, prices, discounts, promotions, product images, and metadata extracted through OCR from publicly accessible sources. PikSou is not affiliated with, endorsed by, or sponsored by any supermarket unless explicitly stated.",
            },
          ],
        },
        {
          title: "4. ACCURACY OF INFORMATION",
          items: [
            {
              subtitle: "",
              content:
                "Prices and promotions may change, may be location-specific, and OCR extraction may introduce errors. Stock availability is not guaranteed, and users should verify prices directly with the supermarket.",
            },
          ],
        },
        {
          title: "5. YOUR RESPONSIBILITIES",
          items: [
            {
              subtitle: "",
              content:
                "Do not misuse PikSou for unlawful or fraudulent purposes, scrape or extract data without permission, attempt to bypass technical security measures, or use PikSou’s data to build a competing platform without written consent. Unless otherwise agreed, you may only use PikSou for personal, non-commercial purposes.",
            },
          ],
        },
        {
          title: "6. INTELLECTUAL PROPERTY",
          items: [
            {
              subtitle: "",
              content:
                "PikSou owns the app design, algorithms, data extraction processes, features, and UI/UX. Supermarket images, logos, and trademarks remain the property of their respective owners, and using PikSou does not grant ownership rights over third-party content.",
            },
          ],
        },
        {
          title: "7. NO LIABILITY",
          items: [
            {
              subtitle: "",
              content:
                "To the maximum extent allowed by Mauritian law, PikSou is not liable for inaccuracies, changes in supermarket pricing, discontinued products, OCR or user-input errors, or any loss, damage, or decisions made based on information from the App. You use PikSou at your own risk.",
            },
          ],
        },
        {
          title: "8. CHANGES TO THE APP",
          items: [
            {
              subtitle: "",
              content:
                "We may modify, update, or discontinue parts of the App, and we may update these Terms when necessary. Significant changes will be communicated through the App.",
            },
          ],
        },
        {
          title: "9. PRIVACY",
          items: [
            {
              subtitle: "",
              content:
                "We only collect the data necessary to operate the App, provide insights, improve accuracy, and personalise your experience. See the Privacy Policy above for details.",
            },
          ],
        },
        {
          title: "10. THIRD-PARTY LINKS",
          items: [
            {
              subtitle: "",
              content:
                "PikSou may contain links to third-party sites. We are not responsible for their content, policies, or actions.",
            },
          ],
        },
        {
          title: "11. TERMINATION",
          items: [
            {
              subtitle: "",
              content:
                "We may suspend or terminate access if you breach these Terms, misuse the App, or attempt to compromise security or data integrity. You may stop using the App at any time.",
            },
          ],
        },
        {
          title: "12. GOVERNING LAW",
          items: [
            {
              subtitle: "",
              content:
                "These Terms are governed by the laws of Mauritius, and disputes will be resolved in Mauritian courts.",
            },
          ],
        },
        {
          title: "13. CONTACT US",
          items: [
            {
              subtitle: "",
              content:
                "For questions or partnership discussions, email contact@piksou.com or write to PikSou Ltd, 26, Le Petit Trianon, Trianon, Quatre Bornes, Mauritius.",
            },
          ],
        },
      ],
    },

    disclaimers: {
      title: "LEGAL DISCLAIMER",
      content: [
        {
          subtitle: "1. Not Affiliated With Supermarkets",
          content:
            "PikSou is an independent app and is not affiliated with, endorsed by, or sponsored by any supermarket, supplier, or brand unless explicitly stated. Supermarket names, logos, product images, and trademarks belong to their respective owners.",
        },
        {
          subtitle: "2. Use of Public Information",
          content:
            "We extract product data from publicly available supermarket catalogues, promotional brochures, and marketing materials, present the content as-is, and do not claim ownership over it.",
        },
        {
          subtitle: "3. Accuracy of Prices & Promotions",
          content:
            "We cannot guarantee that prices are correct, promotions are valid, products are in stock, items are available in every branch, or expiry dates are up-to-date. Users should verify information directly with supermarkets, and PikSou is not responsible for losses or decisions based on app data.",
        },
        {
          subtitle: "4. OCR & Automated Extraction",
          content:
            "Because some data is captured through OCR and automated processes, errors, incomplete information, or misread discounts may occur. PikSou does not guarantee error-free extraction.",
        },
        {
          subtitle: "5. No Liability",
          content:
            "To the maximum extent permitted by Mauritian law, PikSou is not liable for inaccurate or outdated information, product availability, financial or commercial loss, or technical failures, bugs, or interruptions. Use the app at your own risk.",
        },
        {
          subtitle: "6. No Commercial Advice",
          content:
            "PikSou does not provide financial, dietary, or shopping advice. All decisions remain the user’s responsibility.",
        },
        {
          subtitle: "7. Third-Party Links",
          content:
            "External links may appear in the App. PikSou is not responsible for the content, policies, or actions of third-party sites or services.",
        },
        {
          subtitle: "8. Consent",
          content:
            "By using PikSou, you acknowledge that you have read, understood, and agreed to this Legal Disclaimer.",
        },
      ],
    },

    contact: {
      title: "CONTACT INFORMATION",
      content: [
        "Have questions about our policies or need to exercise your privacy rights? Reach out anytime and we will respond to general queries within 48 hours and formal data requests within 30 days whenever possible.",
      ],
    },
  },

  footer: {
    lastUpdated: "November 15, 2025",
    effectiveDate: "November 15, 2025",
    version: "1.0",
    language: "English",
    copyright: "© 2025 PikSou Ltd. All rights reserved.",
  },
}

export type LegalContent = typeof LEGAL_CONTENT


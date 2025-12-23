import Script from "next/script"

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PiKSou",
    url: "https://piksou.mu",
    logo: "https://piksou.mu/images/piksou-logo.svg",
    description: "Compare grocery deals across all major supermarkets in Mauritius",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "PiKSou Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Trianon",
      addressCountry: "MU",
      addressLocality: "Quatre Bornes",
      addressRegion: "Mauritius",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+230-XXXX-XXXX",
      contactType: "customer service",
      email: "hello@piksou.mu",
      availableLanguage: ["English", "French", "Creole"],
    },
    sameAs: ["https://facebook.com/piksou.mu", "https://instagram.com/piksou.mu", "https://tiktok.com/@piksou.mu"],
  }

  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "PiKSou",
    description: "Compare grocery deals across all major supermarkets in Mauritius",
    applicationCategory: "Shopping",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
      bestRating: "5",
      worstRating: "1",
    },
    downloadUrl: [
      "https://apps.apple.com/app/idXXXXXXXXX",
      "https://play.google.com/store/apps/details?id=com.piksou.app",
    ],
    screenshot: [
      "https://piksou.mu/images/app-screenshot-1.png",
      "https://piksou.mu/images/app-screenshot-2.png",
      "https://piksou.mu/images/app-screenshot-3.png",
    ],
    author: {
      "@type": "Organization",
      name: "PiKSou",
    },
    datePublished: "2024-01-01",
    version: "1.0",
    fileSize: "25MB",
    contentRating: "Everyone",
    countriesSupported: "MU",
    supportUrl: "https://piksou.mu/#contact",
    privacyPolicyUrl: "https://piksou.mu/legal",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PiKSou",
    url: "https://piksou.mu",
    description: "Compare grocery deals across all major supermarkets in Mauritius",
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://piksou.mu/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "PiKSou",
      logo: {
        "@type": "ImageObject",
        url: "https://piksou.mu/images/piksou-logo.svg",
      },
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Grocery Price Comparison Service",
    description: "Compare grocery deals and prices across major supermarkets in Mauritius",
    provider: {
      "@type": "Organization",
      name: "PiKSou",
    },
    areaServed: {
      "@type": "Country",
      name: "Mauritius",
    },
    serviceType: "Price Comparison",
    category: "Shopping",
    audience: {
      "@type": "Audience",
      geographicArea: {
        "@type": "Country",
        name: "Mauritius",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Grocery Deals",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Grocery Items",
            category: "Food & Beverages",
          },
        },
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PiKSou?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PiKSou is a mobile app that helps you compare grocery deals across supermarkets in Mauritius. It allows you to find the best prices, save money on your shopping, and discover promotions all in one place.",
        },
      },
      {
        "@type": "Question",
        name: "Is PiKSou free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PiKSou is completely free to download and use. We believe everyone should have access to tools that help them save money on groceries.",
        },
      },
      {
        "@type": "Question",
        name: "Which supermarkets are included in the app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PiKSou currently covers all major supermarkets in Mauritius including Jumbo, Winners, Intermart, and more. We're constantly adding new stores to our database.",
        },
      },
      {
        "@type": "Question",
        name: "How often are deals updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We update our deals database daily to ensure you always have access to the most current promotions and prices. Special promotions are added as soon as they become available.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://piksou.mu",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: "https://piksou.mu#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Download",
        item: "https://piksou.mu#download",
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="mobile-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileAppSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}

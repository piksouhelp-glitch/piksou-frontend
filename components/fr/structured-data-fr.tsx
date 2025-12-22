import Script from "next/script"

export default function StructuredDataFr() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PiKSou",
    url: "https://piksou.mu/fr",
    logo: "https://piksou.mu/images/piksou-logo.svg",
    description: "Comparez les offres d'épicerie dans tous les grands supermarchés de Maurice",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Équipe PiKSou",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Trianon",
      addressCountry: "MU",
      addressLocality: "Quatre Bornes",
      addressRegion: "Maurice",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+230-XXXX-XXXX",
      contactType: "service client",
      email: "hello@piksou.mu",
      availableLanguage: ["Français", "Anglais", "Créole"],
    },
    sameAs: ["https://facebook.com/piksou.mu", "https://instagram.com/piksou.mu", "https://tiktok.com/@piksou.mu"],
  }

  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "PiKSou",
    description: "Comparez les offres d'épicerie dans tous les grands supermarchés de Maurice",
    applicationCategory: "Shopping",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
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
    contentRating: "Tout public",
    countriesSupported: "MU",
    supportUrl: "https://piksou.mu/fr#contact",
    privacyPolicyUrl: "https://piksou.mu/legal",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PiKSou",
    url: "https://piksou.mu/fr",
    description: "Comparez les offres d'épicerie dans tous les grands supermarchés de Maurice",
    inLanguage: "fr-MU",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://piksou.mu/fr/recherche?q={search_term_string}",
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
    name: "Service de Comparaison de Prix d'Épicerie",
    description: "Comparez les offres et prix d'épicerie dans les grands supermarchés de Maurice",
    provider: {
      "@type": "Organization",
      name: "PiKSou",
    },
    areaServed: {
      "@type": "Country",
      name: "Maurice",
    },
    serviceType: "Comparaison de Prix",
    category: "Shopping",
    audience: {
      "@type": "Audience",
      geographicArea: {
        "@type": "Country",
        name: "Maurice",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Offres d'Épicerie",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Articles d'Épicerie",
            category: "Alimentation et Boissons",
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
        name: "Qu'est-ce que PiKSou ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PiKSou est une application mobile qui vous aide à comparer les offres d'épicerie dans les supermarchés de Maurice. Elle vous permet de trouver les meilleurs prix, d'économiser sur vos courses et de découvrir les promotions en un seul endroit.",
        },
      },
      {
        "@type": "Question",
        name: "PiKSou est-il gratuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, PiKSou est entièrement gratuit à télécharger et à utiliser. Nous croyons que tout le monde devrait avoir accès à des outils qui l'aident à économiser sur l'épicerie.",
        },
      },
      {
        "@type": "Question",
        name: "Quels supermarchés sont inclus dans l'application ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PiKSou couvre actuellement tous les grands supermarchés de Maurice, notamment Jumbo, Winners, Intermart, et plus encore. Nous ajoutons constamment de nouveaux magasins à notre base de données.",
        },
      },
      {
        "@type": "Question",
        name: "À quelle fréquence les offres sont-elles mises à jour ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous mettons à jour notre base de données d'offres quotidiennement pour vous assurer d'avoir toujours accès aux promotions et prix les plus récents. Les promotions spéciales sont ajoutées dès qu'elles deviennent disponibles.",
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
        name: "Accueil",
        item: "https://piksou.mu/fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fonctionnalités",
        item: "https://piksou.mu/fr#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Télécharger",
        item: "https://piksou.mu/fr#download",
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema-fr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="mobile-app-schema-fr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileAppSchema),
        }}
      />
      <Script
        id="website-schema-fr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="service-schema-fr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="faq-schema-fr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema-fr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}

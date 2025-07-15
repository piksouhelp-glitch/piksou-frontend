"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

export default function FAQSectionFr() {
  const faqs = [
    {
      question: "Qu'est-ce que PiKSou ?",
      answer:
        "PiKSou est une application mobile qui vous aide à comparer les offres d'épicerie dans les supermarchés de Maurice. Elle vous permet de trouver les meilleurs prix, d'économiser sur vos courses et de découvrir les promotions en un seul endroit.",
    },
    {
      question: "PiKSou est-il gratuit ?",
      answer:
        "Oui, PiKSou est entièrement gratuit à télécharger et à utiliser. Nous croyons que tout le monde devrait avoir accès à des outils qui l'aident à économiser sur l'épicerie.",
    },
    {
      question: "Quels supermarchés sont inclus dans l'application ?",
      answer:
        "PiKSou couvre actuellement tous les grands supermarchés de Maurice, notamment Jumbo, Winners, Intermart, et plus encore. Nous ajoutons constamment de nouveaux magasins à notre base de données.",
    },
    {
      question: "À quelle fréquence les offres sont-elles mises à jour ?",
      answer:
        "Nous mettons à jour notre base de données d'offres quotidiennement pour vous assurer d'avoir toujours accès aux promotions et prix les plus récents. Les promotions spéciales sont ajoutées dès qu'elles deviennent disponibles.",
    },
    {
      question: "Dois-je créer un compte pour utiliser PiKSou ?",
      answer:
        "Bien que vous puissiez parcourir les offres sans compte, créer un compte gratuit vous permet de sauvegarder vos articles favoris, d'obtenir des recommandations personnalisées et de suivre vos économies au fil du temps.",
    },
    {
      question: "Puis-je utiliser PiKSou hors ligne ?",
      answer:
        "Vous pouvez parcourir les offres précédemment chargées hors ligne, mais pour obtenir les dernières mises à jour et prix, une connexion Internet est requise. Nous avons optimisé l'application pour utiliser un minimum de données.",
    },
    {
      question: "Mes données de localisation sont-elles utilisées par l'application ?",
      answer:
        "Avec votre permission, PiKSou peut utiliser votre localisation pour vous montrer les offres dans les supermarchés à proximité. Ceci est optionnel et peut être désactivé dans les paramètres de votre application à tout moment.",
    },
    {
      question: "Comment signaler un prix ou une offre incorrecte ?",
      answer:
        "Nous apprécions les commentaires de la communauté ! Dans l'application, appuyez simplement sur l'offre, sélectionnez 'Signaler un problème' et fournissez les détails. Notre équipe examine tous les signalements pour maintenir la précision.",
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Questions Fréquemment Posées
            </h2>
            <div className="w-24 h-1 bg-[#FFC107] mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Vous avez des questions sur PiKSou ? Nous avons les réponses pour vous aider à commencer.
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
              Vous avez encore des questions ?{" "}
              <a href="mailto:hello@piksou.mu" className="text-[#48C774] font-medium hover:underline">
                Contactez notre équipe de support
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

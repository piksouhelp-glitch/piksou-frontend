import Image from "next/image";
import FadeIn from "@/components/animations/fade-in";

export default function HowItWorksSectionFr() {
  const steps = [
    {
      number: 1,
      title: "Inscrivez-vous et Choisissez votre localisation",
      description:
        "Créez votre compte et définissez votre localisation préférée à Maurice",
      image: "/images/step-fr-1.jpg",
    },
    {
      number: 2,
      title: "Parcourez les meilleures offres",
      description: "Trouvez des offres chez Jumbo, Winners, Intermart et plus",
      image: "/images/step-fr-2.jpg",
    },
    {
      number: 3,
      title: "Sauvegardez, comparez et achetez malin !",
      description:
        "Marquez les offres et comparez les prix pour maximiser vos économies",
      image: "/images/step-fr-3.jpg",
    },
  ];

  return (
    <section
      className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Comment ça marche
            </h2>
            <div className="w-24 h-1 bg-[#48C774] mx-auto"></div>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-1 bg-[#48C774] h-[calc(100%-120px)] hidden md:block"></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <FadeIn
                key={index}
                delay={index * 0.2}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-16`}
                >
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={`Étape ${step.number}: ${step.title}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#48C774] text-white font-bold text-xl mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

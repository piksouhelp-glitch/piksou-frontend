import { MapPin, Phone, Mail, Clock } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import ContactForm from "@/components/contact-form"
import AnimatedIcon from "@/components/micro-interactions/animated-icon"
import HoverCard from "@/components/micro-interactions/hover-card"

export default function ContactSectionFr() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Envoyez-nous un Email",
      content: "hello@piksou.mu",
      description: "Envoyez-nous un email à tout moment",
      href: "mailto:hello@piksou.mu",
      color: "#48C774",
    },
    {
      icon: Phone,
      title: "Appelez-nous",
      content: "+230 5XXX XXXX",
      description: "Lun-Ven de 9h à 18h",
      href: "tel:+2305XXXXXXX",
      color: "#FFC107",
    },
    {
      icon: MapPin,
      title: "Visitez-nous",
      content: "Port-Louis, Maurice",
      description: "Venez nous dire bonjour à notre bureau",
      href: "#",
      color: "#00BFFF",
    },
    {
      icon: Clock,
      title: "Temps de Réponse",
      content: "Dans les 24 heures",
      description: "Nous répondons rapidement",
      href: "#",
      color: "#48C774",
    },
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Contactez-nous
            </h2>
            <div className="w-24 h-1 bg-[#48C774] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
              Vous avez des questions sur PiKSou ? Vous voulez devenir partenaire ? Ou vous voulez simplement dire
              bonjour ? Nous aimerions avoir de vos nouvelles !
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Informations de Contact
              </h3>
            </FadeIn>

            <StaggerContainer className="space-y-6">
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <HoverCard className="group">
                    <a
                      href={info.href}
                      className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md dark:shadow-gray-900/20 transition-all duration-300 hover:shadow-lg hidden"
                    >
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <AnimatedIcon animation="bounce" trigger="hover">
                          <info.icon size={24} style={{ color: info.color }} />
                        </AnimatedIcon>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-[#48C774] dark:group-hover:text-[#48C774]">
                          {info.title}
                        </h4>
                        <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          {info.description}
                        </p>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Additional Info */}
            <FadeIn delay={0.6}>
              <div className="bg-gradient-to-r from-[#48C774]/10 to-[#00BFFF]/10 dark:from-[#48C774]/5 dark:to-[#00BFFF]/5 rounded-xl p-6 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  Pourquoi nous contacter ?
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#48C774] rounded-full"></div>
                    <span>Obtenez de l'aide avec l'application PiKSou</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFC107] rounded-full"></div>
                    <span>Signalez des bugs ou suggérez des fonctionnalités</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full"></div>
                    <span>Explorez les opportunités de partenariat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#48C774] rounded-full"></div>
                    <span>Partagez vos commentaires et idées</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Envoyez-nous un Message
              </h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

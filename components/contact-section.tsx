import { MapPin, Phone, Mail, Clock } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import ContactForm from "@/components/contact-form"
import AnimatedIcon from "@/components/micro-interactions/animated-icon"
import HoverCard from "@/components/micro-interactions/hover-card"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@piksou.mu",
      description: "Send us an email anytime",
      href: "mailto:hello@piksou.mu",
      color: "#48C774",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+230 5XXX XXXX",
      description: "Mon-Fri from 9am to 6pm",
      href: "tel:+2305XXXXXXX",
      color: "#FFC107",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Port Louis, Mauritius",
      description: "Come say hello at our office",
      href: "#",
      color: "#00BFFF",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We're quick to respond",
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
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-[#48C774] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
              Have questions about PiKSou? Want to partner with us? Or just want to say hello? We'd love to hear from
              you!
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 hidden">
                Contact Information
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
                  Why Contact Us?
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#48C774] rounded-full"></div>
                    <span>Get help with the PiKSou app</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FFC107] rounded-full"></div>
                    <span>Report bugs or suggest features</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full"></div>
                    <span>Explore partnership opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#48C774] rounded-full"></div>
                    <span>Share your feedback and ideas</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Send us a Message
              </h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

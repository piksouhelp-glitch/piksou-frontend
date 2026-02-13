import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function FooterFr() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact & Support */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact & Support</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#48C774]" />
                <a href="mailto:contact@piksou.com" className="hover:text-[#48C774] transition-colors duration-300">
                  contact@piksou.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#48C774]" />
                <a href="tel:+23058308566" className="hover:text-[#48C774] transition-colors duration-300">
                  +230 5830 8566
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#48C774] mt-1" />
                <div>
                  <div>Trianon, Quatre Bornes, Mauritius</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584774459115"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300 p-2 rounded-lg hover:bg-gray-800"
                aria-label="Facebook"
              >
                <img src="/Icons/facebook-color.svg" alt="" className="w-6 h-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.tiktok.com/@.piksou"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300 p-2 rounded-lg hover:bg-gray-800"
                aria-label="TikTok"
              >
                <img src="/Icons/tiktok2.png" alt="" className="w-6 h-6" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/23058308566"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300 p-2 rounded-lg hover:bg-gray-800"
                aria-label="WhatsApp"
              >
                <img src="/Icons/whatsapp-color.svg" alt="" className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              Restez informé des dernières offres et conseils !
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fr#features" className="hover:text-[#48C774] transition-colors duration-300">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/fr#how-it-works" className="hover:text-[#48C774] transition-colors duration-300">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/fr#faq" className="hover:text-[#48C774] transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#48C774] transition-colors duration-300">
                  English
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Important Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Légal & Important</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="hover:text-[#48C774] transition-colors duration-300">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-[#48C774] transition-colors duration-300">
                  Conditions d'Utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400 transition-colors duration-300">
          <p className="mb-4">Fait avec ❤️ à Maurice</p>
          <p>Toutes les marques de supermarchés appartiennent à leurs propriétaires respectifs. PiKSou est un outil d'économies indépendant.</p>
        </div>
      </div>
    </footer>
  )
}

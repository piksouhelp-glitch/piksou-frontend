import Link from "next/link"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL
const mailtoLink = `mailto:${contactEmail}`

export default function FooterFr() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contactez-nous</h3>
            <p className="mb-2">
              <a href={mailtoLink} className="hover:text-[#48C774] transition-colors duration-300">
                {contactEmail}
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com/piksou.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#48C774] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/piksou.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#48C774] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://tiktok.com/@piksou.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#48C774] transition-colors duration-300"
                aria-label="TikTok"
              >
                <MessageCircle size={24} />
              </a>
            </div>
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
                <Link href="/fr#download" className="hover:text-[#48C774] transition-colors duration-300">
                  Télécharger
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#48C774] transition-colors duration-300">
                  English
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="hover:text-[#48C774] transition-colors duration-300">
                  Confidentialité et Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400 transition-colors duration-300">
          <p className="mb-4">Fait avec ❤️ à Maurice</p>
          <p>
            Toutes les marques de supermarchés appartiennent à leurs propriétaires respectifs. PiKSou est un outil
            d'économies indépendant.
          </p>
        </div>
      </div>
    </footer>
  )
}

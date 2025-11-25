import Link from "next/link"
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL
const mailtoLink = `mailto:${contactEmail}`

export default function Footer() {
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
                <a href="tel:+23055090801" className="hover:text-[#48C774] transition-colors duration-300">
                  +230 55090801
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#48C774] mt-1" />
                <div>
                  <div>26, Petit Trianon, Trianon</div>
                  <div>Quatre Bornes, Mauritius</div>
                  <div className="text-sm text-gray-400">72257</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/piksou.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#48C774] transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/piksou.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#48C774] transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://tiktok.com/@piksou.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#48C774] transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                aria-label="TikTok"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              Stay updated with the latest deals and tips!
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-[#48C774] transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-[#48C774] transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#48C774] transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="https://codebase-frontend.amanabiy.tech/downloads/app-release-v1.apk"
                  className="hover:text-[#48C774] transition-colors duration-300">
                  Download APK
                </Link>
              </li>
              <li>
                <Link href="/fr" className="hover:text-[#48C774] transition-colors duration-300">
                  Français
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Important Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Legal & Important</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="hover:text-[#48C774] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-[#48C774] transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400 transition-colors duration-300">
          <p className="mb-4">Made with ❤️ in Mauritius</p>
          <p>All supermarket trademarks belong to their respective owners. PiKSou is an independent savings tool.</p>
        </div>
      </div>
    </footer>
  )
}

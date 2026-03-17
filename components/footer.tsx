import Link from 'next/link'
import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { PHONE, WHATSAPP_NUMBER, ADDRESS, BUSINESS_NAME, BUSINESS_TAGLINE, GOOGLE_MAPS_LINK } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#3E2C23] text-[#F5E9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-[#C8A165]">{BUSINESS_NAME.split(' ')[0]}</span>
              <p className="text-xs text-[#F5E9DC]/60 tracking-[0.2em] uppercase">{BUSINESS_TAGLINE}</p>
            </div>
            <p className="text-sm text-[#F5E9DC]/70 leading-relaxed">
              We are largest manufacturers of all types furnitures. Serving quality products since 1999 at reasonable wholesale prices. Delivery all over Telangana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#C8A165] mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5E9DC]/70 hover:text-[#C8A165] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#C8A165] mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C8A165] mt-0.5 shrink-0" />
                <a 
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#F5E9DC]/70 hover:text-[#C8A165] transition-colors"
                >
                  {ADDRESS}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-sm text-[#F5E9DC]/70 hover:text-[#C8A165] transition-colors"
                >
                  <Phone size={16} className="text-[#C8A165] shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in your furniture`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#F5E9DC]/70 hover:text-[#C8A165] transition-colors"
                >
                  <MessageCircle size={16} className="text-[#C8A165] shrink-0" />
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5C3D2E] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#F5E9DC]/40">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-[#F5E9DC]/40">
            Premium Furniture Since 1999
          </p>
        </div>
      </div>
    </footer>
  )
}

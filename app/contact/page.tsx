'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { PHONE, WHATSAPP_NUMBER, ADDRESS, GOOGLE_MAPS_EMBED, GOOGLE_MAPS_LINK, SERVICE_AREA } from '@/lib/data'

const contactDetails = [
  {
    icon: Phone,
    label: 'Call Us',
    value: PHONE,
    subtext: 'Monday – Saturday, 9 AM – 8 PM',
    href: `tel:${PHONE}`,
    cta: 'Call Now',
    color: 'bg-[#3E2C23]',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    subtext: 'Get instant product enquiries',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in your furniture`,
    cta: 'Open WhatsApp',
    color: 'bg-[#25D366]',
  },
  {
    icon: MapPin,
    label: 'Showroom',
    value: 'Godavarikhani, Ramagundam',
    subtext: 'Beside Hanuman Temple, Markendeya Colony',
    href: GOOGLE_MAPS_LINK,
    cta: 'Get Directions',
    color: 'bg-[#C8A165]',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sat: 9 AM – 8 PM',
    subtext: 'Sunday: 10 AM – 6 PM',
    href: null,
    cta: null,
    color: 'bg-[#7A5C47]',
  },
]

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="bg-[#3E2C23] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8A165] text-sm tracking-[0.3em] uppercase font-medium mb-3"
          >
            We're Here For You
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white text-balance"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5E9DC]/60 mt-4 max-w-xl mx-auto"
          >
            Visit our showroom in Godavarikhani or reach us via phone or WhatsApp. We'd love to help you find your perfect furniture.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24 bg-[#FAF4ED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {contactDetails.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#E8D5C0] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className={`${detail.color} w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>
                    <detail.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#7A5C47] mb-1">{detail.label}</p>
                    <p className="font-serif text-lg font-bold text-[#3E2C23]">{detail.value}</p>
                    <p className="text-sm text-[#7A5C47] mt-0.5">{detail.subtext}</p>
                  </div>
                </div>
                {detail.href && detail.cta && (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith('http') ? '_blank' : undefined}
                    rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`${detail.color} text-white text-sm font-semibold py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                  >
                    {detail.cta}
                    {detail.href.startsWith('http') && <ExternalLink size={14} />}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#F5E9DC] rounded-2xl p-6 mb-8 text-center"
          >
            <p className="text-[#7A5C47] text-sm font-medium">Service Area</p>
            <p className="font-serif text-xl font-bold text-[#3E2C23] mt-1">{SERVICE_AREA}</p>
            <p className="text-[#7A5C47] text-sm mt-2">Delivery available all over Telangana</p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl overflow-hidden border border-[#E8D5C0] shadow-lg"
          >
            <div className="bg-[#3E2C23] px-6 py-4">
              <h2 className="font-serif text-xl font-bold text-white">Find Us On The Map</h2>
              <p className="text-[#F5E9DC]/60 text-sm mt-1">
                {ADDRESS}
              </p>
            </div>
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sagarika Furniture Mall Location Map"
            />
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 bg-[#3E2C23] rounded-2xl p-8 md:p-10 text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Furnish Your Dream Home?
            </h2>
            <p className="text-[#F5E9DC]/60 mb-6 text-sm md:text-base">
              Contact us today and get expert guidance from our furniture specialists. Wholesale prices guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 bg-[#C8A165] hover:bg-[#E4C99A] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in your furniture`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

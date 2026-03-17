'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import { PHONE, WHATSAPP_NUMBER, ADDRESS, GOOGLE_MAPS_EMBED, GOOGLE_MAPS_LINK } from '@/lib/data'

export default function ContactPreview() {
  const contactItems = [
    {
      icon: MapPin,
      label: 'Address',
      value: ADDRESS,
      href: GOOGLE_MAPS_LINK,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: PHONE,
      href: `tel:${PHONE}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Click to chat with us instantly',
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want to visit your showroom`,
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon – Sat: 9:00 AM – 8:00 PM\nSun: 10:00 AM – 6:00 PM',
      href: null,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#3E2C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8A165] text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Visit Us
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white text-balance">
            Come See Us In Person
          </h2>
          <p className="text-[#F5E9DC]/60 mt-4 max-w-xl mx-auto">
            Visit our showroom in Godavarikhani and experience our premium furniture collection firsthand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((item) => {
              const Wrapper = item.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={item.label}
                  // @ts-expect-error - dynamic href
                  href={item.href ?? undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 bg-[#5C3D2E]/40 border border-[#5C3D2E] rounded-2xl p-5 hover:bg-[#5C3D2E]/70 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C8A165]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C8A165]/30 transition-colors">
                    <item.icon size={20} className="text-[#C8A165]" />
                  </div>
                  <div>
                    <p className="text-[#C8A165] text-xs font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="text-[#F5E9DC]/80 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                  </div>
                </Wrapper>
              )
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-[#5C3D2E] shadow-lg h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sagarika Furniture Mall Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

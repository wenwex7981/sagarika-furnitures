'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { PHONE, WHATSAPP_NUMBER, YEARS_EXPERIENCE, RATING, REVIEWS_COUNT } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        role="img"
        aria-label="Luxury furniture showroom interior"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3E2C23]/70" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8A165]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#C8A165] text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-4"
        >
          Established 1999 &bull; Godavarikhani, Ramagundam
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6"
        >
          Crafting Quality
          <br />
          <span className="text-[#C8A165]">Furniture</span> Since 1999
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#F5E9DC]/80 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          We are largest manufacturers of all types of furniture. Sofas, beds, dining tables and more at wholesale prices. Delivery all over Telangana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-[#C8A165] hover:bg-[#E4C99A] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in your furniture`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <MessageCircle size={18} />
            WhatsApp Enquiry
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: `${YEARS_EXPERIENCE}+`, label: 'Years of Excellence' },
            { value: `${RATING}`, label: `Rating (${REVIEWS_COUNT} Reviews)` },
            { value: '500+', label: 'Furniture Designs' },
            { value: '100%', label: 'Quality Guaranteed' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-[#C8A165]">{stat.value}</p>
              <p className="text-[#F5E9DC]/70 text-xs tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#F5E9DC]/50 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[#C8A165] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}

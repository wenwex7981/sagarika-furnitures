'use client'

import { motion } from 'framer-motion'
import { Trophy, Tag, Gem, Truck } from 'lucide-react'

const features = [
  {
    title: '25+ Years Experience',
    description: 'Trusted by thousands of families across Telangana since 1999. Our craftsmanship speaks for itself.',
    icon: Trophy,
  },
  {
    title: 'Manufacturer Pricing',
    description: 'Buy directly from the manufacturer. No middlemen, no markups — just honest pricing.',
    icon: Tag,
  },
  {
    title: 'Premium Quality Materials',
    description: 'Grade A teak wood and finest materials crafted into furniture that lasts generations.',
    icon: Gem,
  },
  {
    title: 'Fast Delivery',
    description: 'Swift delivery and professional assembly service across all districts of Telangana.',
    icon: Truck,
  },
]

export default function WhyChooseUs() {
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
            Our Promise
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white text-balance">
            Why Choose Sagarika?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#5C3D2E]/40 border border-[#5C3D2E] rounded-2xl p-6 md:p-8 hover:bg-[#5C3D2E]/70 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C8A165]/20 flex items-center justify-center mb-5 group-hover:bg-[#C8A165]/30 transition-colors">
                <feature.icon size={24} className="text-[#C8A165]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#F5E9DC]/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  { src: '/images/hero-bg.jpg', alt: 'Showroom floor with teak wood furniture' },
  { src: '/images/showroom-1.jpg', alt: 'Premium furniture showroom interior' },
  { src: '/images/showroom-2.jpg', alt: 'Bedroom furniture display' },
  { src: '/images/showroom-3.jpg', alt: 'Living room sofa display' },
  { src: '/images/sofa-set.jpg', alt: 'Royal teak sofa set' },
  { src: '/images/dining-table.jpg', alt: 'Grand dining table set' },
]

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF4ED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#C8A165] text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Our Showroom
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3E2C23] text-balance">
            Step Inside Our World
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className={`relative w-full ${i === 0 ? 'aspect-[4/3] md:aspect-square' : 'aspect-square'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#3E2C23]/0 group-hover:bg-[#3E2C23]/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    {img.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

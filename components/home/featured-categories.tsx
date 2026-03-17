'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { featuredCategories } from '@/lib/data'

export default function FeaturedCategories() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8A165] text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Browse by Category
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3E2C23] text-balance">
            Our Collections
          </h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/products?category=${cat.id}`}
                className="group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C23]/80 via-transparent to-transparent" />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-white">{cat.label}</h3>
                    <p className="text-[#C8A165] text-xs md:text-sm mt-1">{cat.count}</p>
                  </div>

                  {/* Hover badge */}
                  <div className="absolute top-3 right-3 bg-[#C8A165] text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View All
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

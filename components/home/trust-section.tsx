'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { reviews } from '@/lib/data'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-[#C8A165] fill-[#C8A165]' : 'text-[#E8D5C0]'}
        />
      ))}
    </div>
  )
}

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5E9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C8A165] text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3E2C23] mb-4 text-balance">
            What Our Customers Say
          </h2>

          {/* Overall Rating */}
          <div className="inline-flex flex-col items-center bg-white rounded-2xl px-8 py-5 shadow-md border border-[#E8D5C0] mt-4">
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="text-[#C8A165] fill-[#C8A165]" />
              ))}
            </div>
            <p className="font-serif text-4xl font-bold text-[#3E2C23]">4.8</p>
            <p className="text-sm text-[#7A5C47] mt-1">Based on 500+ reviews</p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5C0] flex flex-col gap-4"
            >
              <StarRating rating={review.rating} />
              <p className="text-sm text-[#3E2C23] leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-auto">
                <p className="font-semibold text-[#3E2C23] text-sm">{review.name}</p>
                <p className="text-xs text-[#7A5C47]">{review.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

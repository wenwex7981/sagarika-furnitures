'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { products } from '@/lib/data'

const WHATSAPP_NUMBER = '919876543210'

function getWhatsAppLink(productName: string) {
  const msg = encodeURIComponent(`Hi, I am interested in ${productName}`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export default function ProductShowcase() {
  const showcaseProducts = products.slice(0, 6)

  return (
    <section className="py-20 md:py-28 bg-[#FAF4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-[#C8A165] text-sm tracking-[0.3em] uppercase font-medium mb-3">
              Handpicked For You
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3E2C23] text-balance">
              Featured Products
            </h2>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-2 text-[#C8A165] font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseProducts.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#E8D5C0]"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#3E2C23]/0 group-hover:bg-[#3E2C23]/10 transition-colors duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-bold text-[#3E2C23] leading-tight">{product.name}</h3>
                  <span className="text-xs bg-[#F5E9DC] text-[#7A5C47] px-2 py-1 rounded-full shrink-0 capitalize">
                    {product.category}
                  </span>
                </div>
                <p className="text-sm text-[#7A5C47] leading-relaxed mb-4">{product.description}</p>
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  WhatsApp Enquiry
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { products, categories, WHATSAPP_NUMBER } from '@/lib/data'

function getWhatsAppLink(productName: string) {
  const msg = encodeURIComponent(`Hi, I am interested in ${productName}`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#3E2C23] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8A165] text-sm tracking-[0.3em] uppercase font-medium mb-3"
          >
            Explore Our Range
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white text-balance"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5E9DC]/60 mt-4 max-w-xl mx-auto"
          >
            Premium quality furniture for every room in your home at wholesale prices.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#FAF4ED] py-8 border-b border-[#E8D5C0] sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-[#3E2C23] text-white'
                  : 'bg-white text-[#3E2C23] border border-[#E8D5C0] hover:border-[#C8A165]'
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#3E2C23] text-white'
                    : 'bg-white text-[#3E2C23] border border-[#E8D5C0] hover:border-[#C8A165]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#FAF4ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#7A5C47] mb-8">
            Showing <span className="font-semibold text-[#3E2C23]">{filtered.length}</span> products
          </p>

          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#E8D5C0]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h2 className="font-serif text-lg font-bold text-[#3E2C23] leading-tight">
                        {product.name}
                      </h2>
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
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#7A5C47] text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

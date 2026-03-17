'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/data'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in your furniture`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle size={22} fill="white" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  )
}

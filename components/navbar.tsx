'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PHONE, BUSINESS_TAGLINE } from '@/lib/data'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#3E2C23] shadow-lg'
          : 'bg-[#3E2C23]/90 backdrop-blur-md'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl md:text-2xl font-bold text-[#C8A165] tracking-wide">
              Sagarika
            </span>
            <span className="text-[10px] md:text-xs text-[#F5E9DC]/80 tracking-[0.15em] uppercase">
              {BUSINESS_TAGLINE}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors duration-200',
                  pathname === link.href
                    ? 'text-[#C8A165]'
                    : 'text-[#F5E9DC]/80 hover:text-[#C8A165]'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-[#C8A165] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#E4C99A] transition-colors"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#F5E9DC] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-[#5C3D2E] py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-base font-medium py-2 px-2 rounded-lg transition-colors',
                  pathname === link.href
                    ? 'text-[#C8A165] bg-[#5C3D2E]/50'
                    : 'text-[#F5E9DC]/80 hover:text-[#C8A165]'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-[#C8A165] text-white font-semibold px-4 py-3 rounded-full text-center justify-center mt-2"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

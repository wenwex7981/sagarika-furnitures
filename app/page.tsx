import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Hero from '@/components/home/hero'
import FeaturedCategories from '@/components/home/featured-categories'
import WhyChooseUs from '@/components/home/why-choose-us'
import ProductShowcase from '@/components/home/product-showcase'
import TrustSection from '@/components/home/trust-section'
import Gallery from '@/components/home/gallery'
import ContactPreview from '@/components/home/contact-preview'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs />
      <ProductShowcase />
      <TrustSection />
      <Gallery />
      <ContactPreview />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

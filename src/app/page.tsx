import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Contents from '@/components/Contents'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import BlogSection from '@/components/BlogSection'

export const metadata: Metadata = {
  metadataBase: new URL('https://passive.techtalks.uk'),
  title: 'Freelance-to-Passive Blueprint | Turn Fiverr Skills into 5 Automated Income Streams',
  description: 'The complete 80+ page blueprint to transform your freelance skills into 5 passive income streams. Includes Notion templates, Canva templates, automation scripts, and affiliate directory. $37 one-time.',
  keywords: ['passive income', 'fiverr', 'freelancing', 'digital products', 'automated income', 'notion templates', 'canva templates', 'affiliate marketing', 'print on demand', 'saas'],
  openGraph: {
    title: 'Freelance-to-Passive Blueprint | Turn Fiverr Skills into 5 Automated Income Streams',
    description: 'The complete 80+ page blueprint to transform your freelance skills into 5 passive income streams. Includes Notion templates, Canva templates, automation scripts, and affiliate directory.',
    type: 'website',
    url: 'https://passive.techtalks.uk',
    siteName: 'Freelance-to-Passive Blueprint',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Freelance-to-Passive Blueprint',
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance-to-Passive Blueprint',
    description: 'Turn Fiverr Skills into 5 Automated Passive Income Streams in 2026',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://passive.techtalks.uk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Hero />
      <Benefits />
      <Contents />
      <Testimonials />
      <Pricing />
      <BlogSection />
      <FAQ />
      <Footer />
    </main>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-16">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-3">Freelance-to-Passive Blueprint</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              The complete system to transform your freelance skills into 5 automated passive income streams.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-white/80">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><a href="#contents" className="hover:text-white transition-colors">What&apos;s Inside</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-white/80">Support</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><a href="mailto:kliporahq@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://payhip.com/b/aSzpH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Get the Blueprint</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2026 TechTalks / KliporaHQ. All rights reserved.</p>
          <p>Passive income is not guaranteed. Results depend on effort and market conditions.</p>
        </div>
      </div>
    </footer>
  )
}

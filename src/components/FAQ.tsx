'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  { q: 'Is this only for Fiverr sellers?', a: "No! While the book uses Fiverr as the primary example, the strategies work for any freelancer — Upwork, 99designs, direct clients, or any skill-based work. If you trade hours for dollars, this blueprint is for you." },
  { q: 'How quickly can I start earning passive income?', a: 'Most buyers launch their first digital product within 2-3 weeks of reading the blueprint. Affiliate income can start within days of publishing your first review post. The timeline depends on how much time you invest.' },
  { q: 'Do I need technical skills?', a: 'No coding required. The blueprint covers no-code tools for everything. Basic computer skills and internet access are all you need. The automation scripts are provided as-is and are optional.' },
  { q: "What if it doesn't work for me?", a: "We offer a 30-day money-back guarantee. If you read the blueprint and don't think it's worth 10x the price, email us for a full refund. No questions asked." },
  { q: 'Is this just another ebook full of fluff?', a: "No. This is 80+ pages of actionable strategies, templates, and scripts. Not theory — step-by-step instructions you can execute today. Plus Notion templates, Canva templates, and Python scripts." },
  { q: 'How do I access the Notion template?', a: "After purchase, you'll receive a duplicate link. Click it, and the template will be copied to your Notion workspace. No setup required." },
  { q: 'Do you offer support?', a: 'Yes! Email kliporahq@gmail.com with any questions. We typically respond within 24 hours.' },
  { q: 'Will this be updated?', a: "Yes! All buyers get free lifetime updates. When strategies change (new platforms, new tools, new algorithms), you'll get the updated version at no extra cost." },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-[#e5edf5] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6f9fc] transition-colors duration-200"
      >
        <span className="font-medium text-[#061b31] pr-4">{faq.q}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-[#64748d] flex-shrink-0"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#64748d] leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-[#f6f9fc] py-24 md:py-32">
      <div className="max-w-[720px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#533afd] uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-[32px] md:text-[42px] font-light tracking-[-0.02em] text-[#061b31] mb-5">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#533afd] to-[#665efd] bg-clip-text text-transparent font-normal">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

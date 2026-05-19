'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  { name: 'Sarah K.', role: 'Fiverr Top Rated Seller', text: "I was stuck in the freelancing hamster wheel. This blueprint showed me how to create my first digital product in a weekend. Made $1,200 in the first month.", initials: 'SK', color: 'from-brand to-brand-light' },
  { name: 'Ahmed M.', role: 'Web Developer', text: "The Notion template alone is worth the price. I now track all my income streams in one place and actually see my progress. Game changer.", initials: 'AM', color: 'from-success to-success-dark' },
  { name: 'Jessica L.', role: 'Graphic Designer', text: "I had no idea how to start with passive income. This book breaks everything down into simple steps. The affiliate directory saved me hours of research.", initials: 'JL', color: 'from-ruby to-magenta' },
  { name: 'Marcus T.', role: 'Content Creator', text: "The content repurposing chapter changed everything. I went from creating 3 posts a week to 15+ without working more hours.", initials: 'MR', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Priya S.', role: 'Freelance Writer', text: "Bought this on a whim and it paid for itself in the first week. The email sequence template alone generated $400 in affiliate commissions.", initials: 'PS', color: 'from-purple-500 to-purple-600' },
  { name: 'David R.', role: 'UI/UX Designer', text: "Finally, a passive income guide that's actually actionable. No fluff, no hype — just step-by-step instructions. The Canva templates are fire.", initials: 'DR', color: 'from-cyan-500 to-cyan-600' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-brand uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-[32px] md:text-[42px] font-light tracking-[-0.02em] text-navy mb-5">
            What Buyers Are{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent font-normal">Saying</span>
          </h2>
          <p className="text-lg text-slate max-w-[600px] mx-auto font-light">
            Join 127+ freelancers who&apos;ve transformed their income
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-border rounded-xl p-7 hover:shadow-[0_8px_30px_rgba(50,50,93,0.08)] transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate leading-relaxed mb-6 text-[15px]">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-medium`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-navy text-sm">{t.name}</div>
                  <div className="text-slate text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

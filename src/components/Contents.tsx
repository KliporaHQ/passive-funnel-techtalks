'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const chapters = [
  { num: '01', title: 'The Mindset Shift', desc: 'Why freelancing is a trap and how to escape it' },
  { num: '02', title: 'The Passive Income Myth', desc: "What's real in 2026 — and what's hype" },
  { num: '03', title: 'The 5-Stream Framework', desc: 'The system that ties everything together' },
  { num: '04', title: 'Stream 1: Digital Products', desc: 'Templates, e-books, courses, and more' },
  { num: '05', title: 'Creating Templates That Sell', desc: 'The exact process for high-converting templates' },
  { num: '06', title: 'E-books & Mini-Courses', desc: 'Package your knowledge for passive income' },
  { num: '07', title: 'Pricing & Packaging', desc: 'Psychology-backed pricing strategies' },
  { num: '08', title: 'Stream 2: Affiliate Marketing', desc: 'The 2026 playbook for affiliate income' },
  { num: '09', title: 'High-Paying Affiliate Programs', desc: '50+ programs that pay via PayPal' },
  { num: '10', title: 'Content That Converts', desc: 'The P.A.S.T.O.R. framework for affiliate content' },
  { num: '11', title: 'Stream 3: Content Monetization', desc: 'YouTube, blogs, and newsletters' },
  { num: '12', title: 'Content Repurposing Machine', desc: '1 piece → 15+ pieces of content' },
  { num: '13', title: 'SEO for Passive Traffic', desc: 'Rank on Google and get free traffic forever' },
  { num: '14', title: 'Stream 4: Print-on-Demand', desc: 'Design once, sell forever' },
  { num: '15', title: 'POD Platforms & Pricing', desc: 'Maximize profits on every platform' },
  { num: '16', title: 'Stream 5: SaaS & Tools', desc: 'Productize your service' },
  { num: '17', title: 'No-Code SaaS', desc: 'Build tools without coding' },
  { num: '18', title: 'From Side Project to Revenue', desc: 'The SaaS launch plan' },
  { num: '19', title: 'Building the Machine', desc: 'The complete autonomous funnel' },
  { num: '20', title: 'Email Sequences That Sell', desc: '7-day nurture sequence template' },
  { num: '21', title: 'The 30-Day Launch Plan', desc: 'Day-by-day execution plan' },
]

export default function Contents() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contents" className="bg-white py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-brand uppercase tracking-widest mb-4">What&apos;s Inside</p>
          <h2 className="text-[32px] md:text-[42px] font-light tracking-[-0.02em] text-navy mb-5">
            80+ Pages Across{' '}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent font-normal">21 Chapters</span>
          </h2>
          <p className="text-lg text-slate max-w-[600px] mx-auto font-light">
            Plus 5 bonuses that alone are worth more than the price of this bundle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 mb-14">
          {chapters.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="flex items-start gap-4 bg-surface rounded-lg p-5 hover:bg-brand/5 transition-colors duration-200"
            >
              <span className="text-sm font-medium text-brand font-mono mt-0.5 flex-shrink-0">{ch.num}</span>
              <div>
                <h3 className="font-medium text-navy text-[15px]">{ch.title}</h3>
                <p className="text-slate text-sm mt-0.5">{ch.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-dark-section to-navy-dark rounded-2xl p-10 md:p-12"
        >
          <h3 className="text-2xl font-light text-white mb-8 text-center">🎁 Included Bonuses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🧠', title: 'Notion Second Brain Template', desc: 'Income tracker, content calendar, funnel dashboard, gig optimizer' },
              { icon: '🎨', title: '12 Canva Templates', desc: 'Sales pages, social posts, email sequences, Pinterest pins' },
              { icon: '⚡', title: '5 Automation Scripts', desc: 'Pinterest auto-pinner, SEO tracker, email cleaner, income tracker' },
              { icon: '💰', title: 'Affiliate Directory', desc: '50+ high-paying programs that pay via PayPal' },
            ].map((bonus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="text-3xl">{bonus.icon}</span>
                <div>
                  <h4 className="font-medium text-white mb-1">{bonus.title}</h4>
                  <p className="text-white/60 text-sm">{bonus.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

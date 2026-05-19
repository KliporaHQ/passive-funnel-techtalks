'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  { icon: '📚', title: '80+ Page Blueprint', desc: 'The complete A-to-Z guide covering all 5 passive income streams — from choosing your first product to scaling to $10K/month.' },
  { icon: '🧠', title: 'Notion Second Brain', desc: 'Complete Notion template with income tracker, content calendar, funnel dashboard, and gig optimizer. Just duplicate and use.' },
  { icon: '🎨', title: '12 Canva Templates', desc: 'Plug-and-play templates for sales pages, social posts, email sequences, and Pinterest pins. Customize in minutes.' },
  { icon: '⚡', title: 'Automation Scripts', desc: '5 ready-to-use Python scripts for Pinterest auto-pinning, SEO tracking, email cleaning, and income tracking.' },
  { icon: '💰', title: 'Affiliate Directory', desc: 'Curated list of 50+ high-paying affiliate programs that pay via PayPal — including SaaS, hosting, and course platforms.' },
  { icon: '📅', title: '90-Day Content Calendar', desc: 'Day-by-day content plan for 3 months — blog posts, social media, and Pinterest pins all mapped out.' },
]

export default function Benefits() {
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
          <p className="text-sm font-medium text-brand uppercase tracking-widest mb-4">Everything You Need</p>
          <h2 className="text-[32px] md:text-[42px] font-light tracking-[-0.02em] text-navy mb-5">
            Everything You Need to Build{' '}
            <span className="bg-gradient-to-r from-success to-success-dark bg-clip-text text-transparent font-normal">Passive Income</span>
          </h2>
          <p className="text-lg text-slate max-w-[600px] mx-auto font-light">
            Not just theory — actionable templates, scripts, and systems you can use today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
              className="group bg-white border border-border rounded-xl p-8 hover:shadow-[0_8px_30px_rgba(50,50,93,0.08)] hover:border-brand/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-5">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-navy mb-3">{benefit.title}</h3>
              <p className="text-slate leading-relaxed text-[15px]">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

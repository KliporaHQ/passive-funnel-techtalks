'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const benefits = [
  { icon: '📚', title: '80+ Page Blueprint', desc: 'The complete A-to-Z guide covering all 5 passive income streams — from choosing your first product to scaling to $10K/month.' },
  { icon: '🧠', title: 'Notion Second Brain', desc: 'Complete Notion template with income tracker, content calendar, funnel dashboard, and gig optimizer. Just duplicate and use.' },
  { icon: '🎨', title: '12 Canva Templates', desc: 'Plug-and-play templates for sales pages, social posts, email sequences, and Pinterest pins. Customize in minutes.' },
  { icon: '⚡', title: 'Automation Scripts', desc: '5 ready-to-use Python scripts for Pinterest auto-pinning, SEO tracking, email cleaning, and income tracking.' },
  { icon: '💰', title: 'Affiliate Directory', desc: 'Curated list of 50+ high-paying affiliate programs that pay via PayPal — including SaaS, hosting, and course platforms.' },
  { icon: '📅', title: '90-Day Content Calendar', desc: 'Day-by-day content plan for 3 months — blog posts, social media, and Pinterest pins all mapped out.' },
]

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white border border-[#e5edf5] rounded-xl p-8 hover:shadow-[0_8px_30px_rgba(50,50,93,0.08)] hover:border-[#533afd]/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-4xl mb-5">{benefit.icon}</div>
      <h3 className="text-lg font-semibold text-[#061b31] mb-3">{benefit.title}</h3>
      <p className="text-[#64748d] leading-relaxed text-[15px]">{benefit.desc}</p>
    </motion.div>
  )
}

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-[#f6f9fc] py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#533afd] uppercase tracking-widest mb-4">Everything You Need</p>
          <h2 className="text-[32px] md:text-[42px] font-light tracking-[-0.02em] text-[#061b31] mb-5">
            Everything You Need to Build{' '}
            <span className="bg-gradient-to-r from-[#15be53] to-[#108c3d] bg-clip-text text-transparent font-normal">Passive Income</span>
          </h2>
          <p className="text-lg text-[#64748d] max-w-[600px] mx-auto font-light">
            Not just theory — actionable templates, scripts, and systems you can use today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6f9fc] via-white to-[#f0f4ff]" />
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#533afd]/5 blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#ea2261]/5 blur-3xl" />

      <motion.div style={{ y, opacity }} className="relative max-w-[1080px] mx-auto px-6 pt-32 pb-24 md:pt-44 md:pb-36">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#533afd]/10 border border-[#533afd]/20 rounded-full px-5 py-2 mb-10">
            <span className="w-2 h-2 bg-[#15be53] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#533afd]">New for 2026 — Updated with latest strategies</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-[42px] md:text-[56px] lg:text-[64px] font-light leading-[1.05] tracking-[-0.03em] text-[#061b31] mb-8 max-w-[900px] mx-auto"
          >
            Turn Your{' '}
            <span className="bg-gradient-to-r from-[#533afd] to-[#665efd] bg-clip-text text-transparent font-normal">Fiverr Skills</span>{' '}
            into{' '}
            <span className="bg-gradient-to-r from-[#15be53] to-[#108c3d] bg-clip-text text-transparent font-normal">5 Passive Income Streams</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-[#64748d] leading-relaxed max-w-[680px] mx-auto mb-12 font-light"
          >
            The complete 80+ page blueprint to escape the freelancing trap and build automated income that pays you while you sleep.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="https://payhip.com/b/aSzpH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#533afd] hover:bg-[#4434d4] text-white font-medium text-base px-8 py-4 rounded-lg shadow-[0_4px_14px_rgba(83,58,253,0.4)] hover:shadow-[0_6px_20px_rgba(83,58,253,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get the Blueprint — $37
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contents"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#e5edf5] hover:border-[#533afd]/30 text-[#061b31] font-medium text-base px-8 py-4 rounded-lg hover:bg-[#533afd]/5 transition-all duration-300"
            >
              See What&apos;s Inside
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={scaleIn} className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#64748d]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['SK', 'AM', 'JL', 'MR', 'PS'].map((initials, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#533afd] to-[#665efd] border-2 border-white flex items-center justify-center text-[10px] font-medium text-white">
                    {initials}
                  </div>
                ))}
              </div>
              <span className="font-medium text-[#061b31]">127+ buyers</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#e5edf5]" />
            <div className="flex items-center gap-1.5">
              <span className="text-[#f59e0b]">★★★★★</span>
              <span className="font-medium text-[#061b31]">4.9/5</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#e5edf5]" />
            <span>80+ pages of actionable content</span>
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-[#e5edf5]"
        >
          {[
            { icon: '⚡', text: 'Instant Download' },
            { icon: '🛡️', text: '30-Day Money Back' },
            { icon: '🔄', text: 'Lifetime Updates' },
            { icon: '💳', text: 'Secure PayPal Checkout' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[#64748d]">
              <span className="text-base">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

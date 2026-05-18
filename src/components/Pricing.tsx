'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#533afd] uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-[32px] md:text-[42px] font-light tracking-[-0.02em] text-[#061b31] mb-5">
            Get the Complete{' '}
            <span className="bg-gradient-to-r from-[#15be53] to-[#108c3d] bg-clip-text text-transparent font-normal">Blueprint</span>
          </h2>
          <p className="text-lg text-[#64748d] max-w-[600px] mx-auto font-light">
            One-time payment. Lifetime access. Free updates forever.
          </p>
        </motion.div>

        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white border-2 border-[#533afd] rounded-2xl p-10 md:p-14 shadow-[0_20px_60px_rgba(83,58,253,0.15)]"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#533afd] text-white text-sm font-medium px-6 py-1.5 rounded-full">
              BEST VALUE
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#061b31] mb-3">Freelance-to-Passive Blueprint</h3>
                <p className="text-[#64748d] mb-8">The complete system to transform your freelance skills into 5 automated passive income streams.</p>

                <div className="space-y-3">
                  {[
                    '80+ page professional PDF ebook',
                    'Notion Second Brain template (duplicate link)',
                    '12 plug-and-play Canva templates',
                    '5 automation scripts (Python)',
                    '50+ affiliate programs directory',
                    '90-day content calendar',
                    '30-day launch plan',
                    'Lifetime free updates',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <svg className="w-5 h-5 text-[#15be53] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#061b31] text-[15px]">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-[#64748d] line-through text-lg mb-1">$97 value</div>
                <div className="text-[56px] font-bold text-[#061b31] tracking-tight mb-1">$37</div>
                <div className="text-[#64748d] mb-8">one-time payment</div>

                <a
                  href="https://payhip.com/b/aSzpH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#533afd] hover:bg-[#4434d4] text-white font-medium text-lg px-10 py-5 rounded-lg shadow-[0_4px_14px_rgba(83,58,253,0.4)] hover:shadow-[0_6px_20px_rgba(83,58,253,0.5)] transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
                >
                  Get Instant Access
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-sm text-[#64748d]">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Secure checkout
                  </span>
                  <span>PayPal accepted</span>
                </div>
                <div className="mt-3 text-sm text-[#64748d]">30-day money-back guarantee</div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-[#64748d] mt-8"
          >
            💡 After purchase, you&apos;ll get an exclusive <span className="text-[#533afd] font-medium">$17 upsell</span> for the Advanced Automation Pack
          </motion.p>
        </div>
      </div>
    </section>
  )
}

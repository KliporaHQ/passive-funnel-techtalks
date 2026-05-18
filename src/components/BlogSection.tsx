'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const blogPosts = [
  { slug: 'fiverr-passive-income-2026', title: 'How to Turn Fiverr Skills into Passive Income in 2026', excerpt: 'The complete guide to escaping the freelancing trap and building automated income streams from your existing skills.', category: 'Passive Income', readTime: '12 min' },
  { slug: 'digital-products-for-freelancers', title: 'Digital Products for Freelancers: The Ultimate Guide', excerpt: 'Learn how to create templates, e-books, and courses that sell while you sleep.', category: 'Digital Products', readTime: '10 min' },
  { slug: 'notion-templates-for-freelancers', title: 'Notion Templates That Sell: A Freelancer\'s Guide', excerpt: 'How to create and sell Notion templates. From idea validation to Gumroad launch.', category: 'Templates', readTime: '8 min' },
  { slug: 'payhip-vs-gumroad-2026', title: 'Payhip vs Gumroad: Which is Best for Digital Products in 2026?', excerpt: 'An honest comparison of Payhip and Gumroad — fees, features, payouts.', category: 'Platforms', readTime: '7 min' },
  { slug: 'affiliate-marketing-for-freelancers', title: 'Affiliate Marketing for Freelancers: Earn Commissions While You Sleep', excerpt: 'The best affiliate programs for freelancers, how to create content that converts.', category: 'Affiliate', readTime: '11 min' },
  { slug: 'seo-for-passive-income', title: 'SEO for Passive Income: Get Free Traffic That Converts', excerpt: 'How to rank on Google and drive free traffic to your digital products.', category: 'SEO', readTime: '14 min' },
]

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="bg-white py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#533afd] uppercase tracking-widest mb-4">Free Resources</p>
          <h2 className="text-[32px] md:text-[42px] font-light tracking-[-0.02em] text-[#061b31] mb-5">
            In-Depth{' '}
            <span className="bg-gradient-to-r from-[#533afd] to-[#665efd] bg-clip-text text-transparent font-normal">Guides</span>
          </h2>
          <p className="text-lg text-[#64748d] max-w-[600px] mx-auto font-light">
            Free articles to help you build passive income
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white border border-[#e5edf5] rounded-xl p-7 hover:shadow-[0_8px_30px_rgba(50,50,93,0.08)] hover:border-[#533afd]/20 transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-[#533afd] bg-[#533afd]/10 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-[#64748d]">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-medium text-[#061b31] mb-2 group-hover:text-[#533afd] transition-colors">{post.title}</h3>
              <p className="text-[#64748d] text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <span className="text-[#533afd] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">Read more →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

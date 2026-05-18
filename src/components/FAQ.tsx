'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Is this only for Fiverr sellers?',
      a: 'No! While the book uses Fiverr as the primary example, the strategies work for any freelancer — Upwork, 99designs, direct clients, or any skill-based work. If you trade hours for dollars, this blueprint is for you.',
    },
    {
      q: 'How quickly can I start earning passive income?',
      a: 'Most buyers launch their first digital product within 2-3 weeks of reading the blueprint. Affiliate income can start within days of publishing your first review post. The timeline depends on how much time you invest.',
    },
    {
      q: 'Do I need technical skills?',
      a: 'No coding required. The blueprint covers no-code tools for everything. Basic computer skills and internet access are all you need. The automation scripts are provided as-is and are optional.',
    },
    {
      q: 'What if it doesn\'t work for me?',
      a: 'We offer a 30-day money-back guarantee. If you read the blueprint and don\'t think it\'s worth 10x the price, email us for a full refund. No questions asked.',
    },
    {
      q: 'Is this just another ebook full of fluff?',
      a: 'No. This is 80+ pages of actionable strategies, templates, and scripts. Not theory — step-by-step instructions you can execute today. Plus Notion templates, Canva templates, and Python scripts.',
    },
    {
      q: 'How do I access the Notion template?',
      a: 'After purchase, you\'ll receive a duplicate link. Click it, and the template will be copied to your Notion workspace. No setup required.',
    },
    {
      q: 'Do you offer support?',
      a: 'Yes! Email kliporahq@gmail.com with any questions. We typically respond within 24 hours.',
    },
    {
      q: 'Will this be updated?',
      a: 'Yes! All buyers get free lifetime updates. When strategies change (new platforms, new tools, new algorithms), you\'ll get the updated version at no extra cost.',
    },
  ]

  return (
    <section className="px-6 py-20 bg-slate-800/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

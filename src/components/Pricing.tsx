'use client'

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get the Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Blueprint
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            One-time payment. Lifetime access. Free updates forever.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Popular badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-6 py-2 rounded-bl-xl">
            BEST VALUE
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Freelance-to-Passive Blueprint
              </h3>
              <p className="text-slate-400 mb-6">
                The complete system to transform your freelance skills into 5 automated passive income streams.
              </p>

              <div className="space-y-3 mb-8">
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
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-slate-500 line-through text-lg mb-2">$97 value</div>
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                $37
              </div>
              <div className="text-slate-400 mb-8">one-time payment</div>

              <a
                href="https://payhip.com/b/aSzpH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-xl px-10 py-5 rounded-xl shadow-lg shadow-green-500/25 transition-all hover:scale-105 w-full md:w-auto"
              >
                Get Instant Access
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <div className="mt-6 flex items-center justify-center md:justify-end gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure checkout
                </span>
                <span>PayPal accepted</span>
              </div>

              <div className="mt-4 text-sm text-slate-500">
                30-day money-back guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Upsell mention */}
        <div className="mt-8 text-center">
          <p className="text-slate-400">
            💡 After purchase, you&apos;ll get an exclusive <span className="text-blue-400 font-bold">$17 upsell</span> for the Advanced Automation Pack
          </p>
        </div>
      </div>
    </section>
  )
}

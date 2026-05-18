'use client'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-blue-300">New for 2026 — Updated with latest strategies</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Fiverr Skills</span> into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">5 Passive Income Streams</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          The complete 80+ page blueprint to escape the freelancing trap and build automated income that pays you while you sleep.
        </p>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-6 mb-10 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span>4.9/5 from 127+ buyers</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-600" />
          <div className="hidden md:block">80+ pages of actionable content</div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
          >
            Get the Blueprint — $37
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contents"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 font-medium px-8 py-4 rounded-xl transition-all"
          >
            See What&apos;s Inside
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Instant Download
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            30-Day Money Back
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Lifetime Updates
          </span>
        </div>
      </div>
    </section>
  )
}

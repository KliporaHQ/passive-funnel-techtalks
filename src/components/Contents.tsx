export default function Contents() {
  const chapters = [
    { num: '01', title: 'The Mindset Shift', desc: 'Why freelancing is a trap and how to escape it' },
    { num: '02', title: 'The Passive Income Myth', desc: 'What\'s real in 2026 — and what\'s hype' },
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

  return (
    <section id="contents" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What&apos;s Inside the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Blueprint
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            80+ pages across 21 chapters + 5 bonuses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {chapters.map((ch) => (
            <div
              key={ch.num}
              className="flex items-start gap-4 bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/30 transition-all"
            >
              <span className="text-2xl font-bold text-blue-400/50 font-mono">{ch.num}</span>
              <div>
                <h3 className="font-bold text-lg">{ch.title}</h3>
                <p className="text-slate-400 text-sm">{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">🎁 Included Bonuses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h4 className="font-bold">Notion Second Brain Template</h4>
                <p className="text-slate-400 text-sm">Income tracker, content calendar, funnel dashboard, gig optimizer</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h4 className="font-bold">12 Canva Templates</h4>
                <p className="text-slate-400 text-sm">Sales pages, social posts, email sequences, Pinterest pins</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-bold">5 Automation Scripts</h4>
                <p className="text-slate-400 text-sm">Pinterest auto-pinner, SEO tracker, email cleaner, income tracker</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <h4 className="font-bold">Affiliate Directory</h4>
                <p className="text-slate-400 text-sm">50+ high-paying programs that pay via PayPal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

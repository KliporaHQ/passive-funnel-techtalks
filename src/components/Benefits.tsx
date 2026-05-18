export default function Benefits() {
  const benefits = [
    {
      icon: '📚',
      title: '80+ Page Blueprint',
      description: 'The complete A-to-Z guide covering all 5 passive income streams — from choosing your first product to scaling to $10K/month.',
    },
    {
      icon: '🧠',
      title: 'Notion Second Brain',
      description: 'Complete Notion template with income tracker, content calendar, funnel dashboard, and gig optimizer. Just duplicate and use.',
    },
    {
      icon: '🎨',
      title: '12 Canva Templates',
      description: 'Plug-and-play templates for sales pages, social posts, email sequences, and Pinterest pins. Customize in minutes.',
    },
    {
      icon: '⚡',
      title: 'Automation Scripts',
      description: '5 ready-to-use Python scripts for Pinterest auto-pinning, SEO tracking, email cleaning, and income tracking.',
    },
    {
      icon: '💰',
      title: 'Affiliate Directory',
      description: 'Curated list of 50+ high-paying affiliate programs that pay via PayPal — including SaaS, hosting, and course platforms.',
    },
    {
      icon: '📅',
      title: '90-Day Content Calendar',
      description: 'Day-by-day content plan for 3 months — blog posts, social media, and Pinterest pins all mapped out.',
    },
  ]

  return (
    <section id="benefits" className="px-6 py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Passive Income
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Not just theory — actionable templates, scripts, and systems you can use today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

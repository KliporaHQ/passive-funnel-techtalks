export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah K.',
      role: 'Fiverr Top Rated Seller',
      text: 'I was stuck in the freelancing hamster wheel. This blueprint showed me how to create my first digital product in a weekend. Made $1,200 in the first month.',
      rating: 5,
    },
    {
      name: 'Ahmed M.',
      role: 'Web Developer',
      text: 'The Notion template alone is worth the price. I now track all my income streams in one place and actually see my progress. Game changer.',
      rating: 5,
    },
    {
      name: 'Jessica L.',
      role: 'Graphic Designer',
      text: 'I had no idea how to start with passive income. This book breaks everything down into simple steps. The affiliate directory saved me hours of research.',
      rating: 5,
    },
    {
      name: 'Marcus T.',
      role: 'Content Creator',
      text: 'The content repurposing chapter changed everything. I went from creating 3 posts a week to 15+ without working more hours.',
      rating: 5,
    },
    {
      name: 'Priya S.',
      role: 'Freelance Writer',
      text: 'Bought this on a whim and it paid for itself in the first week. The email sequence template alone generated $400 in affiliate commissions.',
      rating: 5,
    },
    {
      name: 'David R.',
      role: 'UI/UX Designer',
      text: 'Finally, a passive income guide that\'s actually actionable. No fluff, no hype — just step-by-step instructions. The Canva templates are fire.',
      rating: 5,
    },
  ]

  return (
    <section className="px-6 py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Buyers Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Saying
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Join 127+ freelancers who&apos;ve transformed their income
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
            >
              <div className="text-yellow-400 mb-3">
                {'★'.repeat(t.rating)}
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

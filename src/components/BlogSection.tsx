const blogPosts = [
  {
    slug: 'fiverr-passive-income-2026',
    title: 'How to Turn Fiverr Skills into Passive Income in 2026',
    excerpt: 'The complete guide to escaping the freelancing trap and building automated income streams from your existing skills.',
    date: 'May 18, 2026',
    category: 'Passive Income',
    readTime: '12 min read',
  },
  {
    slug: 'digital-products-for-freelancers',
    title: 'Digital Products for Freelancers: The Ultimate Guide',
    excerpt: 'Learn how to create templates, e-books, and courses that sell while you sleep. Step-by-step process with real examples.',
    date: 'May 18, 2026',
    category: 'Digital Products',
    readTime: '10 min read',
  },
  {
    slug: 'notion-templates-for-freelancers',
    title: 'Notion Templates That Sell: A Freelancer\'s Guide',
    excerpt: 'How to create and sell Notion templates. From idea validation to Gumroad launch — everything you need to know.',
    date: 'May 18, 2026',
    category: 'Templates',
    readTime: '8 min read',
  },
  {
    slug: 'payhip-vs-gumroad-2026',
    title: 'Payhip vs Gumroad: Which is Best for Digital Products in 2026?',
    excerpt: 'An honest comparison of Payhip and Gumroad — fees, features, payouts, and which platform is right for you.',
    date: 'May 18, 2026',
    category: 'Platforms',
    readTime: '7 min read',
  },
  {
    slug: 'affiliate-marketing-for-freelancers',
    title: 'Affiliate Marketing for Freelancers: Earn Commissions While You Sleep',
    excerpt: 'The best affiliate programs for freelancers, how to create content that converts, and how to earn passive commissions.',
    date: 'May 18, 2026',
    category: 'Affiliate Marketing',
    readTime: '11 min read',
  },
  {
    slug: 'seo-for-passive-income',
    title: 'SEO for Passive Income: Get Free Traffic That Converts',
    excerpt: 'How to rank on Google and drive free traffic to your digital products. The complete SEO strategy for 2026.',
    date: 'May 18, 2026',
    category: 'SEO',
    readTime: '14 min read',
  },
  {
    slug: 'print-on-demand-guide-2026',
    title: 'Print-on-Demand: Design Once, Sell Forever',
    excerpt: 'The complete guide to print-on-demand. Best platforms, pricing strategies, and how to create designs that sell.',
    date: 'May 18, 2026',
    category: 'Print on Demand',
    readTime: '9 min read',
  },
  {
    slug: 'content-repurposing-strategy',
    title: 'Content Repurposing: Turn 1 Piece into 15+ Posts',
    excerpt: 'How to create a content repurposing machine that fills all your social media channels without burnout.',
    date: 'May 18, 2026',
    category: 'Content Marketing',
    readTime: '8 min read',
  },
  {
    slug: 'email-sequence-that-sells',
    title: 'The 7-Day Email Sequence That Sells Digital Products',
    excerpt: 'The exact email sequence template that converts subscribers into buyers. Copy-paste ready.',
    date: 'May 18, 2026',
    category: 'Email Marketing',
    readTime: '10 min read',
  },
  {
    slug: 'micro-saas-for-freelancers',
    title: 'Micro-SaaS for Freelancers: Productize Your Service',
    excerpt: 'How to turn your freelance service into a micro-SaaS product. No-code tools, pricing, and launch strategy.',
    date: 'May 18, 2026',
    category: 'SaaS',
    readTime: '13 min read',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Free{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Resources
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            In-depth guides to help you build passive income
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{post.date}</span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                  Read more →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

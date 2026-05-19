'use client'

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; color: #061b31; background: #fff; line-height: 1.6; }
        :root { --brand: #533afd; --brand-dark: #4434d4; --brand-light: #665efd; --navy: #061b31; --navy-dark: #0d253d; --slate: #64748d; --success: #15be53; --success-dark: #108c3d; --border: #e5edf5; --surface: #f6f9fc; --ruby: #ea2261; --dark-section: #1c1e54; }
        .container { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
        .hero { position: relative; overflow: hidden; padding: 120px 0 80px; background: linear-gradient(135deg, var(--surface) 0%, #fff 50%, rgba(83,58,253,0.03) 100%); }
        .hero::before { content: ''; position: absolute; top: -200px; right: -200px; width: 600px; height: 600px; border-radius: 50%; background: rgba(83,58,253,0.05); filter: blur(80px); }
        .hero::after { content: ''; position: absolute; bottom: -100px; left: -100px; width: 400px; height: 400px; border-radius: 50%; background: rgba(234,34,97,0.05); filter: blur(80px); }
        .hero-content { position: relative; text-align: center; }
        .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(83,58,253,0.1); border: 1px solid rgba(83,58,253,0.2); border-radius: 999px; padding: 8px 20px; margin-bottom: 40px; }
        .badge-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--success); animation: pulse 2s infinite; }
        .badge-text { font-size: 14px; font-weight: 500; color: var(--brand); }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .hero h1 { font-size: clamp(36px, 5vw, 56px); font-weight: 300; line-height: 1.05; letter-spacing: -0.03em; color: var(--navy); margin-bottom: 32px; max-width: 900px; margin-left: auto; margin-right: auto; }
        .gradient-purple { background: linear-gradient(135deg, var(--brand), var(--brand-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 400; }
        .gradient-green { background: linear-gradient(135deg, var(--success), var(--success-dark)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 400; }
        .hero p { font-size: 18px; color: var(--slate); max-width: 680px; margin: 0 auto 48px; font-weight: 300; }
        .cta-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-bottom: 56px; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--brand); color: #fff; font-size: 16px; font-weight: 500; padding: 16px 32px; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 14px rgba(83,58,253,0.4); transition: all 0.3s; }
        .btn-primary:hover { background: var(--brand-dark); transform: translateY(-2px); }
        .btn-secondary { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--border); color: var(--navy); font-size: 16px; font-weight: 500; padding: 16px 32px; border-radius: 8px; text-decoration: none; transition: all 0.3s; }
        .btn-secondary:hover { border-color: rgba(83,58,253,0.3); background: rgba(83,58,253,0.05); }
        .social-proof { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 24px; font-size: 14px; color: var(--slate); }
        .avatars { display: flex; }
        .avatar { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #fff; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 500; color: #fff; margin-right: -8px; }
        .divider { width: 1px; height: 16px; background: var(--border); }
        .stars { color: #f59e0b; }
        .trust-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 32px; margin-top: 64px; padding-top: 40px; border-top: 1px solid var(--border); font-size: 14px; color: var(--slate); }
        .trust-badge { display: flex; align-items: center; gap: 8px; }
        .section { padding: 96px 0; }
        .section-surface { background: var(--surface); }
        .section-label { font-size: 12px; font-weight: 600; color: var(--brand); text-transform: uppercase; letter-spacing: 0.1em; text-align: center; margin-bottom: 16px; }
        .section-title { font-size: clamp(28px, 4vw, 42px); font-weight: 300; letter-spacing: -0.02em; text-align: center; margin-bottom: 20px; color: var(--navy); }
        .section-subtitle { font-size: 18px; color: var(--slate); text-align: center; max-width: 600px; margin: 0 auto 64px; font-weight: 300; }
        .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
        .benefit-card { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 32px; transition: all 0.3s; }
        .benefit-card:hover { box-shadow: 0 8px 30px rgba(50,50,93,0.08); border-color: rgba(83,58,253,0.2); transform: translateY(-4px); }
        .benefit-icon { font-size: 32px; margin-bottom: 20px; }
        .benefit-card h3 { font-size: 18px; font-weight: 600; color: var(--navy); margin-bottom: 12px; }
        .benefit-card p { font-size: 15px; color: var(--slate); line-height: 1.6; }
        .contents-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 12px; margin-bottom: 56px; }
        .chapter { display: flex; align-items: flex-start; gap: 16px; background: var(--surface); border-radius: 8px; padding: 20px; transition: background 0.2s; }
        .chapter:hover { background: rgba(83,58,253,0.05); }
        .chapter-num { font-size: 13px; font-weight: 500; color: var(--brand); font-family: monospace; flex-shrink: 0; margin-top: 2px; }
        .chapter-title { font-size: 15px; font-weight: 500; color: var(--navy); }
        .chapter-desc { font-size: 13px; color: var(--slate); margin-top: 2px; }
        .bonuses { background: linear-gradient(135deg, var(--dark-section), var(--navy-dark)); border-radius: 16px; padding: 48px; }
        .bonuses h3 { font-size: 24px; font-weight: 300; color: #fff; text-align: center; margin-bottom: 32px; }
        .bonuses-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .bonus-card { display: flex; align-items: flex-start; gap: 16px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; }
        .bonus-icon { font-size: 28px; }
        .bonus-card h4 { font-size: 15px; font-weight: 500; color: #fff; margin-bottom: 4px; }
        .bonus-card p { font-size: 13px; color: rgba(255,255,255,0.6); }
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
        .testimonial { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 28px; transition: all 0.3s; }
        .testimonial:hover { box-shadow: 0 8px 30px rgba(50,50,93,0.08); }
        .testimonial-stars { color: #f59e0b; margin-bottom: 16px; font-size: 14px; }
        .testimonial-text { font-size: 15px; color: var(--slate); line-height: 1.6; margin-bottom: 20px; }
        .testimonial-author { display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid var(--border); }
        .testimonial-avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px; font-weight: 500; }
        .testimonial-name { font-size: 14px; font-weight: 500; color: var(--navy); }
        .testimonial-role { font-size: 12px; color: var(--slate); }
        .pricing-card { max-width: 720px; margin: 0 auto; background: #fff; border: 2px solid var(--brand); border-radius: 16px; padding: 48px 56px; position: relative; box-shadow: 0 20px 60px rgba(83,58,253,0.15); }
        .pricing-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--brand); color: #fff; font-size: 13px; font-weight: 500; padding: 6px 24px; border-radius: 999px; }
        .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        .pricing-features { list-style: none; }
        .pricing-features li { font-size: 15px; color: var(--navy); margin-bottom: 12px; }
        .pricing-cta { text-align: center; }
        .pricing-was { font-size: 18px; color: var(--slate); text-decoration: line-through; margin-bottom: 4px; }
        .pricing-price { font-size: 56px; font-weight: 700; color: var(--navy); letter-spacing: -0.02em; line-height: 1; margin-bottom: 4px; }
        .pricing-note { font-size: 14px; color: var(--slate); margin-bottom: 32px; }
        .pricing-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--brand); color: #fff; font-size: 18px; font-weight: 500; padding: 20px 40px; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 14px rgba(83,58,253,0.4); transition: all 0.3s; width: 100%; justify-content: center; }
        .pricing-btn:hover { background: var(--brand-dark); transform: translateY(-2px); }
        .pricing-trust { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 24px; font-size: 13px; color: var(--slate); }
        .pricing-guarantee { font-size: 13px; color: var(--slate); margin-top: 12px; text-align: center; }
        .upsell-note { text-align: center; color: var(--slate); margin-top: 32px; font-size: 14px; }
        .upsell-note span { color: var(--brand); font-weight: 500; }
        .faq-list { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
        .faq-item { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
        .faq-question { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 24px; text-align: left; background: none; border: none; font-size: 16px; font-weight: 500; color: var(--navy); cursor: pointer; font-family: inherit; }
        .faq-question:hover { background: var(--surface); }
        .faq-answer { padding: 0 24px 24px; font-size: 15px; color: var(--slate); line-height: 1.6; }
        .footer { background: var(--navy-dark); color: #fff; padding: 64px 0; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; margin-bottom: 48px; }
        .footer h3 { font-size: 18px; font-weight: 600; margin-bottom: 12px; }
        .footer p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; max-width: 360px; }
        .footer h4 { font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.8); margin-bottom: 16px; }
        .footer ul { list-style: none; }
        .footer li { margin-bottom: 10px; }
        .footer a { font-size: 14px; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
        .footer a:hover { color: #fff; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 32px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; font-size: 13px; color: rgba(255,255,255,0.4); }
        @media (max-width: 768px) {
          .hero { padding: 80px 0 60px; }
          .hero h1 { font-size: 36px; }
          .section { padding: 64px 0; }
          .pricing-card { padding: 32px 24px; }
          .pricing-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .benefits-grid, .testimonials-grid { grid-template-columns: 1fr; }
          .contents-grid { grid-template-columns: 1fr; }
          .bonuses { padding: 32px 24px; }
          .social-proof { flex-direction: column; gap: 12px; }
          .divider { display: none; }
        }
      `}} />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="badge"><span className="badge-dot"></span><span className="badge-text">New for 2026 — Updated with latest strategies</span></div>
              <h1>Turn Your <span className="gradient-purple">Fiverr Skills</span> into <span className="gradient-green">5 Passive Income Streams</span></h1>
              <p>The complete 80+ page blueprint to escape the freelancing trap and build automated income that pays you while you sleep.</p>
              <div className="cta-row">
                <a href="https://payhip.com/b/aSzpH" target="_blank" rel="noopener noreferrer" className="btn-primary">Get the Blueprint — $37 <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                <a href="#contents" className="btn-secondary">See What&apos;s Inside</a>
              </div>
              <div className="social-proof">
                <div className="avatars">
                  <div className="avatar" style={{background:'linear-gradient(135deg,#533afd,#665efd)'}}>SK</div>
                  <div className="avatar" style={{background:'linear-gradient(135deg,#15be53,#108c3d)'}}>AM</div>
                  <div className="avatar" style={{background:'linear-gradient(135deg,#ea2261,#f96bee)'}}>JL</div>
                  <div className="avatar" style={{background:'linear-gradient(135deg,#f59e0b,#d97706)'}}>MR</div>
                  <div className="avatar" style={{background:'linear-gradient(135deg,#8b5cf6,#7c3aed)'}}>PS</div>
                </div>
                <span style={{fontWeight:500,color:'#061b31'}}>127+ buyers</span>
                <span className="divider"></span>
                <span className="stars">★★★★★</span>
                <span style={{fontWeight:500,color:'#061b31'}}>4.9/5</span>
                <span className="divider"></span>
                <span>80+ pages of actionable content</span>
              </div>
              <div className="trust-badges">
                <div className="trust-badge"><span>⚡</span> Instant Download</div>
                <div className="trust-badge"><span>🛡️</span> 30-Day Money Back</div>
                <div className="trust-badge"><span>🔄</span> Lifetime Updates</div>
                <div className="trust-badge"><span>💳</span> Secure PayPal Checkout</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-surface">
          <div className="container">
            <p className="section-label">Everything You Need</p>
            <h2 className="section-title">Everything You Need to Build <span className="gradient-green">Passive Income</span></h2>
            <p className="section-subtitle">Not just theory — actionable templates, scripts, and systems you can use today.</p>
            <div className="benefits-grid">
              <div className="benefit-card"><div className="benefit-icon">📚</div><h3>80+ Page Blueprint</h3><p>The complete A-to-Z guide covering all 5 passive income streams.</p></div>
              <div className="benefit-card"><div className="benefit-icon">🧠</div><h3>Notion Second Brain</h3><p>Complete Notion template with income tracker, content calendar, funnel dashboard.</p></div>
              <div className="benefit-card"><div className="benefit-icon">🎨</div><h3>12 Canva Templates</h3><p>Plug-and-play templates for sales pages, social posts, email sequences.</p></div>
              <div className="benefit-card"><div className="benefit-icon">⚡</div><h3>Automation Scripts</h3><p>5 ready-to-use Python scripts for Pinterest, SEO, email, and income tracking.</p></div>
              <div className="benefit-card"><div className="benefit-icon">💰</div><h3>Affiliate Directory</h3><p>50+ high-paying affiliate programs that pay via PayPal.</p></div>
              <div className="benefit-card"><div className="benefit-icon">📅</div><h3>90-Day Content Calendar</h3><p>Day-by-day content plan for 3 months — all mapped out.</p></div>
            </div>
          </div>
        </section>
        <section className="section" id="contents">
          <div className="container">
            <p className="section-label">What&apos;s Inside</p>
            <h2 className="section-title">80+ Pages Across <span className="gradient-purple">21 Chapters</span></h2>
            <p className="section-subtitle">Plus 5 bonuses that alone are worth more than the price of this bundle.</p>
            <div className="contents-grid">
              <div className="chapter"><span className="chapter-num">01</span><div><div className="chapter-title">The Mindset Shift</div><div className="chapter-desc">Why freelancing is a trap and how to escape it</div></div></div>
              <div className="chapter"><span className="chapter-num">02</span><div><div className="chapter-title">The Passive Income Myth</div><div className="chapter-desc">What&apos;s real in 2026 — and what&apos;s hype</div></div></div>
              <div className="chapter"><span className="chapter-num">03</span><div><div className="chapter-title">The 5-Stream Framework</div><div className="chapter-desc">The system that ties everything together</div></div></div>
              <div className="chapter"><span className="chapter-num">04</span><div><div className="chapter-title">Stream 1: Digital Products</div><div className="chapter-desc">Templates, e-books, courses, and more</div></div></div>
              <div className="chapter"><span className="chapter-num">05</span><div><div className="chapter-title">Creating Templates That Sell</div><div className="chapter-desc">The exact process for high-converting templates</div></div></div>
              <div className="chapter"><span className="chapter-num">06</span><div><div className="chapter-title">E-books &amp; Mini-Courses</div><div className="chapter-desc">Package your knowledge for passive income</div></div></div>
              <div className="chapter"><span className="chapter-num">07</span><div><div className="chapter-title">Pricing &amp; Packaging</div><div className="chapter-desc">Psychology-backed pricing strategies</div></div></div>
              <div className="chapter"><span className="chapter-num">08</span><div><div className="chapter-title">Stream 2: Affiliate Marketing</div><div className="chapter-desc">The 2026 playbook for affiliate income</div></div></div>
              <div className="chapter"><span className="chapter-num">09</span><div><div className="chapter-title">High-Paying Affiliate Programs</div><div className="chapter-desc">50+ programs that pay via PayPal</div></div></div>
              <div className="chapter"><span className="chapter-num">10</span><div><div className="chapter-title">Content That Converts</div><div className="chapter-desc">The P.A.S.T.O.R. framework</div></div></div>
              <div className="chapter"><span className="chapter-num">11</span><div><div className="chapter-title">Stream 3: Content Monetization</div><div className="chapter-desc">YouTube, blogs, and newsletters</div></div></div>
              <div className="chapter"><span className="chapter-num">12</span><div><div className="chapter-title">Content Repurposing Machine</div><div className="chapter-desc">1 piece → 15+ pieces of content</div></div></div>
              <div className="chapter"><span className="chapter-num">13</span><div><div className="chapter-title">SEO for Passive Traffic</div><div className="chapter-desc">Rank on Google and get free traffic forever</div></div></div>
              <div className="chapter"><span className="chapter-num">14</span><div><div className="chapter-title">Stream 4: Print-on-Demand</div><div className="chapter-desc">Design once, sell forever</div></div></div>
              <div className="chapter"><span className="chapter-num">15</span><div><div className="chapter-title">POD Platforms &amp; Pricing</div><div className="chapter-desc">Maximize profits on every platform</div></div></div>
              <div className="chapter"><span className="chapter-num">16</span><div><div className="chapter-title">Stream 5: SaaS &amp; Tools</div><div className="chapter-desc">Productize your service</div></div></div>
              <div className="chapter"><span className="chapter-num">17</span><div><div className="chapter-title">No-Code SaaS</div><div className="chapter-desc">Build tools without coding</div></div></div>
              <div className="chapter"><span className="chapter-num">18</span><div><div className="chapter-title">From Side Project to Revenue</div><div className="chapter-desc">The SaaS launch plan</div></div></div>
              <div className="chapter"><span className="chapter-num">19</span><div><div className="chapter-title">Building the Machine</div><div className="chapter-desc">The complete autonomous funnel</div></div></div>
              <div className="chapter"><span className="chapter-num">20</span><div><div className="chapter-title">Email Sequences That Sell</div><div className="chapter-desc">7-day nurture sequence template</div></div></div>
              <div className="chapter"><span className="chapter-num">21</span><div><div className="chapter-title">The 30-Day Launch Plan</div><div className="chapter-desc">Day-by-day execution plan</div></div></div>
            </div>
            <div className="bonuses">
              <h3>🎁 Included Bonuses</h3>
              <div className="bonuses-grid">
                <div className="bonus-card"><span className="bonus-icon">🧠</span><div><h4>Notion Second Brain Template</h4><p>Income tracker, content calendar, funnel dashboard</p></div></div>
                <div className="bonus-card"><span className="bonus-icon">🎨</span><div><h4>12 Canva Templates</h4><p>Sales pages, social posts, email sequences, Pinterest pins</p></div></div>
                <div className="bonus-card"><span className="bonus-icon">⚡</span><div><h4>5 Automation Scripts</h4><p>Pinterest auto-pinner, SEO tracker, email cleaner</p></div></div>
                <div className="bonus-card"><span className="bonus-icon">💰</span><div><h4>Affiliate Directory</h4><p>50+ high-paying programs that pay via PayPal</p></div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-surface">
          <div className="container">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">What Buyers Are <span style={{background:'linear-gradient(135deg,#f59e0b,#d97706)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontWeight:400}}>Saying</span></h2>
            <p className="section-subtitle">Join 127+ freelancers who&apos;ve transformed their income</p>
            <div className="testimonials-grid">
              <div className="testimonial"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">&ldquo;I was stuck in the freelancing hamster wheel. This blueprint showed me how to create my first digital product in a weekend. Made $1,200 in the first month.&rdquo;</p><div className="testimonial-author"><div className="testimonial-avatar" style={{background:'linear-gradient(135deg,#533afd,#665efd)'}}>SK</div><div><div className="testimonial-name">Sarah K.</div><div className="testimonial-role">Fiverr Top Rated Seller</div></div></div></div>
              <div className="testimonial"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">&ldquo;The Notion template alone is worth the price. I now track all my income streams in one place. Game changer.&rdquo;</p><div className="testimonial-author"><div className="testimonial-avatar" style={{background:'linear-gradient(135deg,#15be53,#108c3d)'}}>AM</div><div><div className="testimonial-name">Ahmed M.</div><div className="testimonial-role">Web Developer</div></div></div></div>
              <div className="testimonial"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">&ldquo;I had no idea how to start with passive income. This book breaks everything down into simple steps.&rdquo;</p><div className="testimonial-author"><div className="testimonial-avatar" style={{background:'linear-gradient(135deg,#ea2261,#f96bee)'}}>JL</div><div><div className="testimonial-name">Jessica L.</div><div className="testimonial-role">Graphic Designer</div></div></div></div>
              <div className="testimonial"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">&ldquo;The content repurposing chapter changed everything. I went from 3 posts a week to 15+.&rdquo;</p><div className="testimonial-author"><div className="testimonial-avatar" style={{background:'linear-gradient(135deg,#f59e0b,#d97706)'}}>MR</div><div><div className="testimonial-name">Marcus T.</div><div className="testimonial-role">Content Creator</div></div></div></div>
              <div className="testimonial"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">&ldquo;Bought this on a whim and it paid for itself in the first week. $400 in affiliate commissions.&rdquo;</p><div className="testimonial-author"><div className="testimonial-avatar" style={{background:'linear-gradient(135deg,#8b5cf6,#7c3aed)'}}>PS</div><div><div className="testimonial-name">Priya S.</div><div className="testimonial-role">Freelance Writer</div></div></div></div>
              <div className="testimonial"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">&ldquo;Finally, a passive income guide that&apos;s actually actionable. No fluff, no hype.&rdquo;</p><div className="testimonial-author"><div className="testimonial-avatar" style={{background:'linear-gradient(135deg,#06b6d4,#0891b2)'}}>DR</div><div><div className="testimonial-name">David R.</div><div className="testimonial-role">UI/UX Designer</div></div></div></div>
            </div>
          </div>
        </section>
        <section className="section" id="pricing">
          <div className="container">
            <p className="section-label">Pricing</p>
            <h2 className="section-title">Get the Complete <span className="gradient-green">Blueprint</span></h2>
            <p className="section-subtitle">One-time payment. Lifetime access. Free updates forever.</p>
            <div className="pricing-card">
              <div className="pricing-badge">BEST VALUE</div>
              <div className="pricing-grid">
                <div>
                  <h3 style={{fontSize:24,fontWeight:600,color:'#061b31',marginBottom:12}}>Freelance-to-Passive Blueprint</h3>
                  <p style={{color:'#64748d',marginBottom:24}}>The complete system to transform your freelance skills into 5 automated passive income streams.</p>
                  <ul className="pricing-features">
                    <li>✓ 80+ page professional PDF ebook</li>
                    <li>✓ Notion Second Brain template</li>
                    <li>✓ 12 plug-and-play Canva templates</li>
                    <li>✓ 5 automation scripts (Python)</li>
                    <li>✓ 50+ affiliate programs directory</li>
                    <li>✓ 90-day content calendar</li>
                    <li>✓ 30-day launch plan</li>
                    <li>✓ Lifetime free updates</li>
                  </ul>
                </div>
                <div className="pricing-cta">
                  <div className="pricing-was">$97 value</div>
                  <div className="pricing-price">$37</div>
                  <div className="pricing-note">one-time payment</div>
                  <a href="https://payhip.com/b/aSzpH" target="_blank" rel="noopener noreferrer" className="pricing-btn">Get Instant Access <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                  <div className="pricing-trust"><span>🔒 Secure checkout</span><span>PayPal accepted</span></div>
                  <div className="pricing-guarantee">30-day money-back guarantee</div>
                </div>
              </div>
            </div>
            <p className="upsell-note">💡 After purchase, an exclusive <span>$17 upsell</span> for the Advanced Automation Pack</p>
          </div>
        </section>
        <section className="section section-surface" id="faq">
          <div className="container">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked <span className="gradient-purple">Questions</span></h2>
            <div className="faq-list">
              <div className="faq-item"><button className="faq-question" onClick={(e) => { const a = e.currentTarget.nextElementSibling as HTMLElement; if (a) a.style.display = a.style.display === 'none' ? 'block' : 'none'; }}>Is this only for Fiverr sellers? <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg></button><div className="faq-answer">No! The strategies work for any freelancer — Upwork, 99designs, direct clients, or any skill-based work.</div></div>
              <div className="faq-item"><button className="faq-question" onClick={(e) => { const a = e.currentTarget.nextElementSibling as HTMLElement; if (a) a.style.display = a.style.display === 'none' ? 'block' : 'none'; }}>How quickly can I start earning? <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg></button><div className="faq-answer" style={{display:'none'}}>Most buyers launch their first digital product within 2-3 weeks. Affiliate income can start within days.</div></div>
              <div className="faq-item"><button className="faq-question" onClick={(e) => { const a = e.currentTarget.nextElementSibling as HTMLElement; if (a) a.style.display = a.style.display === 'none' ? 'block' : 'none'; }}>Do I need technical skills? <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg></button><div className="faq-answer" style={{display:'none'}}>No coding required. The blueprint covers no-code tools for everything.</div></div>
              <div className="faq-item"><button className="faq-question" onClick={(e) => { const a = e.currentTarget.nextElementSibling as HTMLElement; if (a) a.style.display = a.style.display === 'none' ? 'block' : 'none'; }}>What if it doesn&apos;t work for me? <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg></button><div className="faq-answer" style={{display:'none'}}>30-day money-back guarantee. Full refund, no questions asked.</div></div>
              <div className="faq-item"><button className="faq-question" onClick={(e) => { const a = e.currentTarget.nextElementSibling as HTMLElement; if (a) a.style.display = a.style.display === 'none' ? 'block' : 'none'; }}>Will this be updated? <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg></button><div className="faq-answer" style={{display:'none'}}>Yes! All buyers get free lifetime updates.</div></div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div><h3>Freelance-to-Passive Blueprint</h3><p>The complete system to transform your freelance skills into 5 automated passive income streams.</p></div>
              <div><h4>Quick Links</h4><ul><li><a href="#contents">What&apos;s Inside</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li></ul></div>
              <div><h4>Support</h4><ul><li><a href="mailto:kliporahq@gmail.com">Contact</a></li><li><a href="https://payhip.com/b/aSzpH" target="_blank" rel="noopener noreferrer">Get the Blueprint</a></li></ul></div>
            </div>
            <div className="footer-bottom"><p>© 2026 TechTalks / KliporaHQ. All rights reserved.</p><p>Passive income is not guaranteed. Results depend on effort and market conditions.</p></div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2">Freelance-to-Passive Blueprint</h3>
            <p className="text-slate-400 text-sm">
              The complete system to transform your freelance skills into 5 automated passive income streams.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#contents" className="hover:text-white transition-colors">Contents</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="mailto:kliporahq@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 TechTalks / KliporaHQ. All rights reserved.</p>
          <p>Passive income is not guaranteed. Results depend on effort and market conditions.</p>
        </div>
      </div>
    </footer>
  )
}

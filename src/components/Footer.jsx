import logo from "../assets/logo-text.png"

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          
          
          <div className="md:col-span-5 space-y-4 pr-4">
            
            <div className="flex items-center gap-2">
              <img src={logo} alt="DevStack Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                <span className="text-pink-500"></span>
              </span>
            </div>

            
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            
            <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-slate-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                PRODUCT
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#" className="hover:text-slate-700 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Technologies</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Projects</a></li>
              </ul>
            </div>

            
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#" className="hover:text-slate-700 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Careers</a></li>
              </ul>
            </div>

            
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                LEGAL
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>

        
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#754E1A] to-[#9b682a] flex items-center justify-center text-white font-bold">
                LH
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#754E1A] to-[#9b682a]">
                LEXHACK 2025
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              The Flagship Event of the Center for Law, Technology & Innovation (CLTI). Where Law Meets Technology.
              Where Innovation Drives Change.
            </p>
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Center for Law, Technology & Innovation. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Event Breakdown
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#prizes" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Why Participate
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Participant Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Legal Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">
                <span className="block font-medium text-white">Email:</span>
                info@lexhack.com
              </li>
              <li className="text-slate-400">
                <span className="block font-medium text-white">Phone:</span>
                +91 123 456 7890
              </li>
              <li className="text-slate-400">
                <span className="block font-medium text-white">Address:</span>
                Center for Law, Technology & Innovation
                <br />
                University Campus
                <br />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
              Instagram
            </a>
          </div>

          <div className="text-xs text-slate-500">Innovate. Defend. Disrupt.</div>
        </div>
      </div>
    </footer>
  )
}


import { Heart, Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl border-t border-cyan-400/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-3">
              ~/Sarang's Terminal
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Computer Engineer | Web Developer | Tech Enthusiast
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-600 dark:text-gray-400 
                    hover:text-cyan-400 transition-all"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Sarang-Salunkhe"
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub"
                className="p-3 bg-gray-100 dark:bg-gray-800 
                rounded-full hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]
                hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white
                transition-all"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="p-3 bg-gray-100 dark:bg-gray-800 
                rounded-full hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]
                hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white
                transition-all"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:sarangsalunkhe08@gmail.com"
                title="Send Email"
                className="p-3 bg-gray-100 dark:bg-gray-800 
                rounded-full hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]
                hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white
                transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Sarang's Terminal. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

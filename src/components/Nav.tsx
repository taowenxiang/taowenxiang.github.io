import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

type NavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  activeSection: string;
};

const Nav = ({ isMenuOpen, setIsMenuOpen, activeSection }: NavProps) => {
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ['rgba(240,247,255,0)', 'rgba(240,247,255,0.92)']);

  return (
    <motion.nav
      style={{ backgroundColor: navBg }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-blue-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-end items-center">
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link px-3 lg:px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-blue-600 active' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 flex flex-col gap-1 border-t border-blue-200/60 mt-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl transition-all font-medium ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-500/10'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-blue-50/80'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Nav;

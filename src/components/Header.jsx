import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === 'home' ? '' : entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header Bar */}
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${scrolled
            ? 'backdrop-blur-xl bg-white/10 py-1 shadow-md scale-[0.95] opacity-90'
            : 'backdrop-blur-md bg-white/5 py-3 shadow-xl scale-100 opacity-100'
          } border border-white/10 rounded-full px-8 w-fit items-center justify-between gap-8 hidden md:flex`}
      >
        <h1 className="text-cyan-400 font-bold text-lg tracking-wide whitespace-nowrap">
          Samac.dev
        </h1>

        <nav className="flex items-center gap-4 text-white/80 text-sm">
          {sections.slice(1).map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`px-4 py-1 rounded-full whitespace-nowrap transition ${activeSection === item
                  ? 'bg-cyan-500/20 text-cyan-300'
                  : 'hover:bg-cyan-400/10 hover:text-cyan-300'
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="ml-2 px-4 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm rounded-full shadow-md transition whitespace-nowrap"
        >
          Let’s Connect
        </a>
      </header>

      {/* Hamburger */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden flex items-center justify-between px-6 py-3 w-[90%] max-w-[400px] rounded-full backdrop-blur-md bg-white/10 border border-white/10 shadow-md">
        <h1 className="text-cyan-400 font-bold text-lg tracking-wide">Samac.dev</h1>
        <button
          className="text-white text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-6 text-white text-2xl"
            >
              {sections.slice(1).map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-lg rounded-full shadow-md transition"
              >
                Let’s Connect
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

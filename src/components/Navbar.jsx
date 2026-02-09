import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'recruitment', label: 'Recruitment', highlight: true },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar - Centered floating curved bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className={`flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-[rgba(8,8,28,0.8)] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_60px_rgba(0,240,255,0.06)] border border-white/[0.08]'
              : 'bg-[rgba(8,8,28,0.5)] border border-white/[0.06]'
          }`}
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer px-3 py-2 rounded-full hover:bg-white/[0.06] transition-all duration-300 mr-4"
            onClick={() => scrollTo('home')}
          >
            <img
              src="/club_logo.jpeg"
              alt="Nexora"
              className="w-8 h-8 rounded-full border border-primary/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
            />
            <span className="font-[var(--font-heading)] text-primary font-bold text-sm tracking-[0.15em]">
              NE<span className="text-yellow">X</span>ORA
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-7 bg-gradient-to-b from-transparent via-white/20 to-transparent mr-4" />

          {/* Nav items */}
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-item relative px-6 py-2.5 text-[13px] font-semibold tracking-wide rounded-full whitespace-nowrap transition-all duration-300 ${
                item.highlight
                  ? 'bg-gradient-to-r from-accent/30 to-accent/10 text-accent-bright border border-accent/40 hover:border-accent/60 hover:shadow-[0_0_24px_rgba(124,58,237,0.4)] hover:from-accent/50 hover:to-accent/25 hover:text-white hover:scale-105'
                  : activeSection === item.id
                  ? 'text-primary bg-primary/[0.12] shadow-[0_0_16px_rgba(0,240,255,0.15)]'
                  : 'text-[#8892a4] hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_12px_rgba(255,255,255,0.05)] hover:scale-105'
              }`}
            >
              {item.label}

              {/* Active indicator - glowing underline bar */}
              {activeSection === item.id && !item.highlight && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.9),0_0_20px_rgba(0,240,255,0.4)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              {/* Highlight glow for recruitment */}
              {item.highlight && (
                <span className="absolute inset-0 rounded-full animate-[recruitment-pulse_2.5s_ease-in-out_infinite] pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-4 left-4 right-4 z-50 md:hidden"
      >
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-500 border ${
            scrolled || mobileOpen
              ? 'bg-[rgba(8,8,28,0.85)] border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'bg-[rgba(8,8,28,0.5)] border-white/[0.06]'
          }`}
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollTo('home')}>
            <img
              src="/club_logo.jpeg"
              alt="Nexora"
              className="w-8 h-8 rounded-full border border-primary/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
            />
            <span className="font-[var(--font-heading)] text-primary font-bold text-sm tracking-[0.15em]">
              NE<span className="text-yellow">X</span>ORA
            </span>
          </div>

          {/* Hamburger */}
          <button
            className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/[0.06] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`absolute block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`absolute block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mt-2 p-3 rounded-2xl border border-white/[0.08]"
              style={{
                background: 'rgba(8, 8, 28, 0.9)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      item.highlight
                        ? 'bg-gradient-to-r from-accent/20 to-transparent text-accent-bright border border-accent/30 hover:border-accent/50'
                        : activeSection === item.id
                        ? 'text-primary bg-primary/[0.08]'
                        : 'text-[#8892a4] hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {activeSection === item.id && !item.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                    )}
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;

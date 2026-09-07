'use client';

import { useState, useEffect, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { href: '#hero', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy
      const sections = NAV_ITEMS.map(item => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleDownloadCV = useCallback(() => {
    // Trigger dynamic PDF generation
    const event = new CustomEvent('download-portfolio-pdf');
    window.dispatchEvent(event);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
    >
      <div className="container-narrow">
        <div className="flex justify-between items-center h-13 sm:h-14 md:h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group text-base sm:text-lg font-semibold tracking-tight text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all flex items-center gap-0.5"
          >
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">Iman Yunar</span>
            <span className="text-[var(--color-accent)] inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-125 font-bold">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-[var(--color-accent)] font-semibold'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                }`}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <m.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--color-accent)] shadow-[0_1px_4px_rgba(34,81,255,0.4)]"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
              </a>
            ))}

            <div className="ml-4 pl-4 border-l border-[var(--color-border)] flex items-center gap-3">
              {/* Social Icons */}
              <a
                href="https://github.com/imanyunar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:scale-125 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:scale-125 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="btn-primary group ml-2 !py-2 !px-4 !text-[13px] hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                Download CV
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={handleDownloadCV}
              className="btn-primary group !py-2 !px-3 !text-[12px] active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
              CV
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)] hover:scale-105 active:scale-95 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-[var(--color-border)] shadow-lg"
          >
            <div className="container-narrow py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-[var(--color-accent)] bg-blue-50/50'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-4 px-4 pt-3 border-t border-[var(--color-border)]">
                <a href="https://github.com/imanyunar" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)]" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)]" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:imanyunar@gmail.com" className="text-[var(--color-text-muted)]" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

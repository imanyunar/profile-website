'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${scrolled ? 'top-4 w-[95%] max-w-5xl' : 'top-0 w-full'}`}>
      <div className={`${scrolled ? 'px-0' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <m.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`transition-all duration-700 rounded-[32px] ${scrolled ? 'glass-pill px-8 py-2 shadow-2xl shadow-indigo-500/10 border-white/40' : 'bg-transparent py-4'}`}
        >
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <SocialIcon href="https://github.com/imanyunar" icon={<Github className="w-4 h-4" />} />
                <SocialIcon href="https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/" icon={<Linkedin className="w-4 h-4" />} />
                <SocialIcon href="mailto:imanyunar@gmail.com" icon={<Mail className="w-4 h-4" />} />
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="/" label="Home" />
              <NavLink href="/portfolio" label="Portfolio" />
              <NavLink href="/socials" label="Connect" />
              <div className="pl-4">
                <Link 
                  href="/socials" 
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-slate-900 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 group shadow-lg shadow-indigo-600/20"
                >
                  Hire Me
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </m.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 glass rounded-3xl overflow-hidden shadow-2xl border border-black/5"
          >
            <div className="p-6 space-y-3">
              <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/portfolio" label="Portfolio" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/socials" label="Connect" onClick={() => setIsOpen(false)} />
              <Link 
                href="/socials" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/20"
              >
                Get in Touch
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-bold px-4 py-2 text-slate-500 hover:text-indigo-600 transition-colors relative group"
    >
      {label}
      <m.span 
        className="absolute bottom-1 left-4 right-4 h-0.5 bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      />
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      className="block px-6 py-4 text-slate-700 hover:text-indigo-600 font-bold hover:bg-indigo-50/50 rounded-2xl transition-all"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <m.a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.1 }}
      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
    >
      {icon}
    </m.a>
  );
}


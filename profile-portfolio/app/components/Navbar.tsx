'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-2xl ${scrolled ? 'glass px-6 shadow-2xl' : 'bg-transparent px-0'}`}>
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="text-2xl font-black tracking-tighter text-gradient hover:scale-105 transition-transform">
              IYN
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/" label="Home" />
              <NavLink href="/portfolio" label="Portfolio" />
              <NavLink href="/socials" label="Connect" />
              <Link 
                href="/socials" 
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
              >
                Hire Me
              </Link>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-20 left-4 right-4 glass rounded-2xl overflow-hidden transition-all duration-300 transform origin-top ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="p-4 space-y-2">
          <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/portfolio" label="Portfolio" onClick={() => setIsOpen(false)} />
          <MobileNavLink href="/socials" label="Connect" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string, label: string }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }: { href: string, label: string, onClick: () => void }) {
  return (
    <Link 
      href={href} 
      className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}


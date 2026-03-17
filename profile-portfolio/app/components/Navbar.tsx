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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-blue-100/20 dark:border-slate-800' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            IYN
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white'}`}>Home</Link>
            <Link href="/portfolio" className={`font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white'}`}>Portfolio</Link>
            <Link href="/socials" className={`font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white'}`}>Connect</Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md focus:outline-none transition-colors ${scrolled ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 ease-in-out overflow-hidden origin-top ${isOpen ? 'max-h-64 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          <Link 
            href="/" 
            className="block px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/portfolio" 
            className="block px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            href="/socials" 
            className="block px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
}

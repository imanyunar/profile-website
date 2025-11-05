import React from "react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background-dark/95 border-b border-purple-700 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Nama */}
        <h1 className="text-primary font-bold text-lg">Iman Yunar</h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm font-medium">
          <a
            href="#about"
            className="hover:text-primary-dark transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-primary-dark transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-primary-dark transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLoader from "./components/ClientLoader";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Iman Yunar Noviadhi | AI Engineer & ML Specialist",
  description:
    "Portfolio website of Iman Yunar Noviadhi — AI Engineer, ML & Data Engineer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={`${inter.className} bg-[#09090b] text-zinc-100`}>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const elements = document.querySelectorAll('[data-animate]');
              elements.forEach(el => {
                setTimeout(() => {
                  el.style.opacity = '1';
                  el.style.transform = 'translateY(0)';
                }, 100);
              });
            });
          `
        }} />
        <Navbar />
        <ClientLoader />
        <main className="pt-16">{children}</main>

        {/* Inline utilities: theme, smooth-scroll anchor handling, reveal observer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic theme initialization
              (function() {
                try {
                  const saved = localStorage.getItem('portfolio-theme');
                  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch(e) {}
              })();

              // Smooth anchor handling
              document.addEventListener('click', function(e) {
                const a = e.target.closest && e.target.closest('a[href^="#"]');
                if (a && a.getAttribute('href') !== '#') {
                  const id = a.getAttribute('href').slice(1);
                  const el = document.getElementById(id);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              });

              // IntersectionObserver for data-animate reveals
              (function() {
                if (!('IntersectionObserver' in window)) return;
                const observerOptions = { root: null, rootMargin: '0px', threshold: 0.08 };
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      try {
                        const el = entry.target;
                        const raw = el.getAttribute('data-animate-delay') || el.dataset?.animateDelay || '';
                        if (raw) {
                          let delay = raw;
                          if (/^[0-9\.]+$/.test(delay)) delay = delay + 's';
                          (el as HTMLElement).style.transitionDelay = delay;
                        }
                      } catch(e) {}
                      entry.target.classList.add('animate-in-view');
                      observer.unobserve(entry.target);
                    }
                  });
                }, observerOptions);

                document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

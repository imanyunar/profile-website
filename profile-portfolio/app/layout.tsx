import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import { LazyMotion, domMax } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Iman Yunar Noviadhi - AI Engineer & Quantitative Trader",
  description:
    "Iman Yunar Noviadhi - AI Engineer and Quantitative Trader. Specializing in machine learning, algorithmic trading, and full-stack development.",
  authors: [
    {
      name: "Iman Yunar Noviadhi",
      url: "https://iman-yunar-noviadhi.netlify.app",
    },
  ],
  creator: "Iman Yunar Noviadhi",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Iman Yunar Noviadhi",
  alternateName: ["Iman Yunar", "imanyunar"],
  jobTitle: [
    "AI Engineer",
    "Quantitative Trader",
    "Machine Learning Specialist",
    "Full-Stack Developer",
  ],
  description:
    "AI Engineer and Quantitative Trader specializing in machine learning, algorithmic trading, and full-stack development.",
  url: "https://iman-yunar-noviadhi.netlify.app",
  image: "https://iman-yunar-noviadhi.netlify.app/profile.png",
  email: "imanyunar@gmail.com",
  sameAs: [
    "https://github.com/imanyunar",
    "https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Quantitative Trading",
    "Algorithmic Trading",
    "Data Science",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Vue.js",
    "Laravel",
    "Full-Stack Development",
    "Computer Vision",
    "Time Series Analysis",
    "LSTM",
    "Neural Networks",
  ],
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Iman Yunar",
  description: "AI Engineering & Quantitative Trading Portfolio",
  url: "https://iman-yunar-noviadhi.netlify.app",
  sameAs: [
    "https://github.com/imanyunar",
    "https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* ✅ GOOGLE SEARCH CONSOLE VERIFICATION */}
        <meta
          name="google-site-verification"
          content="J6Z3a_PjAUg_GouneZhtcYiWeB0XiAGMHreEdlkSs8k"
        />

        {/* ✅ PERSON SCHEMA */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* ✅ ORGANIZATION SCHEMA */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <LazyMotion features={domMax}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </LazyMotion>
      </body>
    </html>
  );
}
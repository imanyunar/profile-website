import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LazyMotion, domMax } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imanyunar.my.id"),
  title: "Iman Yunar Noviadhi — Full-Stack Developer & AI Practitioner",
  description:
    "Iman Yunar Noviadhi — Full-Stack Developer and AI Practitioner. Specializing in production-ready web applications, applied machine learning, and technical leadership. Computer Science at Universitas Negeri Semarang.",
  keywords:
    "Iman Yunar Noviadhi, full-stack developer, AI practitioner, software engineer, Laravel, Vue.js, Next.js, TypeScript, machine learning, UNNES",
  authors: [
    {
      name: "Iman Yunar Noviadhi",
      url: "https://imanyunar.my.id",
    },
  ],
  creator: "Iman Yunar Noviadhi",
  alternates: {
    canonical: "https://imanyunar.my.id",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Iman Yunar Noviadhi — Full-Stack Developer & AI Practitioner",
    description:
      "Building reliable digital systems. Full-stack development, applied AI, and technical leadership.",
    url: "https://imanyunar.my.id",
    siteName: "Iman Yunar Noviadhi",
    images: [
      {
        url: "https://imanyunar.my.id/profile.png",
        width: 1200,
        height: 630,
        alt: "Iman Yunar Noviadhi — Full-Stack Developer & AI Practitioner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iman Yunar Noviadhi — Full-Stack Developer & AI Practitioner",
    description:
      "Building reliable digital systems. Full-stack development, applied AI, and technical leadership.",
    images: ["https://imanyunar.my.id/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Iman Yunar Noviadhi",
  alternateName: ["Iman Yunar", "imanyunar"],
  jobTitle: [
    "Full-Stack Developer",
    "AI Practitioner",
    "Software Engineer",
  ],
  description:
    "Full-Stack Developer and AI Practitioner specializing in production-ready web applications, applied machine learning, and technical leadership.",
  url: "https://imanyunar.my.id",
  image: "https://imanyunar.my.id/profile.png",
  email: "imanyunar@gmail.com",
  sameAs: [
    "https://imanyunar.my.id",
    "https://iman-yunar-noviadhi.netlify.app",
    "https://github.com/imanyunar",
    "https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Software Engineering",
    "Python",
    "TypeScript",
    "Laravel",
    "Vue.js",
    "Next.js",
    "PostgreSQL",
    "REST API",
    "DevOps",
    "Leadership",
    "Project Management",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Negeri Semarang",
  },
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Iman Yunar Noviadhi — Portfolio",
  description:
    "Full-Stack Development & AI Portfolio",
  url: "https://imanyunar.my.id",
  sameAs: [
    "https://iman-yunar-noviadhi.netlify.app",
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
        {/* Google Fonts: Material Symbols */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="J6Z3a_PjAUg_GouneZhtcYiWeB0XiAGMHreEdlkSs8k"
        />

        {/* Person Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-white text-[#333333] antialiased`}
        suppressHydrationWarning
      >
        <LazyMotion features={domMax}>
          <main className="min-h-screen">{children}</main>
        </LazyMotion>
      </body>
    </html>
  );
}
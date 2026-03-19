import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iman Yunar Noviadhi - AI Engineer & Quantitative Trader",
  
  description: "Iman Yunar Noviadhi - AI Engineer and Quantitative Trader. Portfolio featuring machine learning projects, crypto prediction AI, cancer detection systems, and full-stack applications.",
  
  keywords: "Iman Yunar, Iman Yunar Noviadhi, AI engineer, quantitative trader, machine learning, crypto AI, deep learning, portfolio",
  
  alternates: {
    canonical: "https://iman-yunar-noviadhi.netlify.app",
  },
  
  openGraph: {
    title: "Iman Yunar Noviadhi - Portfolio",
    description: "AI Engineer & Quantitative Trader - Machine Learning, Algorithmic Trading, Full-Stack Development",
    url: "https://iman-yunar-noviadhi.netlify.app",
    siteName: "Iman Yunar",
    images: [
      {
        url: "https://iman-yunar-noviadhi.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iman Yunar Noviadhi - AI Engineer & Quantitative Trader"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Iman Yunar - Portfolio",
    description: "AI Engineer & Quantitative Trader - Machine Learning & Trading Projects",
    images: ["https://iman-yunar-noviadhi.netlify.app/og-image.png"],
    creator: "@imanyunar",
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
  
  authors: [
    {
      name: "Iman Yunar Noviadhi",
      url: "https://iman-yunar-noviadhi.netlify.app",
    },
  ],
  creator: "Iman Yunar Noviadhi",
};

export default metadata;

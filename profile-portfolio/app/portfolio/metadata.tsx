import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iman Yunar Noviadhi | Portfolio - Task Tracker, Crypto AI, Cancer Detection",
  description: "Iman Yunar Noviadhi - Quantitative Trader & AI Engineer. Projects: Task Tracker (Laravel Vue HR system), Crypto Market Prediction AI, Cancer Detection ML, research papers.",
  keywords: "Iman Yunar, Iman Yunar Noviadhi, quantitative trader, AI engineer, task tracker laravel vue, crypto prediction ai, cancer detection pytorch, machine learning portfolio",
  openGraph: {
    title: "Iman Yunar Portfolio - AI & Trading Projects",
    description: "Explore projects by Iman Yunar: Task Tracker company management, crypto AI forecasting, medical AI, quantitative trading.",
    url: "YOUR_NETLIFY_URL/portfolio", // Update with your Netlify URL
    siteName: "Iman Yunar Portfolio",
    images: [
      {
        url: "https://your-netlify-url/profile.png", // Add profile image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iman Yunar Portfolio",
    description: "Quantitative Trader & AI Engineer projects portfolio",
    images: "https://your-netlify-url/profile.png",
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

export default metadata;


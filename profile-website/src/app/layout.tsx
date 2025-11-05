import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Iman Yunar Noviadhi | Portfolio",
  description: "Portfolio showcasing Machine Learning, Deep Learning, and AI projects",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetMono.variable} antialiased`}>
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

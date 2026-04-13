import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore - CSS import
import "./globals.css";
import SmoothScroller from "@/components/layout/SmoothScroller";

// ChatBot disabled for planning and design phase
// import ChatBot from "@/components/layout/ChatBot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arun Sudhaveni | Full Stack Developer | AI Agent Builder",
  description: "Portfolio of Arun Sudhaveni, a Full Stack Developer and AI Agent Builder. Explore projects, skills, and get in touch!",
  icons: {
    icon: '/favicon.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-brand-primary/30 selection:text-white">
        <SmoothScroller>
          {children}
        </SmoothScroller>
        {/* ChatBot component disabled - will enable after design phase */}
      </body>
    </html>
  );
}

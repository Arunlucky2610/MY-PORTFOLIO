import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://arun-sudhaveni.dev"),
  title: {
    default: "Arun Lucky | Full Stack Developer & AI/ML Engineer",
    template: "%s | Arun Lucky",
  },
  description: "Cinematic portfolio of Arun Sudhaveni, a Full Stack Developer and AI/ML Engineer building intelligent digital products, Survey AI, analytics systems, and scalable web platforms.",
  keywords: ["Arun Sudhaveni", "Arun Lucky", "Full Stack Developer", "AI Engineer", "AI ML Engineer", "Survey AI", "Next.js portfolio"],
  authors: [{ name: "Arun Sudhaveni" }],
  creator: "Arun Sudhaveni",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arun Lucky | Full Stack Developer & AI/ML Engineer",
    description: "Explore Arun's cinematic AI portfolio, featured Survey AI project, skills, achievements, and contact links.",
    url: "/",
    siteName: "Arun Lucky Portfolio",
    images: [{ url: "/Portfolio.png", width: 1200, height: 630, alt: "Arun Lucky cinematic portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Lucky | Full Stack Developer & AI/ML Engineer",
    description: "Cinematic AI portfolio featuring Survey AI, full-stack projects, and intelligent digital products.",
    images: ["/Portfolio.png"],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased selection:bg-brand-primary/30 selection:text-white">
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.introActive=sessionStorage.getItem('arun-portfolio-entry-flow-v2-seen')==='true'?'false':'true'}catch(e){document.documentElement.dataset.introActive='false'}",
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arun Sudhaveni",
              alternateName: "Arun Lucky",
              jobTitle: "Full Stack Developer and AI/ML Engineer",
              email: "mailto:arunlucky2609@gmail.com",
              sameAs: [
                "https://github.com/Arunlucky2610",
                "https://www.linkedin.com/in/arun-sudhaveni-072a3a2b4/",
              ],
            }),
          }}
        />
        <SmoothScroller>
          {children}
        </SmoothScroller>
        {/* ChatBot component disabled - will enable after design phase */}
      </body>
    </html>
  );
}

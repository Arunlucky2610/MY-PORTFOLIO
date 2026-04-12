import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/layout/SmoothScroller";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arun Sudhaveni | Data Analyst & Backend Developer",
  description: "Portfolio of Arun Sudhaveni, a Data Analyst and Backend Developer. Highlighting projects, hackathons, and open source contributions.",
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
      </body>
    </html>
  );
}

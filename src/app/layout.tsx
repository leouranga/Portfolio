import type { Metadata } from "next";
import "./globals.css";
import "devicon/devicon.min.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio built with Next.js, TypeScript, React, and Tailwind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

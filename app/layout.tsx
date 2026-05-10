import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://henilshingala.dev"),
  title: {
    default: "Henil Shingala — Full Stack & Android Developer",
    template: "%s | Henil Shingala",
  },
  description:
    "Portfolio of Henil Shingala, a Full Stack Developer and Android Engineer specializing in Django, React, Kotlin, and AWS. Building high-performance, cinematic web and mobile experiences.",
  keywords: [
    "Henil Shingala",
    "Full Stack Developer",
    "Android Developer",
    "Kotlin Developer",
    "Django Developer",
    "Surat India Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Henil Shingala", url: "https://github.com/Henilshingala" }],
  creator: "Henil Shingala",
  openGraph: {
    title: "Henil Shingala — Full Stack & Android Developer",
    description:
      "Full Stack Developer and Android Engineer specializing in Django, React, Kotlin, and AWS.",
    url: "https://henilshingala.dev",
    siteName: "Henil Shingala Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Henil Shingala Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henil Shingala — Full Stack & Android Developer",
    description:
      "Full Stack Developer and Android Engineer specializing in Django, React, Kotlin, and AWS.",
    creator: "@HenilShingala",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import DesktopOnly from "@/components/DesktopOnly";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable} scroll-smooth scroll-pt-[90px] overflow-x-hidden`}>
      <body className="overflow-x-hidden bg-[#050816]">
        <DesktopOnly>
          {children}
        </DesktopOnly>
      </body>
    </html>
  );
}

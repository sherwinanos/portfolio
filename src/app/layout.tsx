import type { Metadata } from "next";
import "./globals.css";
import { Hind, Montserrat } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hind = Hind({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const seoName = "Sherwin Anos"
const seoTitle = "Filipino Web Designer and Developer - Sherwin Anos"
const seoDesc = "Get high-quality, affordable website design and development services from an experienced professional in the Philippines."
const seoUrl = "https://www.sherwinanos.com/"

export const metadata = {
  title: seoTitle,
  description: seoDesc,
  openGraph: {
    title: seoTitle,
    description: seoDesc,
    url: seoUrl,
    siteName: seoName,
    images: [
      {
        url: seoUrl+'assets/og.webp',
        width: 1200,
        height: 630,
        alt: seoName+'OG image',
      },
    ],
  },
  alternates: {
    canonical: seoUrl,
  },
  other: {
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": seoName,
          "url": seoUrl,
          "author": {
            "@type": "Person",
            "name": seoName
          },
          "description": seoDesc,
          "image": seoUrl+'assets/og.webp',
          "publisher": {
            "@type": "Organization",
            "name": seoName
          }
        }),
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${hind.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

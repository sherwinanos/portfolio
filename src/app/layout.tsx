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

  const title = ""
  const description = "Lorem ipsum dolor sit amet"

export const metadata: Metadata = {
  title: "Filipino Web Designer and Developer - Sherwin Anos",
  description: "Get high-quality, affordable website design and development services from an experienced professional in the Philippines.",
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

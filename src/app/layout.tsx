"use client";

import "./globals.css";
import { Hind, Montserrat } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from 'react';
import { initGA, logPageView } from '@/lib/ga';
import Script from 'next/script';
import { metadata } from './metadata'
import BackToTop from "@/components/custom/BackToTop";

const hind = Hind({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;
    initGA(measurementId);
    logPageView(); // Log initial page view

    const handleRouteChange = () => {
      logPageView();
    };

    // Listen to route changes
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <link rel="alternate" href={metadata.alternates.canonical} hrefLang="x-default" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.structuredData) }} />
        
        {/* Google Tag Manager Script */}
        <Script 
          id="gtag-js"
          src="https://www.googletagmanager.com/gtag/js?id=G-8ENNG3DMY1"
          async 
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8ENNG3DMY1');
          `}
        </Script>

        {/* GA4 Script */}
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* StatCounter Script */}
        <Script id="statcounter-script">
          {`
            var sc_project=6014434; 
            var sc_invisible=1; 
            var sc_security="d2af637a"; 
          `}
        </Script>
        <Script
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
          async
        />
      </head>
      <body className={`${montserrat.variable} ${hind.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />

        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/6014434/0/d2af637a/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}

// app/metadata.ts

const seoName = "Sherwin Anos";
const seoTitle = "Filipino Web Designer and Developer - Sherwin Anos";
const seoDesc = "Get high-quality, affordable website design and development services from an experienced professional in the Philippines.";
const seoUrl = "https://www.sherwinanos.com/";

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
        url: `${seoUrl}assets/og.webp`,
        width: 1200,
        height: 630,
        alt: `${seoName} OG image`,
      },
    ],
  },
  alternates: {
    canonical: seoUrl,
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": seoName,
    "url": seoUrl,
    "description": seoDesc,
    "author": {
      "@type": "Person",
      "name": seoName,
    },
    "image": {
      "@type": "ImageObject",
      "url": `${seoUrl}assets/og.webp`,
    },
    "publisher": {
      "@type": "Organization",
      "name": seoName,
    },
  },
};

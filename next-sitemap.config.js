// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.sherwinanos.com', // Replace with your actual site URL
  generateRobotsTxt: true, // Generates robots.txt file
  generateIndexSitemap: false, // Prevents creating sitemap-0.xml, sitemap-1.xml, etc.
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Allow all pages
      { userAgent: 'Googlebot', disallow: [
        '/admin', 
        '/*?p=', 
        '/temp/', 
        '/*.json$',
        '/*_buildManifest.js$',
        '/*_middlewareManifest.js$',
        '/*_ssgManifest.js$',
        '/*.js$',
      ]}, // Example: Block specific path for Googlebot
    ],
  },
  changefreq: 'daily', // Optional: Set the change frequency of your pages
  priority: 0.7, // Optional: Set the default priority of your pages
};

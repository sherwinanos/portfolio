// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://sherwinanos.vercel.app', // Replace with your actual site URL
  generateRobotsTxt: true, // Generates robots.txt file
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Allow all pages
      { userAgent: 'Googlebot', disallow: '/admin' }, // Example: Block specific path for Googlebot
    ],
  },
  changefreq: 'daily', // Optional: Set the change frequency of your pages
  priority: 0.7, // Optional: Set the default priority of your pages
};

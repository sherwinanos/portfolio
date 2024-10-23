"use client"

import SmoothLink from "./custom/SmoothLink"
import CalendlyWidget from "./custom/CalendlyWidget"
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import GoogleCalendar from "./custom/GoogleCalendar";

const Footer = () => {
  const navData = [
    { href: "#top", textContent: "Home" },
    { href: "#projects", textContent: "Projects" },
    { href: "#services", textContent: "Services" },
    { href: "#about", textContent: "About" },
    { href: "#contact", textContent: "Contact" },
  ]

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    href: string
  ) => {
    // Prevent default anchor behavior
    e.preventDefault();
  
    // Check if it's a section scroll (starts with #)
    if (href.startsWith("#")) {
      const targetId = href.slice(1); // Remove the `#`
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For normal route navigation, use next/router or just allow default navigation
      window.location.href = href;
    }
  };

  const year = new Date().getFullYear(); 

  return (
    <>
      <div id="contact" className="section-dark pt-20 pb-20 px-8 lg:px-0">
        <div className="container mx-auto lg:bg-secondary grid items-center grid-cols-1 lg:grid-cols-2 gap-12 lg:px-12 lg:pt-8 2xl::px-12  2xl:pb-8 text-center lg:text-left">
          <div>
            <p className="uppercase">Looking for a web designer and developer</p>
            <h2 className="mb-4">Let's Build Your Website Together</h2>
            <p className="mb-4">Ready to create a website that’s both beautiful and effective? Let’s collaborate on a project that brings your brand’s vision and goals to life.</p>
            <p>To get started, <strong>book a free consultation using the Google Calendar scheduler</strong>, and let's start crafting something amazing together!</p>
          </div>
          
          {/* <CalendlyWidget /> */}
          <div className="bg-tertiary rounded-2xl">
            <GoogleCalendar />
          </div>
        </div>
      </div>

      <footer id="footer" className="section-dark pb-8 px-8 lg:px-0">
        <div className="container mx-auto text-center">
          <div className="social flex gap-4 text-4xl items-center justify-center">
            <a href="https://www.linkedin.com/in/sherwinanos/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/sherwinanos" target="_blank"><FaGithubSquare /></a>
            {/* <a href="#" target="_blank"><FaFacebookSquare /></a> */}
          </div>

          <div className="nav flex flex-col lg:flex-row gap-4 lg:gap-2 lg:gap-6 items-center justify-center mt-6 mb-4">
            {navData.map((nav, i) => (
              <a 
                key={i} 
                href={nav.href} 
                onClick={(e) => handleScroll(e, '#'+nav.href)}
              >{nav.textContent}</a>
            ))}
          </div>
          <div className="copyright text-sm">© {year} Sherwin Anos. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
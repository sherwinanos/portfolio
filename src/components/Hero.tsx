"use client"

import Image from "next/image"
import { Link, scroller } from "react-scroll";

const Hero = () => {
  const componentData = {
    eyebrow: "Hello, I'm Sherwin Anos",
    headline: "Artistically inclined Filipino Web Designer Creating Custom Professional Websites",
    subHeadline: "I am a talented web designer and front-end developer that creates visually appealing, responsive sites designed to boost user interaction with exceptional results. Working together to create a site that suits your brand and objectives."
  }

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

  return (
    <div id="hero" className="container mx-auto lg:flex flex-row items-center justify-between">
      <div className="lg:w-1/2 text-center lg:text-left py-10 lg:py-20 px-4 lg:px-0">
        <p className="uppercase tracking-widest mb-2 opacity-80">{componentData.eyebrow}</p>
        <h1>{componentData.headline}</h1>
        <p className="pt-6 pb-8 lg:pb-12 text-xl">{componentData.subHeadline}</p>

        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-normal">
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleScroll(e, '#contact')}>Schedule a consultation today</a>
          <a href="#projects" className="btn btn-primary-outline" onClick={(e) => handleScroll(e, '#projects')}>See my recent projects</a>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:self-end">
        <Image 
          className="w-[280px] lg:w-[492px] lg:items-end"
          src="/assets/hero-sherwinanos.png" 
          alt="avatar" 
          width="492" 
          height="521" 
        />
      </div>
    </div>
  )
}

export default Hero
"use client"

import Image from "next/image"
import { TfiNewWindow } from "react-icons/tfi"

const About = () => {
  const headlineData = {
    eyebrow: "About Sherwin Anos",
    headline: "A Passion for Design and Development",
    subHeadline: "With extensive experience in website design, front-end development and SEO, I am dedicated to delivering exceptional web solutions tailored to your needs. <br><br>In 2019, I was deployed in Facebook Singapore (Meta) as a Web CMS Developer creating blogs, case studies and campaign pages for Facebook/Instagram for Business. <br><br>I've played a pivotal role in revamping websites like Cirlces.Life, Ford, Changi Airport, INSEAD, Hilton APAC, Gatorade India, OCBC Bank, CDL Residential and Shang-ri La Hotels and Resorts.",
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
    <div id="about" className="section-container section-dark">
      <div className="container px-4 lg:mx-auto lg:flex lg:flex-row-reverse lg:items-center mx-auto">
        
        <div className="lg:w-7/12 text-center lg:text-left">
          <p className="uppercase tracking-widest">{headlineData.eyebrow}</p>
          <h2 className="mt-0 mb-4 lg:mt-2 lg:mb-6">{headlineData.headline}</h2>
          <p dangerouslySetInnerHTML={{ __html: headlineData.subHeadline }} />
          

            <a href="/assets/resume.pdf" className="btn btn-icon btn-primary mt-8" target="_blank">Download resume <TfiNewWindow /></a>
            <a href="#testimonials" className="btn btn-primary-outline mt-8 ml-4" onClick={(e) => handleScroll(e, '#testimonials')}>See clients feedback</a>
        </div>
        <div className="lg:w-5/12">
          <Image 
            src="/assets/sherwinanos-facebook.webp" 
            alt="Sherwin Anos at Facebook" 
            width="492" 
            height="530"
            className="rounded-xl mt-12 lg:mt-0 w-[300px] lg:w-[492px] mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  )
}

export default About


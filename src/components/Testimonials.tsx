"use client"

import SectionHeadline from './custom/SectionHeadline'
import Image from 'next/image'

const Testimonials = () => {
  const headlineData = {
    eyebrow: "Client Experiences",
    headline: "What Clients Are Saying",
    subHeadline: "",
  }

  const testimonialsData = [
    {
      testimonial: "Sherwin revamped our website into a modern, responsive site. Beautiful design, seamless performance across devices.",
      client: "Pearlyn Yeo",
      designation: "Design & Marketing Head",
      avatar: "/assets/avatar/pearlyn-yeo.webp",
    },
    {
      testimonial: "Sherwin’s combination of design and technical skills transformed our website. We’ve seen better user engagement and faster load times.",
      client: "Dwight Rabena",
      designation: "SEO Growth Strategist",
      avatar: "/assets/avatar/dwight-rabena.webp",
    },
    {
      testimonial: "The website Sherwin delivered is both visually stunning and highly functional. Our users love the new experience, and so do we!",
      client: "Jonathan Wong",
      designation: "Lawyer | Founder",
      avatar: "/assets/avatar/jonathan-wong.webp",
    },
    
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

  return (
    <div id="testimonials" className="section-container">
      <SectionHeadline data={headlineData} />
      
      <div className="container px-4 lg:mx-auto">
        <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item, i) => (
            <div key={i} className="relative mt-12">
              <div className="absolute z-10 top-[-40px] left-[50%] translate-x-[-50%]">
                <Image 
                  src={item.avatar} 
                  alt={`${item.client} avatar`} 
                  width="80" 
                  height="80"
                  className="rounded-full border-4 border-tertiary"
                />
              </div>
              <div className="bg-tertiary text-secondary text-center pt-16 px-8 pb-8 rounded-xl">
                <p className="h6">{item.testimonial}</p>
                <p className="mt-8 uppercase">
                    <b>{item.client}</b><br/>
                    <small>{item.designation}</small>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 lg:mt-12">
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleScroll(e, '#contact')}>Book a free consultation</a>
        </div>
      </div>
    </div>
  )
}

export default Testimonials


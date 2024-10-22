"use client"

import SectionHeadline from './custom/SectionHeadline'

const Services = () => {
  const headlineData = {
    eyebrow: "My Expertise",
    headline: "Tailored Web Design & Development Services",
    subHeadline: "",
  }

  const servicesData = [
    {
      title: "Custom Website Design",
      description: "I design websites that are not only visually appealing but also optimized for performance and user experience.",
      image: "/assets/services/illustration-web.svg"
    },
    {
      title: "Responsive Front-End Development",
      description: "Using modern coding practices, I ensure your website works perfectly across all devices.",
      image: "/assets/services/illustration-responsive.svg"
    },
    {
      title: "SEO-Optimized Solutions",
      description: "My designs are built with SEO in mind, helping your site rank higher and attract more traffic.",
      image: "/assets/services/illustration-search.svg"
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
    <div id="services" className="section-container">
      <SectionHeadline data={headlineData} />
      
      <div className="container px-4 lg:mx-auto">
        <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3">
          {servicesData.map(( item, i) => (
            <div 
              key={i} 
              className={`${i % 2 === 0 ? 'bg-secondary-dark' : 'bg-secondary-darker'} rounded-lg lg:rounded-none p-6 mb-4 lg:mb-0 lg:p-8 text-center`}
            >
              <img src={item.image} alt={`${item.title} image`} className="h-[200px] lg:h-[250px] mx-auto mb-8" />
              <h4 className="h5 mb-2 text-tertiary-lightest">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 lg:mt-12">
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleScroll(e, '#contact')}>Let’s discuss your project</a>
        </div>
      </div>
    </div>
  )
}

export default Services


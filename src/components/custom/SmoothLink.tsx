"use client"

import React from 'react'

interface LinkProps {
  key: number;
  href: string;
  textContent: string;
}

const SmoothLink: React.FC<LinkProps> = ({ key, href, textContent }) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    href: string
  ) => {
    e.preventDefault();
  
    if (href.startsWith("#")) {
      const targetId = href.slice(1); // Remove the `#`
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;  // For route navigation, you can use next/router as well
    }
  };

  return (
    <a key={key} href={href} onClick={(e) => handleScroll(e, href)}>
      {textContent}
    </a>
  )
}

export default SmoothLink
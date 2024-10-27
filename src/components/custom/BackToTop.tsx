import { useEffect, useState } from 'react';
import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        aria-label="Back to top"
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] text-center rounded-full bg-primary color-tertiary cursor-pointer flex items-center justify-center"      
      >
        <FaChevronUp className="text-2xl" />
      </button>
    )
  );
};

export default BackToTop;

import { useState, useEffect } from "react";
import logo from './assets/ScrollUP.png';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 z-50 right-2 sm:right-2 md:right-2 p-3  transition-transform duration-300 hover:scale-105"
        >
          <img src={logo} alt="Scroll to top" className="w-12 h-12 sm:w-14 sm:h-14" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

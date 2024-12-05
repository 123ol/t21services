import { useState, useEffect } from 'react';
import logo from './assets/T21LOGO.svg';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add event listener to track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 flex justify-between items-center  m-auto p-6 shadow-md transition duration-300 ease-in-out ${
        scrolling ? 'bg-white/30 backdrop-blur-md' : ''
      }`}
    >
      {/* Logo */}
      <div className="font-bold text-xl m-auto text-yellow-700 px-2">
        <img src={logo} alt="Logo" className="w-14 h-14" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
          {isMobileMenuOpen ? (
            // Close SVG
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="33" height="33" rx="13" fill="#D9D9D9"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M16.5 2.75C24.0939 2.75 30.25 8.90608 30.25 16.5C30.25 24.0939 24.0939 30.25 16.5 30.25C8.90608 30.25 2.75 24.0939 2.75 16.5C2.75 8.90608 8.90608 2.75 16.5 2.75ZM21.5792 11.4208C22.1403 11.9818 22.1403 12.8914 21.5792 13.4525L18.5327 16.499L21.5792 19.5475C22.1403 20.1086 22.1403 21.0182 21.5792 21.5792C21.0182 22.1403 20.1086 22.1403 19.5475 21.5792L16.501 18.5307L13.4525 21.5792C12.8914 22.1403 11.9818 22.1403 11.4208 21.5792C10.8597 21.0182 10.8597 20.1086 11.4208 19.5475L14.4693 16.499L11.4208 13.4525C10.8597 12.8914 10.8597 11.9818 11.4208 11.4208C11.9818 10.8597 12.8914 10.8597 13.4525 11.4208L16.501 14.4673L19.5475 11.4208C20.1086 10.8597 21.0182 10.8597 21.5792 11.4208Z" fill="white"/>
            </svg>
          ) : (
            // Hamburger Menu SVG
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="29" height="29" rx="9" stroke="#DD9933"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.83594 10.4609C5.83594 9.90865 6.28365 9.46094 6.83594 9.46094H24.1693C24.7216 9.46094 25.1693 9.90865 25.1693 10.4609V10.8776C25.1693 11.4299 24.7216 11.8776 24.1693 11.8776H6.83594C6.28365 11.8776 5.83594 11.4299 5.83594 10.8776V10.4609ZM5.83594 15.2943C5.83594 14.742 6.28365 14.2943 6.83594 14.2943H24.1693C24.7216 14.2943 25.1693 14.742 25.1693 15.2943V15.7109C25.1693 16.2632 24.7216 16.7109 24.1693 16.7109H6.83594C6.28365 16.7109 5.83594 16.2632 5.83594 15.7109V15.2943ZM6.83594 19.1276C6.28365 19.1276 5.83594 19.5753 5.83594 20.1276V20.5443C5.83594 21.0966 6.28365 21.5443 6.83594 21.5443H24.1693C24.7216 21.5443 25.1693 21.0966 25.1693 20.5443V20.1276C25.1693 19.5753 24.7216 19.1276 24.1693 19.1276H6.83594Z" fill="#DD9933"/>
            </svg>
          )}
        </button>
      </div>

      {/* Nav Links for Desktop */}
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="text-gray-800 border border-yellow-500 px-4 h-fit py-2 rounded-lg hover:text-yellow-600 hover:border-yellow-600 transition duration-300 ease-in-out">
          Home
        </a>
    
        <a href="#" className="text-gray-800 border border-yellow-500 px-4 py-2 rounded-lg hover:text-yellow-600 h-fit hover:border-yellow-600 transition duration-300 ease-in-out">
          Who We Are
        </a>
        <a href="#Offer" className="text-gray-800 border border-yellow-500 px-4 py-2 rounded-lg hover:text-yellow-600 h-fit hover:border-yellow-600 transition duration-300 ease-in-out">
          What We Offer
        </a>
        <a href="#" className="text-gray-800 border border-yellow-500 px-4 py-2 rounded-lg hover:text-yellow-600 h-fit hover:border-yellow-600 transition duration-300 ease-in-out">
          Meet Our Team
        </a>
        <a href="#" className="text-gray-800 border border-yellow-500 px-4 py-2 rounded-lg hover:text-yellow-600 h-fit hover:border-yellow-600 transition duration-300 ease-in-out">
          Gallery
        </a>
        <a href="#" className="text-gray-800 border border-yellow-500 px-4 py-2 rounded-lg hover:text-yellow-600 h-fit hover:border-yellow-600 transition duration-300 ease-in-out">
          Testimony
        </a>
        <a href="#Contact" className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out">
        Contact Us
      </a>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 h-[70vh] w-full bg-white shadow-lg md:hidden rounded-br-[5rem]">
          <div className="flex flex-col items-center space-y-3  py-4">
            <a href="#home" className="text-gray-800 px-4 py-2 hover:text-yellow-600 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>
              Home
            </a>
            <hr className="bg-black h-[1px] w-[90%]"/>
            <a href="#services" className="text-gray-800  px-4 py-2 rounded-lg hover:text-yellow-600  transition duration-300 ease-in-out" onClick={toggleMobileMenu}>
              What We Do
            </a>
            <hr className="bg-black h-[1px] w-[90%]"/>
            <a href="#" className="text-gray-800  px-4 py-2 rounded-lg hover:text-yellow-600  transition duration-300 ease-in-out" onClick={toggleMobileMenu}>
              Who We Are
            </a>
            <hr className="bg-black h-[1px] w-[90%]"/>
            <a href="#Offer" className="text-gray-800  py-2 rounded-lg hover:text-yellow-600 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>
              What We Offer
            </a>
            <hr className="bg-black h-[1px] w-[90%]"/>
            <a href="#" className="text-gray-800  px-4 py-2 rounded-lg hover:text-yellow-600  transition duration-300 ease-in-out" onClick={toggleMobileMenu}>
              Meet Our Team
            </a>
            <hr className="bg-black h-[1px] w-[90%]"/>
            <a href="#" className="text-gray-800 px-4 py-2 rounded-lg hover:text-yellow-600 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>
              Gallery
            </a>
            <hr className="bg-black h-[1px] w-[90%]"/>
            <a href="#" className="text-gray-800  px-4 py-2 rounded-lg hover:text-yellow-600 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>
              Projects
            </a>
            <hr className="bg-black h-[1px] w-[90%] "/>
            <a href="#Contact" className="bg-yellow-600 text-white w-[80%] text-center px-6 py-2 rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

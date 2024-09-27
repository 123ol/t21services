import  { useState, useEffect, useRef } from 'react';
import CountUp from "react-countup";
import train from './assets/presentation_12691320 1.svg';
import recrut from './assets/computer_3174076 1.svg';
import app from './assets/innovation_8457528 1.svg';
import edu from './assets/crowdfunding_1383302 1.svg';
import arrow from './assets/Group 16.svg';
import img from './assets/Group.svg'
import card1 from './assets/risk-management_10789272 1.svg'
import card2 from './assets/career_3174338 1.svg'
import card3 from './assets/responsible_11502090 1.svg'
import card4 from './assets/pin_1535715 1.svg'
import Hcard4 from './assets/HoverDetails.svg'
import Hcard1 from './assets/Hover Details (3).svg'
import Hcard2 from './assets/Hover Details (2).svg'
import Hcard3 from './assets/HoverDetails1.png'
import call2 from './assets/Group2.png'
import call5 from './assets/Group5.png'
import call3 from './assets/Group3.png'
import call4 from './assets/Group4.png'
import popup from './assets/POPUP.svg'
import { MdPlayArrow } from "react-icons/md";
const services = [
  {
    title: "Training",
    img: train,
    description: "Get equipped for long-term performance and competitiveness in your career with our training!",
  },
  {
    title: "Recruitment",
    img: recrut,
    description: "Procure the appropriate applicants for your working staff without stress with us now!",
  },
  {
    title: "Application/Software Creation",
    img: app,
    description: "Develop easy-to-use applications that make your business activities smoother with us today.",
  },
  {
    title: "Educational Service",
    img: edu,
    description: "Acquire a perfectly tailored job for your tech skills & expertise and earn on the go.",
  },
];

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div>
    <div className="flex flex-col md:flex-row mt-[95px] " id='home'>
      <section className="bg-gradient-to-r from-[#f3f4f6] via-white to-[#feeeca] px-4 md:px-8 py-8 md:py-12 text-left md:w-1/2 genbg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          We{" "}
          <span className="decoration-4 inline-block px-4 py-2 border-2 border-[#fbbf24] rounded-full text-center">
            Connect
          </span>{" "}
          Businesses to Greatness with Technology
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          At{" "} <span className='border-b-2 border-red-600'>T21</span> {" "},we’d give you the ease you desire in growing your personal
          dreams, business workforce, and operations to the best possible level.
        </p>
        <button
          onClick={togglePopup}
          className="mt-6 bg-[#DD9933] text-white px-6 py-3 rounded-r-[2rem] font-semibold hover:bg-[#d19c1d] min-w-[240px]"
        >
          Explore
        </button>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-8 bg-gray-100 md:w-1/2 bg">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-[#ffffff] to-[#fdfdfd] rounded-t-[50px] rounded-b-[50px] text-black shadow-lg flex flex-col items-center text-center max-w-[260px] min-h-[270px] m-auto"
          >
            {/* Card Top Icon */}
            <div className="rounded-[50px] w-full flex p-2 flex-col items-center justify-center shadow-md" style={{ background: 'linear-gradient(232.28deg, #DD9933 28.19%, #191919 100.01%)' }}>
              <img src={service.img} alt={service.title} className="h-16 w-16 relative top-[-20px]" />
              <h2 className="text-[17px] font-bold text-white">{service.title}</h2>
            </div>

            {/* Card Description */}
            <div className="mt-4">
              <p className="mt-4 text-[14px] font-medium text-black px-2">{service.description}</p>

              {/* Discover More Button */}
              <button className="mt-2 text-[#DD9933] m-auto flex gap-2 font-semibold py-2 px-4  items-center">
                Discover More
                <img src={arrow} alt='arrow' className="h-10 w-10" />
              </button>
            </div>
          </div>
        ))}
      </section>

     {/* Popup */}
{isPopupOpen && (
  <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
    <div ref={popupRef} className="bg-white/5 backdrop-blur-md p-2 rounded-lg shadow-lg max-w-lg">
    <img src={popup} alt='arrow' className="h-auto w-[100%] z-[999999]" />
    </div>
  </div>
)}

    </div>
    <div className="relative w-full min-h-screen bg-gradient-to-r from-gray-100 to-white flex items-center justify-center genbg" id='services'>
      {/* Container for main content */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full px-6 py-10">
        
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">T21 services</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            We’re a UK-based multi-vertical agency that helps institutions and companies increase their unique performance and competence with IT solutions and Technologies.
          </p>
          <p className="text-gray-600 mb-6">
            We help proffer solutions to your business problems relating to recruitment needs, training necessities, outsourcing/delegation of tasks and creating software to smoothen your daily business operations.
          </p>
          
          {/* Button */}
          <div className="mt-4">
            <button className="bg-[#DD9933] flex gap-2 text-white px-4 py-3 text-sm transition" style={{ borderRadius: "45px 50px 50px 0px" }}>
              Check details about our company <MdPlayArrow  className='bg-white  text-black w-4 h-4 rounded-[50%]'/>
            </button>
          </div>
        </div>
        
        <div className="relative md:w-1/2 mt-10 md:mt-0 ">
          
        <div
  className="relative z-10 top-40 w-32 h-32 rounded-full flex items-center justify-center"
  style={{
    background: "linear-gradient(232.28deg, #DD9933 28.19%, #191919 100.01%)",
  }}
>
  <CountUp start={2} end={100} delay={0}>
    {({ countUpRef }) => (
      <div className="text-white flex flex-col items-center justify-center">
        <span
          ref={countUpRef}
          className="text-3xl font-bold"
        />
      <p className="text-sm text-white mt-1">
  Years of <br /> Experience
</p>
      </div>
    )}
  </CountUp>
</div>

          {/* Image and Result-Oriented Section */}
          <div className="relative ml-10">
            <img
              src={img}
              alt="Result Oriented"
              className=""
            />
           
          </div>
        </div>
      </div>
    </div>
    <div className="w-full py-12 bg-gradient-to-r from-white to-yellow-100 genbg" id='Offer'>
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-600">What We Offer</h2>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text max-w-[700px] m-auto text-center">
          DISCOVER WHAT T21 SERVICE CAN DO FOR YOU
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-[100px] min-h-[350px] shadow-lg text-center card1 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] h-[200px] w-[250px] p-4 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0">
    <img
      src={card1}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
      Avoid risks, increase your productivity, GROW your BUSINESS.
    </p>
  </div>

  {/* Hover Content */}
  <div className="max-w-xs mx-auto shadow-lg px-2 text-center translate-y-[100%] group-hover:translate-y-[5%] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] content absolute bottom-0 left-0 right-0" >
    {/* Icon Section */}
    <div className="flex justify-center">
      <img   src={Hcard1} alt="Icon" className="w-[100%] h-[100%]" />
    </div>
  </div>
</div>



     {/* Card 2 */}
<div className="bg-white p-6 rounded-[100px] min-h-[350px] shadow-lg text-center card2 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] h-[200px] w-[250px] p-4 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0">
    <img
      src={card2}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
      It’s your CAREER, we only help you BUILD it.
    </p>
  </div>

  {/* Hover Content */}
  <div className="max-w-xs mx-auto shadow-lg px-2 text-center translate-y-[100%] group-hover:translate-y-[5%] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] content absolute bottom-0 left-0 right-0" >
    {/* Icon Section */}
    <div className="flex justify-center">
      <img   src={Hcard2} alt="Icon" className="w-[100%] h-[100%]" />
    </div>
  </div>
</div>

{/* Card 3 */}
<div className="bg-white p-6 rounded-[100px] min-h-[350px] shadow-lg text-center card3 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] h-[200px] w-[250px] p-4 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0">
    <img
      src={card3}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
      Your READINESS with Our SERVICES = Your SUCCESS.
    </p>
  </div>

  {/* Hover Content */}
  <div className="max-w-xs mx-auto shadow-lg px-2 text-center translate-y-[100%] group-hover:translate-y-[5%] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] content absolute bottom-0 left-0 right-0" >
    {/* Icon Section */}
    <div className="flex justify-center">
      <img   src={Hcard3} alt="Icon" className="w-[100%] h-[100%]" />
    </div>
  </div>
</div>

{/* Card 4 */}
<div className="bg-white p-6 rounded-[90px] min-h-[350px] shadow-lg text-center card4 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] h-[200px] w-[250px] p-4 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0">
    <img
      src={card4}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
      Find your dream job where it’s waiting for you.
    </p>
  </div>

  {/* Hover Content */}
  <div className="max-w-xs mx-auto shadow-lg px-2 text-center translate-y-[100%] group-hover:translate-y-[5%] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] content absolute bottom-0 left-0 right-0" >
    {/* Icon Section */}
    <div className="flex justify-center">
      <img   src={Hcard4} alt="Icon" className="w-[100%] h-[100%]" />
    </div>
  </div>
</div>

     
      </div>
    </div>
<div className=" py-10 lg:py-20 px-4 lg:px-10 bg-gradient-to-r from-gray-50 to-gray-100 genbg " id='Contact'>
<h2 className="text-3xl lg:text-4xl font-bold text-[#191919] mb-4">Contact Us</h2>
<p className="lg:text-[65px] mb-8 text-[65px] font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">Contact us at your finger tip.</p>

    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
      
      {/* Contact Form */}
      <div className="w-full lg:w-1/2 bg-white shadow-2xl rounded-[50px] p-8 lg:p-[3rem]">
      

        <form className="space-y-4">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="w-full sm:w-1/2">
    <label className="block text-sm font-semibold" htmlFor="name">Name (required)</label>
    <input type="text" id="name" className="w-full p-3 border border-[#DD9933] rounded-lg mt-1 focus:ring-2 focus:ring-yellow-500" placeholder="John" required />
  </div>

  <div className="w-full sm:w-1/2">
    <label className="block text-sm font-semibold" htmlFor="email">Email Address (required)</label>
    <input type="email" id="email" className="w-full p-3 border border-[#DD9933] rounded-lg mt-1 focus:ring-2 focus:ring-yellow-500" placeholder="user@example.com" required />
  </div>
</div>

<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
  <div className="w-full sm:w-1/2">
    <label className="block text-sm font-semibold" htmlFor="phone">Phone (optional)</label>
    <input type="text" id="phone" className="w-full p-3 border border-[#DD9933] rounded-lg mt-1 focus:ring-2 focus:ring-yellow-500" placeholder="+234" />
  </div>

  <div className="w-full sm:w-1/2">
    <label className="block text-sm font-semibold" htmlFor="service">Service (required)</label>
    <select id="service" className="w-full p-3 border border-[#DD9933] rounded-lg mt-1 focus:ring-2 focus:ring-yellow-500" required>
      <option>Select Service</option>
      <option>Web Development</option>
      <option>Mobile App Development</option>
    </select>
  </div>
</div>


          <div>
            <label className="block text-sm font-semibold" htmlFor="message">Your Message</label>
            <textarea id="message" rows="4" className="w-full p-3 border border-[#DD9933] rounded-lg mt-1 focus:ring-2 focus:ring-yellow-500" placeholder="Type message"></textarea>
          </div>

          <button type="submit" className="w-[150px] bg-[#DD9933] hover:bg-yellow-600 text-white font-semibold p-3 rounded-lg">Submit</button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full lg:w-1/2 bg-white shadow-2xl min-h-[30rem] rounded-[50px] p-6 lg:p-6 mt-8 lg:mt-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="bg-cover bg-center bg-no-repeat flex flex-col items-center text-center  w-full shadow-lg rounded-[50px] pb-4">
      <img src={call3} alt='text' className='w-[100%] h-auto'/>
        <div className=' max-w-[200px] '>
        <p className="font-semibold mb-2 text-[#DD9933]">Call Us for Help!</p>
        <div className='py-[0.5rem] rounded-3xl border border-[#DD9933]'>
      <p className="text-gray-600 border-b-2 px-4 border-[#DD9933]">+44 20 3769 9081</p>
      <p className="text-gray-600  px-4  ">+44 15 1301 4078</p>
      </div>
      </div>
    </div>

   <div className="bg-cover bg-center bg-no-repeat flex flex-col items-center text-center  w-full shadow-lg rounded-[50px] pb-4">
      <img src={call2} alt='text' className='w-[100%] h-auto'/>
      <div className='px-[1rem] max-w-[250px]'>
    <p className="font-semibold text-[#DD9933]">Our Locations</p>
    <div className='py-[0.5rem] rounded-3xl border border-[#DD9933]'>
    <p className="text-gray-600 text-left border-b-2 px-4 border-[#DD9933]">Old St Lawrence School, Westminster Road, Liverpool.</p>
    <p className='text-left text-gray-600 px-4 mt-2'>L4 3TQ.</p></div>
    </div>
  </div>

  <div className="bg-cover bg-center bg-no-repeat flex flex-col items-center text-center  w-full shadow-lg rounded-[50px] pb-4">
      <img src={call5} alt='text' className='w-[100%] h-auto'/>
    <div className='px-[1rem] max-w-[200px]'>
    <p className="font-semibold text-[#DD9933]">Our Mail Address</p>
    <div className='p-[0.5rem] rounded-t-3xl  border border-[#DD9933]'>
      <p className="text-gray-600">info@starview.co.uk</p>
      </div>
      </div>
    </div>

    <div className="bg-cover bg-center bg-no-repeat flex flex-col items-center text-center  w-full shadow-lg rounded-[50px] pb-4">
      <img src={call4} alt='text' className='w-[100%] h-auto'/>
     <div className='px-[1rem] max-w-[200px]'>
     <p className="font-semibold text-[#DD9933]">Official Timing</p>
     <div className='p-[0.5rem] rounded-t-3xl border border-[#DD9933]'>
      <p className="text-gray-600">Mon-Sat 5:00 - 7:00</p>
      </div>
    </div>
    </div>
  </div>
</div>

    </div>
    </div>
    </div>
  );
};

export default Hero;
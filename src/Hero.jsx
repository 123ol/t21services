import  { useState } from 'react';
import CountUp from "react-countup";


import img from './assets/Group.svg'
import card1 from './assets/risk-management_10789272 1.svg'
import card2 from './assets/career_3174338 1.svg'
import card3 from './assets/responsible_11502090 1.svg'
import card4 from './assets/pin_1535715 1.svg'
import Hcard4 from './assets/Hover Details (3).svg'
import Hcard1 from './assets/Hover Details.svg'
import Hcard2 from './assets/Hover Details (1).svg'
import Hcard3 from './assets/Hover Details (2).svg'
import Hcard5 from './assets/hover.svg'
import call2 from './assets/Group2.png'
import call5 from './assets/Group5.png'
import call3 from './assets/Group3.png'
import call4 from './assets/Group4.png'

import { MdPlayArrow } from "react-icons/md";
import FAQ from './FAQ';


const Hero = () => {

  const [faqs, setfaqs] = useState([
    {
      question: 'WHAT DO WE DO?',
      answer: 'Through T21, individuals are trained and/or connected to their dream jobs, while helping companies and organizations achieve their business improvements and competitive strength.',
      open: true
    },
    {
      question: 'HOW DO WE GROW YOUR BUSINESS?',
      answer: 'We Create your consumer-focused system or app with us, from conception and design through delivery, for the seamless functioning of your brand.',
      open: false
    },
    {
      question: 'HOW DO WE HELP YOU BUILD YOUR CAREER?',
      answer: 'Whichever time you choose, our parts of making sure the best resources are available for you are 100% covered.',
      open: false
    },
    {
      question: 'HOW DO WE ENSURE YOUR SUCCESS?',
      answer: 'Our recruitment patterns and other modes of operations are crafted in a way that you’ll easily get results; only your consent is needed to complete the Success Cycle for you.',
      open: false
    },
    {
      question: 'HOW DO WE HELP YOU FIND YOUR DREAM JOB?',
      answer: 'Browse our catalogue, with numerous and custom jobs that best suit your field akin, to our offerings.',
      open: false
    },
    {
      question: 'WHO ARE WE?',
      answer: 'We’re a UK-based multi-vertical agency that helps institutions and companies increase their unique performance and competence with IT solutions and Technologies.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div>
  
    <div className="relative w-full min-h-screen flex items-center justify-center genbg" id='services'>
      {/* Container for main content */}
      <div className="flex flex-col md:flex-row mt-[5rem] justify-between items-center max-w-6xl gap-0 lg:gap-24 w-full px-6 py-10">
        
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl  font-bold text-gray-800 mb-4">
            Welcome to <span className="bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">T21 services</span>
          </h1>
          <p className="text-lg text-gray-600 mb-2">
          Empowering Africa’s professionals and businesses with world-class training, consultancy, and innovative solutions. At T21 Services Nigeria, we serve as the hub for our pan-African vision, bridging global opportunities and local expertise, offering tailored services to meet the unique needs of individuals and organizations across the continent.
          </p>
          <p className="text-lg text-gray-600 mb-2">
          Our MissionTo empower individuals and businesses across Africa with the skills, tools, and resources necessary to thrive in a competitive global market.
          </p>
          <p className="text-lg text-gray-600 mb-2">
          Our VisionTo be the leading provider of innovative training, consultancy, and professional development services in Africa, fostering growth and excellence that positions the continent as a global leader in diverse sectors.
          </p>
          <p className="text-lg text-gray-600 mb-2">
          Explore Our ServicesT21 Services Nigeria serves as the gateway to all T21 Services offerings, enabling seamless navigation to our global services tailored for Africa’s growing needs.
          </p>
          {/* Button */}
          <div className="mt-4">
            <button className="bg-[#DD9933] flex gap-2 text-white px-4 py-3 text-sm transition" style={{ borderRadius: "45px 50px 50px 0px" }}>
              Check details about our company <MdPlayArrow  className='bg-white  text-black w-4 h-4 rounded-[50%]'/>
            </button>
          </div>
        </div>
        
        <div className="relative md:w-1/2 mt-0 md:mt-0 h-fit">
          
        <div
  className="relative z-10 top-40 w-32 h-32 rounded-full flex items-center justify-center"
  style={{
    background: "linear-gradient(232.28deg, #DD9933 28.19%, #191919 100.01%)",
  }}
>
  <CountUp start={2} end={20} delay={0}>
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
    <div className="w-full py-12  genbg" id='Offer'>
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-600">What We Offer</h2>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text max-w-[700px] m-auto text-center">
          DISCOVER WHAT T21 SERVICE CAN DO FOR YOU
        </h1>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap gap-6 max-w-6xl m-auto px-4 justify-center">
        
        {/* Card 1 */}
        <div className="bg-white p-2 rounded-[70px] max-h-[350px] min-h-[300px] shadow-lg text-center card1 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] h-fit min-h-[150px] w-[250px] p-2 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0 items-center block">
    <img
      src={card1}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
    TRAINING
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

<div className="bg-white p-2 rounded-[70px] max-h-[350px] min-h-[300px]  shadow-lg text-center card2 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] min-h-[150px] h-fit w-[250px] p-2 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0">
    <img
      src={card1}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
    RECRUITMENT
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



     {/* Card 2 */}
<div className="bg-white p-2 rounded-[70px] max-h-[350px] min-h-[300px]  shadow-lg text-center card3 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] h-fit min-h-[150px] w-[250px] p-2 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0">
    <img
      src={card2}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
    APPLICATION/SOFTWARE DEVELOPMENT
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

{/* Card 3 */}
<div className="bg-white p-2 rounded-[70px] max-h-[350px] min-h-[300px]  shadow-lg text-center card4 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] min-h-[150px] h-fit w-[250px] p-2 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0">
    <img
      src={card3}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
    EDUCATIONAL SERVICES
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

{/* Card 4 */}
<div className="bg-white p-2 rounded-[70px] min-h-[300px]  max-h-[350px]shadow-lg text-center card5 items-center justify-center grid overflow-hidden relative group">
  {/* Upper Section */}
  <div className="bg-white/10 backdrop-blur-md rounded-[50px] min-h-[150px] h-fit w-[250px] p-2 z-10 relative transition-opacity duration-500 ease-in-out group-hover:opacity-0">
    <img
      src={card4}
      alt="Service 2"
      className="w-[70px] h-[70px] object-cover rounded-lg mb-2 m-auto"
    />
    <p className="font-semibold text-lg mb-2 text-white text-center">
    CONSULTANCY
    </p>
  </div>

  {/* Hover Content */}
  <div className="max-w-xs mx-auto shadow-lg px-2 text-center translate-y-[100%] group-hover:translate-y-[5%] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] content absolute bottom-0 left-0 right-0" >
    {/* Icon Section */}
    <div className="flex justify-center">
      <img   src={Hcard5} alt="Icon" className="w-[100%] h-[100%]" />
    </div>
  </div>
</div>

     
      </div>
    </div>
    <div className="faqs genbg">
    <p className="lg:text-5xl p-2  text-4xl text-center font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">Frequently Asked Questions</p>
    <h2 className="text-2xl lg:text-2xl font-bold text-[#191919] text-center">Quick Answers to questions you may have about T21 Services</h2>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
<div className=" py-10 lg:py-20 px-4 lg:px-10  genbg " id='Contact'>
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
      <option>Application/Software Development</option>
      <option>Educational Service</option>
      <option>Training</option>
      <option>Recruitment</option>
      <option>Consultant Service</option>
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
      <img src={call5} alt='text' className='w-[100%] h-auto'/>
    <div className='px-[1rem] max-w-[200px]'>
    <p className="font-semibold text-[#DD9933]">Our Mail Address</p>
    <div className='p-[0.5rem] rounded-t-3xl  border border-[#DD9933]'>
      <p className="text-gray-600">info@t21services.co.uk</p>
      </div>
      </div>
    </div>

    <div className="bg-cover bg-center bg-no-repeat flex flex-col items-center text-center  w-full shadow-lg rounded-[50px] pb-4">
      <img src={call4} alt='text' className='w-[100%] h-auto'/>
     <div className='px-[1rem] max-w-[200px]'>
     <p className="font-semibold text-[#DD9933]">Official Timing</p>
     <div className='p-[0.5rem] rounded-t-3xl border border-[#DD9933]'>
      <p className="text-gray-600">Mon-Sat.9:00am–6:00pm</p>
      </div>
    </div>
    </div>
   

   <div className="bg-cover bg-center bg-no-repeat flex flex-col items-center text-center  w-full shadow-lg rounded-[50px] pb-4">
      <img src={call2} alt='text' className='w-[100%] h-auto'/>
      <div className='px-[1rem] max-w-[250px]'>
    <p className="font-semibold text-[#DD9933]">Our Locations</p>
    <div className='py-[0.5rem] rounded-3xl border border-[#DD9933]'>
    <p className="text-gray-600 text-left border-b-2 px-4 border-[#DD9933]
    ">
      <span className='font-bold text-[#DD9933]'>Head office</span><br/>
      Old St Lawrence School, Westminster Road, Liverpool.L4 3TQ.</p>
    <p className='text-left text-gray-600 px-4 mt-2'> <span className='font-bold text-[#DD9933]'>ADO OFFICE</span> <br/>
    No 68, Lino building opposite Crunchies eatery, Eksuth Area Similoluwa, Ado-Ekiti</p>
    <p className='text-left text-gray-600 px-4 mt-2 border-t border-[#DD9933]'> <span className='font-bold text-[#DD9933]'>LAGOS OFFICE</span> <br/>
    ICAN Building 5th floor, Yaba Lagos, Lagos State</p></div>
    </div>
  </div>
  <div className="bg-cover bg-center bg-no-repeat flex flex-col items-center text-center  w-full shadow-lg rounded-[50px] pb-4 h-fit">
      <img src={call3} alt='text' className='w-[100%] h-auto'/>
        <div className=' max-w-[200px] '>
        <p className="font-semibold mb-2 text-[#DD9933]">Call Us for Help!</p>
        <div className='py-[0.5rem] rounded-3xl border border-[#DD9933]'>
      <p className="text-gray-600 border-b-2 px-4 border-[#DD9933]">
      <span className='font-bold text-[#DD9933]'>U.K line:</span> <br/>
        +44 20 3769 9081 <br/> +44 15 1301 4078</p>
      <p className="text-gray-600  px-4  "> 
      <span className='font-bold text-[#DD9933]'>Nigeria line:</span> <br/>08163775394<br/>
      09018095124
      </p>
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
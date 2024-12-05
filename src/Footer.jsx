
import logo from "./assets/T21LOGO.svg"
import logo1 from "./assets/icon _Facebook icon_.png"
import logo2 from "./assets/icon _circle twitterbird_.png"
import logo3 from "./assets/icon _circle twitterbird_.png"
import logo4 from "./assets/icon _circle linkedin_.png"
import icon1 from "./assets/telephone-call_3059561 1.png"
import icon2 from "./assets/mail_7699157 1.png"
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 min-h-[450px] grid items-center footbg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center m-auto">
        
        {/* Left Section - Company Info */}
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="Company Logo" className="mb-4 w-[50px]" /> {/* Add your company logo */}
          <p className="mb-4 text-white w-[350px]">
          We’re a UK-based multi-vertical agency that helps institutions and companies increase their unique performance and competence with IT solutions and Technologies.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-white">
            <img src={logo1} alt="Company Logo" className="mb-4 w-[30px]" />
            </a>
            <a href="#" className="text-white">
            <img src={logo2} alt="Company Logo" className="mb-4 w-[30px]" />
            </a>
            <a href="#" className="text-white">
            <img src={logo3} alt="Company Logo" className="mb-4 w-[30px]" />
            </a>
            <a href="#" className="text-white">
            <img src={logo4} alt="Company Logo" className="mb-4 w-[30px]" />
            </a>
          </div>
        </div>
        
        {/* Right Section - Quick Links and Official Info */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          
          {/* Quick Links */}
          <div className="">
            <h3 className="text-yellow-500 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 max-w-[250px]">
              <li className='py-2'><a href="#" className="text-white">General Enquiry</a></li>
              <hr/>
              <li className='py-2'><a href="#" className="text-white">Training</a></li>
              <hr/>
              <li className='py-2'><a href="#" className="text-white">Recruitment</a></li>
              <hr/>
              <li className='py-2'><a href="#" className="text-white">Application/Software Development</a></li>
              <hr/>
              <li className='py-2'><a href="#" className="text-white">Earn With Us</a></li>
            </ul>
          </div>

          {/* Official Info */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-[35px] w-[300px]">
            <h3 className="text-yellow-500 font-semibold mb-4">Official Info</h3>
          
            <ul className="space-y-4">
              <li className='py-2 flex gap-4 '>
              <img src={icon1} alt="Company Logo" className="w-[40px] mt-2 h-[40px]  flex items-center" />
              <div className=''>
                <span className="block text-gray-400">London</span>
                <span className="block text-white">020 3375 2061</span>
                </div>
              </li>
              <hr/>
              <li className='py-2 flex gap-4 '>
              <img src={icon1} alt="Company Logo" className="w-[40px] mt-2 h-[40px]  flex items-center"/>
              <div className=''>
                <span className="block text-gray-400">Manchester</span>
                <span className="block text-white">0151 215 4873</span>
                </div>
              </li>
              <hr/>
              <li className='py-2 flex gap-4 '>
              <img src={icon2} alt="Company Logo" className="w-[40px] mt-2 h-[40px]  flex items-center" />
              <div className=''>
                <span className="block text-gray-400">Email</span>
                <span className="block text-white">info@xyzservices.co.uk</span></div>
              </li>
              <hr/>
            </ul>
          </div>

        </div>
      </div>
      <hr className='mt-8'/>
      <p className='text-center mt-2'>© 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;

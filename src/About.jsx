import React from 'react';
import about from './assets/Frame 37057.png';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Intro Section */}
        <div className="flex flex-col lg:flex-row mt-12">
          <div className="text-left w-full lg:w-1/2 mt-12 space-y-4">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">
              About T21 Services Nigeria
            </h2>
            <p className="text-xl font-bold text-gray-700">
              Developing People. Transforming Institutions. Driving Africa’s Future.
            </p>
            <p className="text-lg text-gray-700">
              T21 Services Nigeria is the West African hub of the globally recognised T21 Services brand, advancing Africa’s growth through cutting-edge training, strategic consultancy, digital transformation, and enterprise solutions. We are committed to delivering impactful services that blend local insight with global best practices, empowering individuals, businesses, and public institutions to compete confidently in today’s knowledge-driven economy.
            </p>
            <p className="text-lg text-gray-700">
              From upskilling youth to advising institutions, from developing scalable software to matching talent with opportunity — we serve as a trusted partner in Africa’s development journey.
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-extrabold">Who We Are</span><br />
              We specialise in:<br />
              • Training & Capacity Building<br />
              • Strategic Consultancy & Business Advisory<br />
              • Recruitment & Workforce Development<br />
              • Application & Software Development<br />
              • Digital Transformation & Innovation Services<br />
              • Educational & Institutional Support<br />
              Our solutions are designed to be flexible, accessible, and results-focused—delivered both in-person and virtually to serve clients wherever they are across Nigeria and the continent.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 w-full h-fit flex justify-center lg:justify-end lg:w-1/2">
            <img
              src={about}
              alt="T21 Services Nigeria Team"
              className="rounded-lg shadow-lg h-[30rem] object-cover max-w-full"
            />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="mt-12">
          <div className="border-2 border-[#DD9933] rounded-[2rem] shadow-md">
            <div className="flex flex-col lg:flex-row items-start p-6">
              {/* Our Vision */}
              <div className="flex-1 pr-0 lg:pr-6 mb-6 lg:mb-0">
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">
                  Our Vision
                </h3>
                <p className="mt-2 text-lg text-gray-700">
                  To be a globally respected platform that delivers transformative education, enterprise innovation, and career development solutions, helping individuals and organisations unlock their highest potential.
                </p>
                <p className="mt-2 text-lg text-gray-700">
                  We envision a future where African talent and institutions lead the world in performance, innovation, and social impact.
                </p>
              </div>

              {/* Divider Line */}
              <div className="border-l-2 border-[#DD9933] lg:min-h-[200px] mb-6 lg:mb-0"></div>

              {/* Our Mission */}
              <div className="flex-1 pl-0 lg:pl-6">
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">
                  Our Mission
                </h3>
                <p className="mt-2 text-lg text-gray-700">
                  To train, empower, and connect individuals with meaningful opportunities—while supporting organisations to achieve their goals through high-impact consulting, digital tools, and talent solutions.
                </p>
                <p className="mt-2 text-lg text-gray-700">
                  We drive personal and professional growth through practical training, hands-on experience, and real-world application, ensuring our clients don’t just learn—they thrive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className="p-6 border-2 border-[#DD9933] rounded-[2rem] shadow-md inline-block">
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">
              Want to Become a Tutor?
            </h3>
            <p className="mt-2 text-lg text-gray-700">We can work together</p>
            <Link to="/contact">
            <button
              className="font-bold mt-4 px-6 py-2 bg-gradient-to-r from-[#DD9933] to-[#191919] text-white rounded-md shadow-md hover:bg-[#c78a2e] focus:outline-none focus:ring-2 focus:ring-[#DD9933] focus:ring-offset-2"
              aria-label="Contact T21 Services to become a tutor"
            >
              Contact Us
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
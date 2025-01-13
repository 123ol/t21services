import about from './assets/Frame 37057.png';

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 genbg">
        {/* Title and Intro Section */}
        <div className="flex flex-col lg:flex-row mt-12 genbg">
          <div className="text-left w-full lg:w-1/2 mt-12">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">ABOUT T21</h2>
            <p className="mt-4 text-gray-700 text-lg ">
            Who We AreT21 Services Nigeria is the primary branch of the globally recognized T21 Services, dedicated to Africa’s development. We specialize in training, consultancy, capacity building, recruitment, digital transformation, software and application development, and education services, offering cutting-edge solutions tailored to the unique needs of the Nigerian and African markets.   <br/> Our expertise combines local relevance with global standards, ensuring that every service we offer transforms careers, businesses, and communities.
            </p>
            <p className="mt-4 text-gray-700 text-lg ">
              Our programs are available as face-to-face and virtual training, ensuring that your training goals are met no matter where you are. Professionals create our programs to help institutions and companies increase personal competencies and skills, which are vital instruments for long-term corporate growth and improvement.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 w-full h-fit flex justify-center lg:justify-end lg:w-1/2">
            <img
              src={about}
              alt="About T21"
              className="rounded-lg shadow-lg h-[30rem] object-cover max-w-full"
            />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="mt-12">
          <div className="border-2 border-[#DD9933] rounded-[2rem]  shadow-md">
            <div className="flex flex-col lg:flex-row items-start p-6">
              {/* Our Vision */}
              <div className="flex-1 pr-0 lg:pr-6 mb-6 lg:mb-0">
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">OUR VISION</h3>
                <p className="mt-2 text-gray-700 text-lg">
                  To be a world-wide recognized platform that delivers high-quality training and teaching for companies and individuals to help people realize their dream goals.
                </p>
                <p className="mt-2 text-gray-700 text-lg">
                  Making work in the business space for both institutions and individuals simpler, better, and more efficient through training.
                </p>
              </div>

              {/* Divider Line */}
              <div className="border-l-2 border-[#DD9933] lg:min-h-[200px] mb-6 lg:mb-0"></div>

              {/* Our Mission */}
              <div className="flex-1 pl-0 lg:pl-6">
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">OUR MISSION</h3>
                <p className="mt-2 text-gray-700 text-lg">
                  Through T21, individuals are trained and connected to available roles, helping companies achieve their organizational goals.
                </p>
                <p className="mt-2 text-gray-700 text-lg">
                  With us, individuals can enhance their capability via hands-on execution, followed by practical work experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className="p-6 border-2 border-[#DD9933] rounded-[2rem] shadow-md inline-block">
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">WANT TO BECOME A TUTOR?</h3>
            <p className="mt-2 text-gray-700 text-lg">We can work together</p>
            <button className="font-bold mt-4 px-6 py-2 bg-gradient-to-r from-[#DD9933] to-[#191919] text-white rounded-md shadow-md hover:bg-orange-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

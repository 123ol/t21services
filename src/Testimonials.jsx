import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import img from "./assets/img1.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Awesome Coding",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: img,
      name: "Person Name",
      description: "Description",
    },
    {
      id: 2,
      quote: "Great Experience",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: img,
      name: "John Doe",
      description: "Client",
    },
    {
      id: 3,
      quote: "Exceptional Work",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: img,
      name: "Jane Smith",
      description: "Business Owner",
    },
    {
      id: 4,
      quote: "Very Professional",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: img,
      name: "Mark Lee",
      description: "Freelancer",
    },
  ];

  return (
    <div className="py-40 px-8 text-black">
      {/* Section Header */}
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">What Clients Say</h1>
      </header>

      {/* Swiper Component */}
      <Swiper
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={false} // Prevents looping to avoid more slides than expected
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="w-full sm:w-[450px] md:w-[500px] lg:w-[600px] m-auto p-6 border-2 border-[#DD9933] rounded-[2rem]  shadow-lg">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-yellow-400 text-4xl mr-4" />
                <h2 className="text-2xl font-semibold  md:text-4xl bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">{testimonial.quote}</h2>
              </div>
              <p className="text-gray-800 text-sm mb-4">{testimonial.text}</p>
              <div className="flex space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 text-lg" />
                  ))}
              </div>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <span className="block text-lg font-bold text-yellow-400">
                    {testimonial.name}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {testimonial.description}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
  .swiper-button-next,
  .swiper-button-prev {
    color: #ffcc00; /* Change to your desired color */
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #ff9900; /* Optional: Change color on hover */
  }
`}</style>
    </div>
  );
};

export default Testimonials;

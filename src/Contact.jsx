import { useState } from "react";
import emailjs from '@emailjs/browser';
import img from "./assets/Frame 37055.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    document: null,
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner when form is submitted
    try {
      // Send user's message to the company and the newsletter in parallel
      const emailPromises = [
        emailjs.send(
          "service_a85y0g9", // Replace with your EmailJS service ID
          "template_xcauuzq", // Replace with your EmailJS template ID
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          },
          "Rd8js9KGNOoWKUbmU" // Replace with your EmailJS user ID
        ),
      ];

      // Wait for all promises to resolve
      await Promise.all(emailPromises);

      // Show success alert
      setAlertMessage("Your message has been sent successfully");
      setAlertVisible(true);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        document: null,
      });
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("An error occurred. Please try again.");
      setAlertVisible(true);
    } finally {
      setLoading(false); // Hide loading spinner after operation is complete

      // Hide alert after 5 seconds
      setTimeout(() => {
        setAlertVisible(false);
      }, 5000);
    }
  };

  return (
    <div className="relative flex flex-col gap-10 md:flex-row items-center justify-between max-w-[1500px] mx-auto py-40 px-8 genbg">
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Custom Spinner */}
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      {/* Left Section: Form */}
      <div className="space-y-6">
        <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">
          WANT TO PARTNER WITH US?
        </h1>

        {/* Alert Box */}
        {alertVisible && (
          <div
            className={`p-4 rounded-lg text-white text-center ${
              alertMessage.includes("successfully") ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {alertMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:rounded-[100px] rounded-3xl h-fit w-full max-w-[700px] md:w-[100%] p-8 shadow-lg md:p-16"
        >
          <input
            type="text"
            name="name"
            placeholder="Name (required)"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address (required)"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Service</option>
            <option value="service1">Training</option>
            <option value="service2">Application/software Development</option>
            <option value="service3">Recruitment</option>
            <option value="service4">Educational Services</option>
            <option value="service5">Consultancy</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <input
            type="file"
            name="document"
            onChange={handleChange}
            className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#DD9933] to-[#191919] text-white font-bold py-3 rounded-lg text-xl transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section: Graphic */}
      <div className="hidden md:flex items-center justify-center w-full md:w-1/2">
        <img src={img} alt="Illustration" className="w-full" />
      </div>

      {/* Spinner CSS */}
      <style jsx>{`
        .spinner {
          width: 70.4px;
          height: 70.4px;
          --clr: rgb(247, 197, 159);
          --clr-alpha: rgb(247, 197, 159,.1);
          animation: spinner 1.6s infinite ease;
          transform-style: preserve-3d;
        }

        .spinner > div {
          background-color: var(--clr-alpha);
          height: 100%;
          position: absolute;
          width: 100%;
          border: 3.5px solid var(--clr);
        }

        .spinner div:nth-of-type(1) {
          transform: translateZ(-35.2px) rotateY(180deg);
        }

        .spinner div:nth-of-type(2) {
          transform: rotateY(-270deg) translateX(50%);
          transform-origin: top right;
        }

        .spinner div:nth-of-type(3) {
          transform: rotateY(270deg) translateX(-50%);
          transform-origin: center left;
        }

        .spinner div:nth-of-type(4) {
          transform: rotateX(90deg) translateY(-50%);
          transform-origin: top center;
        }

        .spinner div:nth-of-type(5) {
          transform: rotateX(-90deg) translateY(50%);
          transform-origin: bottom center;
        }

        .spinner div:nth-of-type(6) {
          transform: translateZ(35.2px);
        }

        @keyframes spinner {
          0% {
            transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
          }

          50% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
          }

          100% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;

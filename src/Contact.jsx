import { useState } from "react";
import img from "./assets/Frame 37055.png"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Integration pending)");
  };

  return (
    <div className="flex flex-col gap-10 md:flex-row items-center justify-between max-w-[1500px]  mx-auto py-40 px-8 genbg">
      {/* Left Section: Form */}
      <div className=" space-y-6 ">
        <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text">
          WANT TO PARTNER WITH US?
        </h1>
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
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
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
        <img
          src={img}
          alt="Illustration"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Contact;

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import ScrollToTop from './ScrollToTop';
import Footer from "./Footer"
import  ScrollToTopButton from './ScrollToTopButton'
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route

import './App.css';
import Term from "./Term";
import Contact from "./Contact";


function App() {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Hero />} />
        <Route path="/WhoWeAre" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/term" element={<Term />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <ScrollToTopButton />
      <Footer/>
    </div>
  );
}

export default App;

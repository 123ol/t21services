import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer"
import  ScrollToTopButton from './ScrollToTopButton'
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
    
      </Routes>
      <ScrollToTopButton />
      <Footer/>
    </>
  );
}

export default App;

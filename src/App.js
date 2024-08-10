import Home from './Pages/Homepage/Homepage'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Aerosol from './Pages/Aerosol_Separation_Capture/Aerosol';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/ASP" element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/aerocapture' element={<Aerosol/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
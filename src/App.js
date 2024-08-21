import Home from './Pages/Homepage/Homepage'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Aerosol from './Pages/AerosolCapture/Aerosol_Separation_Capture/Aerosol';
import BatterySafety from './Pages/Battery/BatterySafety/main';
import BatteryThermalManagement from './Pages/Battery/BatteryThermal/main';
import BatteryThermalDetection from './Pages/Battery/BatteryThermalDetection/main';

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
          <Route path='/batterysafety' element={<BatterySafety/>} />
          <Route path='/battery-thermal-management' element={<BatteryThermalManagement/>} />
          <Route path='/battery-thermal-runaway-detection-prevention' element={<BatteryThermalDetection/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
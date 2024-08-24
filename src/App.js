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
import Optical from './Pages/Instrumentation/Optical-Instrumemntation/optical';
import Morphology from './Pages/Instrumentation/Morphology/main';
import Sedimentation from './Pages/Instrumentation/Sedimentation/page';
import Polarized from './Pages/Instrumentation/PolarizedScattering/page';
import AerosolConcentration from './Pages/AerosolCapture/AerosolConcentration/page';
import Electrodynamic from './Pages/AerosolCapture/ElectrodynamicField/page';
import DustMitigation from './Pages/AerosolCapture/DustMitigation/page';
import Products from './Pages/Products&Facilities/Products/page';

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
          <Route path='/optical-instrumentation' element={<Optical/>} />
          <Route path='/morphology-characterization-optical-extinction-spectroscopy' element={<Morphology/>} />
          <Route path='/sedimentation-based-particle-sizing' element={<Sedimentation />} />
          <Route path='/polarized-light-scattering' element={<Polarized />} />
          <Route path='/aerosol-concentration' element={<AerosolConcentration />} />
          <Route path='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field' element={<Electrodynamic />} />
          <Route path='/dust-mitigation' element={<DustMitigation />} />
          <Route path='/products-services' element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
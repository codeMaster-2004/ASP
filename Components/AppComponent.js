import Home from '../pages/Homepage/Homepage'
import Navbar from './Navbar/Navbar'
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './Footer/Footer';
import About from '../pages/About/About';
import ContactUs from '../pages/ContactUs/ContactUs';
import Aerosol from '../pages/AerosolCapture/Aerosol_Separation_Capture/Aerosol';
import BatterySafety from '../pages/Battery/BatterySafety/main';
import BatteryThermalManagement from '../pages/Battery/BatteryThermal/main';
import BatteryThermalDetection from '../pages/Battery/BatteryThermalDetection/main';
import Optical from '../pages/Instrumentation/Optical-Instrumemntation/optical';
import Morphology from '../pages/Instrumentation/Morphology/main';
import Sedimentation from '../pages/Instrumentation/Sedimentation/page';
import Polarized from '../pages/Instrumentation/PolarizedScattering/page';
import AerosolConcentration from '../pages/AerosolCapture/AerosolConcentration/page';
import Electrodynamic from '../pages/AerosolCapture/ElectrodynamicField/page';
import DustMitigation from '../pages/AerosolCapture/DustMitigation/page';
import Products from '../pages/Products&Facilities/Products/page';
import Facilities from '../pages/Products&Facilities/Facilities/page';
import Clients from '../pages/Clients/page';
import ScrollToTop from '../src/Backend/Scroll';



function AppContent() {
    // useScrollToTop();
    return (
      <>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="" element={<Navigate replace to="ASP" />} />
          <Route path="ASP" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="aerocapture" element={<Aerosol />} />
          <Route path="batterysafety" element={<BatterySafety />} />
          <Route path="battery-thermal-management" element={<BatteryThermalManagement />} />
          <Route path="battery-thermal-runaway-detection-prevention" element={<BatteryThermalDetection />} />
          <Route path="optical-instrumentation" element={<Optical />} />
          <Route path="morphology-characterization-optical-extinction-spectroscopy" element={<Morphology />} />
          <Route path="sedimentation-based-particle-sizing" element={<Sedimentation />} />
          <Route path="polarized-light-scattering" element={<Polarized />} />
          <Route path="aerosol-concentration" element={<AerosolConcentration />} />
          <Route path="battery-thermal-runaway-numerical-simulation-of-electrodynamic-field" element={<Electrodynamic />} />
          <Route path="dust-mitigation" element={<DustMitigation />} />
          <Route path="products-services" element={<Products />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="clients" element={<Clients />} />
        </Routes>
        <Footer />
      </>
    );
}

export default AppContent;
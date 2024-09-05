import Home from './Pages/Homepage/Homepage'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import { AdvancedRouter, CustomLink, CustomNavLink } from './AdvancedRouter';
import Footer from './Components/Footer/Footer';
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
import Facilities from './Pages/Products&Facilities/Facilities/page';
import Clients from './Pages/Clients/page';
import useScrollToTop from './Backend/Scroll';
// import CustomLink from './Components/CustomLink/CustomeAtt';

// const RouterComponent = process.env.REACT_APP_USE_HASH_ROUTER === 'true' ? HashRouter : Router;

// const routes = [
//   { path: "/ASP", element: <Home /> },
//   { path: "/about", element: <About /> },
//   { path: "/contact-us", element: <ContactUs /> },
//   { path:'/aerocapture', element:<Aerosol/>},
//   { path:'/batterysafety', element: <BatterySafety/>},
//   { path:'/battery-thermal-management', element: <BatteryThermalManagement/>},
//   { path:'/battery-thermal-runaway-detection-prevention', element: <BatteryThermalDetection/>},
//   { path:'/optical-instrumentation', element: <Optical/>},
//   { path:'/morphology-characterization-optical-extinction-spectroscopy', element: <Morphology/>},
//   { path:'/sedimentation-based-particle-sizing', element: <Sedimentation />},
//   { path:'/polarized-light-scattering', element: <Polarized />},
//   { path:'/aerosol-concentration', element: <AerosolConcentration />},
//   { path:'/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field', element: <Electrodynamic />},
//   { path:'/dust-mitigation', element: <DustMitigation />},
//   { path:'/products-services', element: <Products />},
//   { path:'/facilities', element: <Facilities />},
//   { path:'/clients', element: <Clients />}
// ];

// const Navbar = ({ CustomLink, CustomNavLink }) => (
//   <nav>
//     <CustomNavLink to="/ASP">Home</CustomNavLink>
//     <CustomNavLink to="/about">About</CustomNavLink>
//     <CustomLink to="https://example.com">External Link</CustomLink>
    
//   </nav>
// );

// AppContent component that contains all the routing logic
function AppContent() {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="ASP" element={<Home />} /> */}
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
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/clients' element={<Clients />} />
      </Routes>
      <Footer />
    </>
  );
}

// Main App component
function App() {
  // useScrollToTop();
  return (
    <HashRouter>
      <div className='App'>
        <AppContent />
      </div>
    </HashRouter>
  );
}

export default App;
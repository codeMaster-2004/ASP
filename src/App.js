import Home from './Pages/Homepage/Homepage'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/ASP" element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
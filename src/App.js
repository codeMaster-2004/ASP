import Home from './Pages/Homepage/Homepage'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
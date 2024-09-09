// import Home from './Pages/Homepage/Homepage'
import './App.css';
// import Navbar from './Components/Navbar/Navbar'
import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppContent from './AppContent';

// Main App component
function App() {
  // useScrollToTop();
  return (
    <HashRouter >
      <div className='App'>
        <AppContent />
      </div>
    </HashRouter>
  );
}

export default App;
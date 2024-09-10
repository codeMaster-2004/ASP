// import Home from './Pages/Homepage/Homepage'
// import './App.css';
// import Navbar from './Components/Navbar/Navbar'
import React from 'react';
const HashRouter = dynamic(
  () => import('react-router-dom').then((mod) => mod.HashRouter),
  { ssr: false }
);
import AppContent from './AppComponent';
import dynamic from 'next/dynamic';

// Main App component
function App({children}) {
  // useScrollToTop();
  return (
    // <React.Fragment>
      <HashRouter >
        <div className='App'>
          <AppContent />
          {children}
        </div>
      </HashRouter>
    // </React.Fragment>
  );
}

export default App;
import React, { useEffect } from 'react';
import './page.css';

export default function Main() {
  useEffect(() => {
    // Typing effect logic
    const text = "Analytical Scientific Products";
    const typingElement = document.getElementById("typing-text");
    let index = 0;
    
    typingElement.textContent = '';
  
    function type() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        timeoutId = setTimeout(type, 100); // Adjust the typing speed here
      }
    }
  
    let timeoutId = setTimeout(type, 100);
  
    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className="main-container">
      <div className='homepage-picture'>
        <div className='homepage-text'>
          <h1 id='typing-text'></h1> {/* Typing text will be filled by JS */}
          <h6>Pioneering Protection for Your Products.</h6>
        </div>
      </div>
    </div>
  );
}

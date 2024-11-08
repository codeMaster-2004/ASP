import React, { useEffect } from 'react';
import styles from './page.module.css'; 

export default function Main() {
  useEffect(() => {
    // Typing effect logic
    const text = "Pioneering protection for your products.";
    const typingElement = document.getElementById("typing-text");
    let index = 0;
    
    typingElement.textContent = '';
  
    function type() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        timeoutId = setTimeout(type, 55); // Adjust the typing speed here
      }
    }
  
    let timeoutId = setTimeout(type, 80);
  
    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className={styles.main_container}>
      <div className={styles.homepage_picture}>
        <div className={styles.homepage_text}>
          <h1>Analytical Scientific Products</h1> {/* Typing text will be filled by JS */}
          <h6 id='typing-text'></h6>
        </div>
      </div>
    </div>
  );
}

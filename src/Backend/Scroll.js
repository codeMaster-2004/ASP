import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      console.log('ScrollToTop triggered for path:', pathname);
      
      // Method 1: Immediate scroll
      window.scrollTo(0, 0);
      
      // Method 2: Smooth scroll
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Method 3: Force scroll after a slight delay
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        console.log('Forced scroll executed');
      }, 100);
      
      // Method 4: Use requestAnimationFrame for smoother scrolling
      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      };
      scrollToTop();

      prevPathRef.current = pathname;

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop(delay = 100) {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [pathname, delay]);
}

export default useScrollToTop;
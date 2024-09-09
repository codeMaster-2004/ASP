import '../global.css';
import '../App.css';  // Import App.css here
import App from '../App'  // Make sure this path is correct
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
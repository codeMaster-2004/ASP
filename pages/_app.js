import '../App.css';     // Adjust path if needed
import '../global.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicHashRouter = dynamic(
  () => import('react-router-dom').then((mod) => mod.HashRouter),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DynamicHashRouter>
      <div className='App'>
        <Component {...pageProps} />
      </div>
    </DynamicHashRouter>
  );
}

export default MyApp;
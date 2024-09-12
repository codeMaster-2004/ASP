import '@fortawesome/fontawesome-svg-core/styles.css';
import '../src/App.css';     // Adjust path if needed
import '../src/global.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { config } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'; // Corrected import

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(fas, fab);

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
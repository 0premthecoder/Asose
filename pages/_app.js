import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
      setHydrated(true);
  }, []);
  if (!hydrated) {
      // Returns null on first render, so the client and server match
      return null;
  }
  return <Component {...pageProps} />
}

export default MyApp

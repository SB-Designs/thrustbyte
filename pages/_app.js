import Head from 'next/head';
import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Thrustbyte</title> {/* Optional: Set default title */}
      </Head>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

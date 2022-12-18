import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NextNProgress color="#777777" startPosition={0.3} stopDelayMs={200} height={5} options={{ showSpinner: false }} showOnShallow={true} />
      <Navbar />
      <div className="py-[4rem]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;

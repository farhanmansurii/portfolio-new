import '../styles/globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col min-h-screen'>

    <Navbar/>
    <div className="py-[4rem]">
      <Component {...pageProps} />
    </div>
    <Footer/>
    </div>
  );
}

export default MyApp;

import dynamic from "next/dynamic";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextNProgress
        color="#777777"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        options={{ showSpinner: false }}
        showOnShallow={true}
      />

      <Navbar />
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

import BackToTop from "../components/common/backToTop";
import Footer from "../components/common/footer";
import TopBar from "../components/topBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
      <BackToTop />
      <Footer />
    </>
  );
}

export default MyApp;

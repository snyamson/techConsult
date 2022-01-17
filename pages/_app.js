import BackToTop from "/components/common/backToTop";
import Footer from "/components/common/footer";
import TopBar from "/components/topBar";
import NavBar from "/components/common/navBar";
import "../styles/globals.css";
import Layout from "/components/common/layout";

function MyApp({ Component, pageProps }) {
  return (
    // <>
    //   <TopBar />
    //   <NavBar />
    //   <Component {...pageProps} />
    //   <BackToTop />
    //   <Footer />
    // </>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import Blog from "../components/blog";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Modal from "../components/common/modal";
import Features from "../components/features";
import Services from "../components/services";
import TopBar from "../components/topBar";
import BackToTop from "../components/common/backToTop";
import Brand from "../components/brand";
import Spinner from "../components/common/spinner";
import Quote from "../components/quote";

const Home = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <TopBar />
      <NavBar />
      <Modal />
      <Brand />
      <Features />
      <Services />
      <Quote />
      <Blog />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;

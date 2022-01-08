import Blog from "/components/blog";
import NavBar from "/components/common/navBar";
import Modal from "/components/common/modal";
import Features from "/components/features";
import Services from "/components/services";
import Brand from "/components/brand";
import Spinner from "/components/common/spinner";
import Quote from "/components/quote";

const Home = () => {
  return (
    <div>
      {/* <Spinner /> */}

      <NavBar />
      <Modal />
      <Brand />
      <Features />
      <Services />
      <Quote />
      <Blog />
    </div>
  );
};

export default Home;

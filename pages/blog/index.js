import BlogListing from "../../components/blogListing";
import Header from "../../components/common/Header";
import SideBar from "../../components/sideBar";

const Index = () => {
  return (
    <>
      <Header pageName="Blog" />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <BlogListing />
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

import Layout from "/components/common/layout";
import NavBar from "/components/common/navBar";
import BlogListing from "/components/blogListing";
import SideBar from "/components/sideBar";
import { useState } from "react";

const Index = () => {
  const [title, setName] = useState("ama");

  return (
    <>
      <NavBar header />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {/* <BlogListing />
            <SideBar /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

// Index.getLayout = function getLayout(page) {
//   return <Layout title={title}>{page}</Layout>;
// };

/* eslint-disable @next/next/no-img-element */

import BlogItem from "./blogItem";

/* eslint-disable @next/next/no-html-link-for-pages */
const Blog = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
          <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
        </div>
        <div className="row g-5">
          <BlogItem col="col-lg-4" />
          <BlogItem col="col-lg-4" />
          <BlogItem col="col-lg-4" />
        </div>
      </div>
    </div>
  );
};

export default Blog;

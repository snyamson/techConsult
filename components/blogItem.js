/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const BlogItem = () => {
  return (
    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
      <div className="blog-item bg-light rounded overflow-hidden">
        <div className="blog-img position-relative overflow-hidden">
          <img
            className="img-fluid"
            src="../assets/img/blog-3.jpg"
            alt="blog"
          />
          <Link href="/">
            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4">
              Web Design
            </a>
          </Link>
        </div>
        <div className="p-4">
          <div className="d-flex mb-3">
            <small className="me-3">
              <i className="far fa-user text-primary me-2"></i>John Doe
            </small>
            <small>
              <i className="far fa-calendar-alt text-primary me-2"></i>01 Jan,
              2045
            </small>
          </div>
          <h4 className="mb-3">How to build a website</h4>
          <p>
            Dolor et eos labore stet justo sed est sed sed sed dolor stet amet
          </p>
          <Link href="/">
            <a className="text-uppercase">
              Read More <i className="bi bi-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

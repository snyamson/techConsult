/* eslint-disable @next/next/no-html-link-for-pages */

/* eslint-disable @next/next/no-img-element */

import Pagination from "../components/common/pagination";

const BlogListing = () => {
  return (
    <div className="col-lg-8">
      <div className="row g-5">
        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img
                className="img-fluid"
                src="assets/img/blog-1.jpg"
                alt="blog"
              />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="/"
              >
                Web Design
              </a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2"></i>John Doe
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2"></i>01
                  Jan, 2045
                </small>
              </div>
              <h4 className="mb-3">How to build a website</h4>
              <p>
                Dolor et eos labore stet justo sed est sed sed sed dolor stet
                amet
              </p>
              <a className="text-uppercase" href="">
                Read More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img
                className="img-fluid"
                src="assets/img/blog-2.jpg"
                alt="blog"
              />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="/"
              >
                Web Design
              </a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2"></i>John Doe
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2"></i>01
                  Jan, 2045
                </small>
              </div>
              <h4 className="mb-3">How to build a website</h4>
              <p>
                Dolor et eos labore stet justo sed est sed sed sed dolor stet
                amet
              </p>
              <a className="text-uppercase" href="">
                Read More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img
                className="img-fluid"
                src="assets/img/blog-3.jpg"
                alt="blog"
              />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="/"
              >
                Web Design
              </a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2"></i>John Doe
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2"></i>01
                  Jan, 2045
                </small>
              </div>
              <h4 className="mb-3">How to build a website</h4>
              <p>
                Dolor et eos labore stet justo sed est sed sed sed dolor stet
                amet
              </p>
              <a className="text-uppercase" href="">
                Read More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img
                className="img-fluid"
                src="assets/img/blog-1.jpg"
                alt="blog"
              />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="/"
              >
                Web Design
              </a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2"></i>John Doe
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2"></i>01
                  Jan, 2045
                </small>
              </div>
              <h4 className="mb-3">How to build a website</h4>
              <p>
                Dolor et eos labore stet justo sed est sed sed sed dolor stet
                amet
              </p>
              <a className="text-uppercase" href="">
                Read More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img
                className="img-fluid"
                src="assets/img/blog-2.jpg"
                alt="blog"
              />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="/"
              >
                Web Design
              </a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2"></i>John Doe
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2"></i>01
                  Jan, 2045
                </small>
              </div>
              <h4 className="mb-3">How to build a website</h4>
              <p>
                Dolor et eos labore stet justo sed est sed sed sed dolor stet
                amet
              </p>
              <a className="text-uppercase" href="">
                Read More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default BlogListing;

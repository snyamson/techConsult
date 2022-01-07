import ServiceItem from "./serviceItem";

/* eslint-disable @next/next/no-html-link-for-pages */
const Services = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
          <h1 className="mb-0">
            Custom IT Solutions for Your Successful Business
          </h1>
        </div>
        <div className="row g-5">
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
        </div>
      </div>
    </div>
  );
};

export default Services;

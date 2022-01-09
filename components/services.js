import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div
      id="services"
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
          <h1 className="mb-0">Growth-First Analytical Services</h1>
        </div>
        <div className="row g-5">
          <ServiceItem title="Data Analytics" />
          <ServiceItem title="Research & Scientific Writing" />
          <ServiceItem title="App & Web Development" />
        </div>
      </div>
    </div>
  );
};

export default Services;

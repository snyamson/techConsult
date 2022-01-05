import Link from "next/link";

const Category = ({ name }) => {
  return (
    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
      <div className="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 className="mb-0">{name}</h3>
      </div>
      <div className="link-animated d-flex flex-column justify-content-start">
        <Link href="/">
          <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2">
            <i className="bi bi-arrow-right me-2"></i>Web Design
          </a>
        </Link>
        <Link href="/">
          <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2">
            <i className="bi bi-arrow-right me-2"></i>Web Development
          </a>
        </Link>
        <Link href="/">
          <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2">
            <i className="bi bi-arrow-right me-2"></i>Web Development
          </a>
        </Link>
        <Link href="/">
          <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2">
            <i className="bi bi-arrow-right me-2"></i>Keyword Research
          </a>
        </Link>
        <Link href="/">
          <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2">
            <i className="bi bi-arrow-right me-2"></i>Email Marketing
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Category;

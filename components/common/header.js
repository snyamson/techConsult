import Link from "next/link";

const Header = ({ pageName, desc }) => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-user-tie me-2"></i>Startup
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link href="/">
              <a className="nav-item nav-link">Home</a>
            </Link>
            <Link href="/">
              <a className="nav-item nav-link">About</a>
            </Link>
            <Link href="/service">
              <a className="nav-item nav-link active">Services</a>
            </Link>
            <Link href="/blog">
              <a className="nav-item nav-link">Blog</a>
            </Link>
            <Link href="/">
              <a className="nav-item nav-link">Contact</a>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: "90px" }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">
              {desc ? desc : pageName}
            </h1>
            <Link href="/">
              <a className="h5 text-white">Home</a>
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link href={`/${pageName}`}>
              <a className="h5 text-white">{pageName}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

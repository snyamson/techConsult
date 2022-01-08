/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Services",
      path: "/#services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const carouselItem = [
    {
      title: "Creative & Innovative",
      desc: " Creative & Innovative Digital Solution",
      active: true,
    },
    {
      title: "Creative & Innovative",
      desc: " Creative & Innovative Digital Solution",
    },
  ];

  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0">
              {/* <i className="fa fa-user-tie me-2"></i> */}
              techConsult
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
              {menu.map((item, index) => (
                <Link href={item.path} key={index}>
                  <a
                    className={`nav-item nav-link ${
                      router.asPath == item.path ? "active" : null
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="assets/img/carousel-1.jpg"
                alt="Carousel"
              />

              <div
                className="
                carousel-caption
                d-flex
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative & Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative & Innovative Digital Solution
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="assets/img/carousel-2.jpg"
                alt="Carousel"
              />
              <div
                className="
                carousel-caption
                d-flex
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative & Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative & Innovative Digital Solution
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

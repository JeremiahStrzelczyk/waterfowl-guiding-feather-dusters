import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" bg-dark text-white font-small pt-4 mt-auto ">
      <div className=" container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">
              Waterfowl guiding feather dusters llc
            </h5>
            <div className="container p-4">
              <section className="mb-4">
                {/* Facebook */}
                <a
                  className="btn btn-outline-light btn-floating m-1 h3"
                  href="/underConstruction"
                  role="button"
                >
                  <FaFacebook size={50} />
                </a>
                {/* Instagram */}
                <a
                  className="btn btn-outline-light btn-floating  m-1"
                  href="/underConstruction"
                  role="button"
                >
                  <FaInstagram size={50} />
                </a>
              </section>
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          {/* Help column */}
          {/* <div className="col-md-3 mb-md-0 mb-3">
            <h4 className="text-uppercase">Help</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/underConstruction">Support</a>
              </li>
              <li>
                <a href="/underConstruction">FAQ</a>
              </li>
              <li>
                <a href="/underConstruction">Bug Reporting</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright: Feather Dusters LLC
      </div>
    </footer>
  );
};

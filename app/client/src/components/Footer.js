import React from "react";

import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="nowrap">Featherdusters LLC</p>

      <div className="footer__hr"></div>

      <div
        className="footer__social-media-wrapper"
        aria-label="Social media links"
      >
        <a
          className="link"
          href="https://www.facebook.com/featherdustersLLC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="footer__social-media-icon" />
        </a>
        <p className="footer__copyright nowrap">
          &copy; {new Date().getFullYear()} Feather Dusters LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;

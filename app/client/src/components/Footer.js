import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <p className="nowrap">
        FEATHER DUSTERS LLC{" "}
        <span className="nowrap"> WATERFOWL GUIDING &copy;</span>
      </p> */}
      {/* <p>Featherdusters LLC Waterfowl Guiding &copy;</p> */}

      {/* <p>
        Featherdusters LLC{" "}
        <span className="no-flex-wrap">Waterfowl Guiding &copy;</span>
      </p> */}

      <p className="nowrap">Featherdusters LLC Waterfowl Guiding &copy;</p>

      <p>Facebook</p>
      <p>&copy; {new Date().getFullYear()} Copyright: Feather Dusters LLC</p>
    </footer>
  );
};

export default Footer;

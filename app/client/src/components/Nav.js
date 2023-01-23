import { Link } from "react-router-dom";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const button = (
    <button
      className="nav__button"
      aria-controls="primary-navigation"
      aria-expanded={isOpen ? true : false}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}

      <span className="offscreen">Menu</span>
    </button>
  );
  const content = (
    <nav className="nav" data-overlay={isOpen}>
      {/* // <nav className={`nav ${isOpen ? "data-overlay" : ""}`}> */}
      <div className="nav__title">Featherdusters</div>

      <div className="nav__wrapper">
        <ul
          className={isOpen ? "nav__wrapper--ul" : "nav__wrapper--ul--mobile"}
          onClick={() => setIsOpen(false)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {button}
    </nav>
  );

  return content;
};

export default Nav;

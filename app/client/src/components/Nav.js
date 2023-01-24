import { Link, NavLink } from "react-router-dom";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import useScrollBlock from "../hooks/useScrollBlock";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [blockScroll, allowScroll] = useScrollBlock();

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // isOpen ? allowScroll() : blockScroll();
  };

  const resetNav = () => {
    // allowScroll();
    setIsOpen(false);
  };

  return (
    <>
      <nav className="nav" data-overlay={isOpen}>
        <div className="nav-container nav-wrapper">
          <Link
            to="/"
            className="nav-container__logo"
            onClick={() => resetNav()}
          >
            Featherdusters
          </Link>

          {/***************************************************
           * Menu Toggle
           **************************************************/}
          <div className="nav-container__toggle" onClick={() => handleToggle()}>
            {isOpen ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>

          {/******************************************************
           * Nav List
           ***************************************************** */}
          <ul
            className={
              isOpen ? "nav-container__menu active" : "nav-container__menu "
            }
            onClick={() => resetNav()}
          >
            {/* */}
            {/*** HOME ***/}
            <li className="nav-container__item">
              <NavLink to="/" className="nav-container__link">
                Home
              </NavLink>
            </li>

            {/*** ABOUT ***/}
            <li className="nav-container__item">
              <NavLink to="/about" className="nav-container__link">
                About
              </NavLink>
            </li>

            {/*** CONTACT ***/}
            <li className="nav-container__item">
              <NavLink to="/contact" className="nav-container__link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

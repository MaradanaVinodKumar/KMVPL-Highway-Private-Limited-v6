import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ Color = "balck", Gallery = false, Home = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="logo">
       <NavLink to='/'><img src={logo} alt="Logo" /></NavLink>
      </div>
      <nav className={isOpen ? "open" : ""}>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={(Home && "menu ") + (isOpen ? " open " : "")} onClick={closeMenu}>
          <li>
            <NavLink exact to="/" className={`links ${Home && "HomeLinksActive"} `} style={{ color: Color }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Gallery" className={`links ${Gallery && "GalleryLinkActive"} `} style={{ color: Color }}>
              Gallery
            </NavLink>
          </li>
          <li className="user">
            <NavLink to="/SignIn" className="links " style={{ color: Color }}>
              <button className="signIn_icon">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

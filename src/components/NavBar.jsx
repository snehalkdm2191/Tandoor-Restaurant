import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // You can make the component shorter using jsons for the navlinks
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink
            exact
            to="/category"
            className="nav-link"
            activeClassName="active-link"
          >
            Category
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/admin"
            className="nav-link"
            activeClassName="active-link"
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainlogo from "./../../assests/main.jpg";
import "./Header.css";

const Header = (props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="row2">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "white ",
            borderBottom: "5px solid grey",
          }}
        >
          <div className="header-col1">
            <a className="navbar-brand" href="/" onClick={toggleMobileMenu}>
              <img src={mainlogo} alt="" />
            </a>
          </div>
          <div className="navbarTogglerDemo01" class="collapse navbar-collapse">
            <ul
              className="navbar-nav mx-auto mb-2 mb-lg-0"
              style={{
                fontSize: "20px",
                fontFamily: "comforta",
                fontWeight: "bold",
              }}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  role="button"
                  style={{
                    border: "none",
                    marginLeft: "33px",
                    marginRight: "25px",
                    color: "Black",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li
                className="nav-link"
                style={{
                  border: "none",
                  marginLeft: "33px",
                  marginRight: "25px",
                  color: "Blue",
                }}
              >
                Our Services
              </li>
              <li
                className="nav-link"
                style={{
                  border: "none",
                  marginLeft: "33px",
                  marginRight: "25px",
                  color: "Blue",
                }}
              >
                Customers
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  role="button"
                  style={{
                    border: "none",
                    marginLeft: "33px",
                    marginRight: "25px",
                    color: "Black",
                  }}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

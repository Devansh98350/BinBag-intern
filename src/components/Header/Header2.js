import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainlogo from "./../../assests/main.jpg";
import "./Header.css";

const Header2 = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alert("Admin Logged Out Successfully");
    navigate("/");
    document.title = "Binbag - Internship";
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
            <img src={mainlogo} alt="" />
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
                  to="/admin-view"
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
                Accounts
              </li>
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
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-col1">
            <FontAwesomeIcon icon={faUser} size="1.5x" color="blue" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header2;

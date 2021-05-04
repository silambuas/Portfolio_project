import React from "react";
import logo from "../logo.png";
// REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{
        position: "fixed",
        width: "100vw",
        background: "rgba(52,58,64,0.9)",
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="Logo...." />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutPage">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Main-project">
                Projects
              </a>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link" href="#">how work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">portfolio</a>
          </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#mainContact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

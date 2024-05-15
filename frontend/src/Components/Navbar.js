import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <img className="logo" src={logo} alt="logo" />

      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">Про нас</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Реєстрація</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">Вхід</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Профіль</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

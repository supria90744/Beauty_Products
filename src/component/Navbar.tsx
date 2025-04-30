import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Beauty Corner</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/register" className="btn register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;

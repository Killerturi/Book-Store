import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <div className="leftNav">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </div>
        <div className="rightNav">
          <input type="text" placeholder="search" />
          <Link to="/register">
            <li>Registration</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

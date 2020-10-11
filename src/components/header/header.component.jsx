import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="links">
      <Link to="#" className="link">
        Sign In
      </Link>
      <Link to="#" className="link">
        Sign Up
      </Link>
    </div>
  </div>
);

export default Header;

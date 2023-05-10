import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css"

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/"><li className="nav-item">Home</li></Link>
        <Link to="/calendar"><li className="nav-item">Calendar</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;

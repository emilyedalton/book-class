import React from "react";
import "../Nav/style.css";


function Nav() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Northwestern Univeristy Press
      </a>
      <a className="nav-item" href="/saved">My Course Adoptions</a>
    </nav>
  );
}

export default Nav;

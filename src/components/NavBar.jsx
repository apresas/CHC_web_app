// import React from 'react'
import "./navBar.css";
import VarsityNav from "./VarsityNav";
import JVNav from "./JVNav";
import LeagueNav from "./LeagueNav";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="nav_logo_container">
          <img
            className="nav_logo"
            src="../../src/assets/Logos/CHC_logo.svg"
            alt="CHC Logo"
          />
          <h1 className="nav_logo_title">CHC</h1>
        </div>
        <div className="nav_links">
        <VarsityNav />
        <JVNav />
        <LeagueNav />
        </div>
        <a href="" className="navLinks"></a>
        <a href="" className="navLinks"></a>
      </div>
    </div>
  );
}

export default NavBar;

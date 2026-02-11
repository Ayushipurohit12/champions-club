import React from "react";
import "./navbar.css";
import Image from "next/image";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Image src={logo} alt="Champions Club Logo" width={120} height={40} />
      </div>
      <nav className="nav-links">
        <a href="#">ABOUT US</a>
        <a href="#" >SERVICES</a>
        <a href="#" >LIFESTYLE ASSISTANCE</a>
        <a href="#" >BOOKING</a>
      </nav>
      <div className="nav-actions">
        <button className="explore">EXPLORE NOW</button>
        <button className="login">LOGIN</button>
      </div>
    </header>
  );
}
export default Navbar;

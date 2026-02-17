"use client";
import React, { useState } from "react";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="logo">
        <Image src={logo} alt="Champions Club Logo" width={120} height={40} />
      </div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link href="/about">ABOUT US</Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/lifestyle">LIFESTYLE ASSISTANCE</Link>
        <Link href="/journey">BOOKING</Link>
      </nav>
      <div className="nav-actions">
        <button className="explore">EXPLORE NOW</button>
        <button className="login">LOGIN</button>
        <Image src={Profile} alt="profile" width={30} height={30} />
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
export default Navbar;

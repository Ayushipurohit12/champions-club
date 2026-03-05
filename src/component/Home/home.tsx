import React from "react";
import bgImage from "../../assets/image.png";
import Navbar from "../Navbar/navbar";
import "./home.css";

function Home() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage.src || bgImage})` }}>
      <div className="hero-polygons" aria-hidden>
        <div className="hero-polygon hero-polygon--left" />
        <div className="hero-polygon hero-polygon--left-bttom" />
        <div className="hero-polygon hero-polygon--center" />
        <div className="hero-polygon hero-polygon--right" />
      </div>
      <div className="main-content" />
      <Navbar />
      <div className="content" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <p className="welcome">WELCOME <br /> TO  <br />INDIAS</p>
        <h1 className="title">
          MOST <br />
          EXCLUSIVE <br />
          ELITE CLUB
        </h1>
      </div>
    </div>
  );
}

export default Home;

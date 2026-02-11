import React from "react";
import bgImage from "../../assets/image.png";
import Navbar from "../Navbar/navbar";
import "./home.css";

function Home() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage.src || bgImage})` }}>
      <div className="main-content" />
      <Navbar />
      <div className="content">
        <p className="welcome">WELCOME TO INDIA’S</p>
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

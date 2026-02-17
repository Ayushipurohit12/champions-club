"use client";
import "./experiences.css";
import { useRef } from "react";
import Background from "../../assets/backgroundimage.svg"
import Image from "next/image";
import CharterPlanes  from "../../assets/charterplanes.png"
import Helicopters from "../../assets/helicopters.png"
import Yachts from "../../assets/yachts.png"
import Villas from "../../assets/village.png"
import arrow from "../../assets/arrow.svg"

export default function Experiences() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="experience-section">
      <div className="title-wrapper">
        <h2 className="experience-title" style={{ backgroundImage: `url(${Background.src || Background})` }}>Top Related <br /> Experiences</h2>
      </div>
      <div className="cards-wrapper" ref={scrollRef} style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}>
        <div className="card">
          <Image src={CharterPlanes} alt="Charter Planes" />
          <div className="overlay">
            <h3>Charter Planes</h3>
          </div>
        </div>
        <div className="card">
          <Image src={Helicopters} alt="Helicopters" />
          <div className="overlay">
            <h3>Helicopters</h3>
          </div>
        </div>
        <div className="card">
          <Image src={Yachts} alt="Yachts" />
          <div className="overlay">
            <h3>Yachts</h3>
          </div>
        </div>
        <div className="card">
          <Image src={Villas} alt="Villas" />
          <div className="overlay">
            <h3>Villas</h3>
          </div>
        </div>
      </div>
      <div className="arrow" onClick={handleScroll}>
        <Image src={arrow} alt="arrow" width={24} height={24} style={{ rotate: "-35deg" }} />
      </div>
    </section>
  );
}

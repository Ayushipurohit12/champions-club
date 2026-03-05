"use client";
import "./experiences.css";
import { useRef } from "react";
import Background from "../../assets/backgroundimage.svg";
import Image from "next/image";
import CharterPlanes from "../../assets/charterplanes.png";
import Helicopters from "../../assets/helicopters.png";
import Yachts from "../../assets/yachts.png";
import Villas from "../../assets/village.png";
import arrow from "../../assets/arrow.svg";

const experienceData = [
  { id: 1, image: CharterPlanes, alt: "Charter Planes", title: "Charter Planes" },
  { id: 2, image: Helicopters, alt: "Helicopters", title: "Helicopters" },
  { id: 3, image: Yachts, alt: "Yachts", title: "Yachts" },
  { id: 4, image: Villas, alt: "Villas", title: "Villas" },
  { id: 5, image: CharterPlanes, alt: "Charter Planes", title: "Charter Planes" },
  { id: 6, image: Helicopters, alt: "Helicopters", title: "Helicopters" },
  { id: 7, image: Yachts, alt: "Yachts", title: "Yachts" },
  { id: 8, image: Villas, alt: "Villas", title: "Villas" },
];

export default function Experiences() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLDivElement>(".card");
    if (!firstCard) return;

    const styles = window.getComputedStyle(container);
    const gap =
      parseFloat(styles.columnGap || styles.gap || "0") ||
      parseFloat(styles.rowGap || "0") ||
      0;

    const step = firstCard.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section className="experience-section">
      <div className="title-wrapper">
        <h2
          className="experience-title"
          style={{ backgroundImage: `url(${Background.src || Background})` }}
        >
          Top Related <br /> Experiences
        </h2>
      </div>
      <div className="experience-carousel-wrapper" style={{ position: 'relative' }}>
        <div
          className="cards-wrapper"
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
            gap: "2rem",
          }}
        >
          {experienceData.map((exp) => (
            <div className="card" key={exp.id}>
              <Image src={exp.image} alt={exp.alt} />
              <div className="overlay">
                <h3>{exp.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow prev-arrow" onClick={() => handleScroll("prev")} aria-label="Previous experiences" style={{ position: 'absolute', top: '50%', left: '20rem;', transform: 'translateY(-50%) rotate(180deg)', zIndex: 2 }}>
          <Image
            src={arrow}
            alt="Previous"
            width={24}
            height={24}
            className="arrow-image"
          />
        </button>
        <button className="arrow next-arrow" onClick={() => handleScroll("next")} aria-label="Next experiences" style={{ position: 'absolute', top: '50%', right: '20rem', transform: 'translateY(-50%)', zIndex: 2 }}>
          <Image
            src={arrow}
            alt="Next"
            width={24}
            height={24}
            className="arrow-image"
          />
        </button>
      </div>
    </section>
  );
}

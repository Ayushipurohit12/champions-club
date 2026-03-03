"use client";

import Image from "next/image";
import "./WhyChampionsClub.css";
import BackgroundImage from "../../assets/backgroundchampions.png";
import burjkhalifa from "../../assets/burjkhalifa.svg";
import crystalclear from "../../assets/crystalclear.svg";
import Maskgroup from "../../assets/Maskgroup.svg";
import Polygon from "../../assets/Polygon9_3.svg";

export default function WhyChampionsClub() {
  return (
    <section className="why-champions-club-container">
      <div className="why-champions-club why-champions-club--top-wrap" style={{ backgroundImage: `linear-gradient(to bottom, #e1d3ce 0%, #e5d1c7 40%, rgba(229, 209, 199, 0.6) 60%, #e1d3ce 100%)` }}>
        <div className="why-champions-club__top">
          <h2 className="why-champions-club__heading">
            Why Champions
            <br />
            <span className="why-champions-club__heading-club">Club</span>
          </h2>
          <p className="why-champions-club__intro">
            The ultimate emblem of exclusivity. A prestigious enclave for the
            select few, where luxury meets legacy, and every experience is
            meticulously crafted for the extraordinary.
          </p>
        </div>
      </div>
      <div
        className="why-champions-club__image-section"
        style={{
          backgroundImage: `linear-gradient(to bottom, #00000036 0%, #00000038 90%, rgb(225 211 206) 100%), url(${BackgroundImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="why-champions-club why-champions-club--image-wrap">
        <div className="why-champions-club__hero">
          <div className="why-champions-club__hero-overlay">
            <div className="why-champions-club__card why-champions-club__card--1">
              <Image
                src={crystalclear}
                alt="Serene landscape"
                className="why-champions-club__card-img-1"
              />
            </div>
            <div className="why-champions-club__card why-champions-club__card--2">
              <Image
                src={burjkhalifa}
                alt="Lake and mountains"
                width={220}
                height={160}
                className="why-champions-club__card-img-2"
              />
            </div>
            <div className="why-champions-club__card why-champions-club__card--3">
              <Image
               src={Maskgroup}
                alt="Heritage view"
                width={220}
                height={160}
                className="why-champions-club__card-img-3"
              />
            </div>
             <div className="why-champions-club__card why-champions-club__card--4">
              <Image
               src={Polygon}
                alt="Heritage view"
                width={220}
                height={160}
                className="why-champions-club__card-img-4"
              />
            </div>
          </div>
        </div>
        </div>
       </div>
      <div
        className="why-champions-club__bottom"
        style={{
          background: "linear-gradient(180deg, rgba(225, 211, 206, 0) 1.82%, rgba(225, 211, 206, 0.29) 9.22%, rgba(225, 211, 206, 0.509333) 17.48%, rgba(225, 211, 206, 0.73) 22.69%, rgba(225, 211, 206, 0.850811) 27.99%, #E1D3CE 36.11%, rgba(225, 211, 206, 0.87) 53.49%, rgba(225, 211, 206, 0.65) 73.94%, rgba(225, 211, 206, 0) 96.08%)",
        }}
      >
        <div className="why-champions-club why-champions-club--bottom-wrap">
          <h2 className="why-champions-club__heading why-champions-club__heading--bottom">
            Access to global Affiliated,<br /> Alliance Partner  Club  <br/> 
          Privileges
          </h2>
            <p className="why-champions-club__intro">
              Champion Club&apos;s Affiliated, Alliance, and Partner Club Privileges: Your Elite Passport to Global Eminence. Experience a Harmonious Blend of Superior Quality and Exclusive Advantages across the World&apos;s Most Venerated Clubs.
            </p>
          </div>
        </div>
    </section>
  );
}
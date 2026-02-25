"use client";

import Image from "next/image";
import "./planTripSection.css";
import CardImage from "../../assets/plantrip.png";
import Polygon from "../../assets/Polygon9_3.svg";
import SmokeImage from "../../assets/smokefill1.svg";
import Smokefill from "../../assets/smoke1.svg";


const SMOKE_GRADIENT =
  "background-image: linear-gradient(rgb(225 211 206) 1.82%, rgba(225, 211, 206, 0.29) 9.22%, rgb(225 211 206) 17.48%, rgba(225, 211, 206, 0.73) 22.69%, rgba(225, 211, 206, 0.85) 27.99%, rgb(225, 211, 206) 36.11%, rgba(225, 211, 206, 0.87) 53.49%, rgba(225, 211, 206, 0.65) 73.94%, rgb(225 211 206) 96.08%),";

export default function PlanTripSection() {
  return (
    <section
      className="plan-trip"
      style={{
        backgroundImage: `${SMOKE_GRADIENT}, url(${SMOKE_GRADIENT})`,
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "0 0, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}>
      <div className="plan-trip__bg-blur plan-trip__bg-blur--tl" aria-hidden />
      <div className="plan-trip__bg-blur plan-trip__bg-blur--tr" aria-hidden />
      <div className="plan-trip__bg-blur plan-trip__bg-blur--br" aria-hidden />
      <div className="plan-trip__inner">
        <div className="plan-trip__media">
          <Image src={SmokeImage} alt="" className="plan-trip__shape plan-trip__shape--smoke-left" width={320} height={400} aria-hidden />
          <div className="plan-trip__card-wrap">
            <div className="plan-trip__card">
              <Image
                src={CardImage}
                alt="Tailored travel experience"
                className="plan-trip__card-img"
                width={400}
                height={520}
                priority
              />
            </div>
            <Image src={Polygon} alt="Decorative shape" className="plan-trip__shape plan-trip__shape--diamond" width={80} height={80} aria-hidden />
            <Image src={Polygon} alt="Decorative shape" className="plan-trip__shape plan-trip__shape--triangle" width={80} height={80} aria-hidden />
          </div>
        </div>
        <div className="plan-trip__content">
          <p className="plan-trip__text">
            We craft and plan unique itineraries tailored to customers interests
            and with strong attention to detail.
          </p>
          <a href="#" className="plan-trip__cta">
            HELP ME PLAN A TRIP
          </a>
        </div>
          <Image
            src={Smokefill}
            alt=""
            className="plan-trip__shape plan-trip__shape-right"
            width={320}
            height={400}
            aria-hidden
          />
      </div>
    </section>
  );
}

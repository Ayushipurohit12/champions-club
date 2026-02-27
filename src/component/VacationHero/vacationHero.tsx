"use client";

import Image from "next/image";
import "./vacationHero.css";
import HeroBg from "../../assets/subscribe.png";
import SubscribeBg from "../../assets/subscribeimage.png";
import SubscribeIcon from "../../assets/subscribeicon.svg";
import  SubscribeIconbottom from "../../assets/subscribeicon1.svg"

export default function VacationHero() {
  return (
    <section
      className="vacation-hero"
      style={{
        backgroundImage: `url(${HeroBg.src || HeroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="vacation-hero__overlay" aria-hidden />
      <div className="vacation-hero__content">
        <div className="vacation-hero__cta-wrap">
          <div className="vacation-hero__cta-frame">
            <Image
              src={SubscribeIcon}
              alt=""
              className="vacation-hero__cta-ornament vacation-hero__cta-ornament--top"
              aria-hidden
            />
            <button type="button" className="vacation-hero__cta">
              Start a trip request
            </button>
            <Image
              src={SubscribeIconbottom}
              alt=""
              className="vacation-hero__cta-ornament vacation-hero__cta-ornament--bottom"
              aria-hidden
            />
          </div>
        </div>

        <div className="vacation-hero__subscribe-wrap">
          <div className="vacation-hero__card">
            <Image
              src={SubscribeBg}
              alt=""
              className="vacation-hero__card-img"
              width={900}
              height={520}
            />
            <div className="vacation-hero__card-overlay">
              <p className="vacation-hero__card-headline"> 
                Get weekly
                <br />
               inspiration and
               <br />
               expert advice 
             </p>
              <form className="vacation-hero__form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className="vacation-hero__input"
                  placeholder="email address"
                  required
                />
                <button type="submit" className="vacation-hero__submit">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="vacation-hero__bottom-bar" aria-hidden />
    </section>
  );
}

import React from "react";
import "./footer.css";
import bgImage from "../../assets/image-footer.jpg";
import personImage from "../../assets/footer-person.png";
import logo from "../../assets/footer_logo.svg";
import Image from "next/image";
import mailBox from "../../assets/mail_box.svg";
import vector from "../../assets/Vector 592.svg"
import { FaArrowUpLong } from "react-icons/fa6";


function FooterHero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-background">
        <Image
          src={bgImage}
          alt="footer background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="top-fade" />

      <Image src={personImage} alt="person" className="hero-person" />

      <footer className="footer">
        <div className="footer-left">
          <Image src={logo} alt="logo"  />
          <p>
            It’s not just a club, it’s the embodiment <br />
            of an extraordinary lifestyle.
          </p>
        </div>

        <div className="footer-right">
          <div className="email-subscribe">
            <div className="email-box">
            <Image src={mailBox} alt="Mail Box"  />
            <input type="email" placeholder="Your email address" />
            <Image src={vector} alt="vector"  />
             </div>
            <div className="police-box">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
         </div>
         <FaArrowUpLong  className="arrow-up" />
        </div>
      </footer>
    </section>
  );
}

export default FooterHero;
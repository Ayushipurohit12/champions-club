import React from "react";
import "./footer.css";
import bgImage from "../../assets/image-footer.jpg";
import personImage from "../../assets/footer-person.png";
import logo from "../../assets/footer_logo.svg";
import Image from "next/image";
import mailBox from "../../assets/mail_box.svg";
import vector from "../../assets/Vector 592.svg"
import { FaArrowUpLong } from "react-icons/fa6";
import Linkedin from "../../assets/linkedin.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/tewitter.svg";
import Youtube from "../../assets/youtube.svg";
function FooterHero() {
  return (
    <section className="bg-wrapper">
      <Image
        src={bgImage}
        alt="footer background"
        fill
        className="bg-background"
      />
      <div className="top-fade" />
      <Image src={personImage} alt="person" className="bg-person" />
      <footer className="footer">
        <div className="footer-top">
        <div className="footer-left">
          <Image src={logo} alt="logo" className="footer-left-logo" />
          <p>
            It’s not just a club, it’s the embodiment <br />
            of an extraordinary lifestyle.
          </p>
          <div className="social-icons">
            <Image src={Twitter} alt="twitter" width={20} height={20} />
             <Image src={Facebook} alt="facebook"  width={20} height={20} />
            <Image src={Instagram} alt="instagram" width={20} height={20} />
           <Image src={Youtube} alt="youtube" width={20} height={20} />
           <Image src={Linkedin} alt="linkedin" width={20} height={20} />
          </div>
        </div>
        <div className="footer-right">
          <div className="email-subscribe">
            <div className="email-box">
              <Image src={mailBox} alt="mail" />
              <input type="email" placeholder="Your email address" />
              <Image src={vector} alt="arrow" />
            </div>

            <div className="police-box">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="arrow-up">
           <FaArrowUpLong  />
          </div>
        </div>
        </div>
        <hr style={{ width: "100%", border: "none", height: "1px", background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.52) 51.5%, rgba(255, 255, 255, 0.052) 100%)", margin: "5px 0" }} />
        <p style={{display:"flex",justifyContent:"center",alignItems:"center" , fontSize:"10px"}}>©  2024 Copyright Champions Group. All Rights Reserved</p>
      </footer>
    </section>
  );
}

export default FooterHero;
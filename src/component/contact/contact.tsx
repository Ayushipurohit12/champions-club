import React from "react";
import bgImage from "../../assets/contactbackgroundimage.jpg";
import "./contact.css";
import SubscribeIcon from "../../assets/subscribeicon.svg";
import  SubscribeIconbottom from "../../assets/subscribeicon1.svg"
import Image from "next/image";
function Contact() {
  return (
    <section className="contact-section" id="about">
      <Image src={bgImage} alt="Background" fill style={{ objectFit: "cover" }} className="background-image" />
      <div className="contact-overlay">
        <div className="contact-card">
          <h2>Contact</h2>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
              <button>
                     <Image
                        src={SubscribeIcon}
                        alt=""
                        className="icon-button"
                        aria-hidden
                      />
                    CALL ME BACK 
                   <Image
                    src={SubscribeIconbottom}
                     alt=""
                   className="icon-bottom"
                   aria-hidden
                   />
                  </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
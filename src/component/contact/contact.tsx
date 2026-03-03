import React from "react";
import bgImage from "../../assets/contactbackgroundimage.jpg";
import "./contact.css";
import Image from "next/image";
function Contact() {
  return (
    <section className="contact-section">
      <Image src={bgImage} alt="Background" fill style={{ objectFit: "cover" }} className="background-image" />
      <div className="contact-overlay">
        <div className="contact-card">
          <h2>Contact</h2>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <button>CALL ME BACK</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
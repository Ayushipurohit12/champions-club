import "./luxury.css";
import Image from "next/image";
import imgBurj from "../../assets/burjkhalifa.png";
import imgCrystal from "../../assets/crystalclear.png";
import imgGem from "../../assets/gem.png";
import imgSnow from "../../assets/snowcovered.png";
import imgDesert from "../../assets/desertsafari.png";
import car from "../../assets/car.png";
import hotel from "../../assets/hotel.png";
import villa from "../../assets/villag.png";
import yacht from "../../assets/yacht.png";
import heli from "../../assets/helicopter.png";
import jet from "../../assets/jet.png";
import  Background from "../../assets/backgroundimage.svg";
import BackgroundImage from "../../assets/backgroundimage.png";
import location from "../../assets/location.svg";
import Polygon from "../../assets/Polygon15.svg";
import Polygonn from "../../assets/Polygon17.svg";
function LuxurySection() {
  return (
    <section
      className="luxury-section"
      style={{
        backgroundImage: `linear-gradient(to bottom, #e1d3ce 0%, #e5d1c7 40%, rgba(229, 209, 199, 0.6) 60%, #e1d3ce 100%), url(${
          BackgroundImage.src || BackgroundImage
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
       minHeight: "auto",
      }}
    >
      <div className="container">
        <div className="luxury-top-layout">
          <div className="luxury-header" style={{
          backgroundImage: `url(${Background.src || Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
             backgroundSize: "100% 100%",
             position: "relative",
             top: "12rem",
        }}>
        <div className="luxury-header-text">
           <p className="luxury-label">Luxury</p>
              <h2>
                Luxury
                <br />
                Packages
              </h2>
              <button>VIEW ALL</button>
            </div>
          </div>
          <div className="luxury-grid">
            <div className="lux-card lux-card--empty" />
            <div className="lux-card">
              <Image src={imgBurj} alt="Burj Khalifa" />
              <div className="lux-overlay">
                <div className="lux-location-row">
                  <span className="lux-location-icon"><Image src={location} alt="location" /></span>
                  <span className="lux-location-text">Dubai</span>
                </div>
                <div className="lux-content-row">
                  <div className="lux-main-text">
                    <h3>Burj Khalifa</h3>
                    <p className="lux-from">FROM</p>
                    <p className="lux-price">$ 1700</p>
                  </div>
                  <div className="lux-side-info">
                    <span className="lux-rating">4.5</span>
                    <span className="lux-dots-vertical">
                       <Image src={Polygon} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lux-card">
              <Image src={imgCrystal} alt="Crystal Clear Beach" />
              <div className="lux-overlay">
                <div className="lux-location-row">
                  <span className="lux-location-icon"><Image src={location} alt="location" /></span>
                  <span className="lux-location-text">Maldives</span>
                </div>
                <div className="lux-content-row">
                  <div className="lux-main-text">
                    <h3>Crystal Clear Beach</h3>
                    <p className="lux-from">FROM</p>
                    <p className="lux-price">$ 1900</p>
                  </div>
                  <div className="lux-side-info">
                    <span className="lux-rating">4.3</span>
                    <span className="lux-dots-vertical">
                       <Image src={Polygon} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lux-card">
              <Image src={imgGem} alt="Gem Of A Place" />
              <div className="lux-overlay">
                <div className="lux-location-row">
                  <span className="lux-location-icon"><Image src={location} alt="location" /></span>
                  <span className="lux-location-text">Vietnam</span>
                </div>
                <div className="lux-content-row">
                  <div className="lux-main-text">
                    <h3>Gem Of a Place</h3>
                    <p className="lux-from">FROM</p>
                    <p className="lux-price">$ 2490</p>
                  </div>
                  <div className="lux-side-info">
                    <span className="lux-rating">4.0</span>
                    <span className="lux-dots-vertical">
                      <Image src={Polygon} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lux-card">
              <Image src={imgSnow} alt="Snow Covered Hills" />
              <div className="lux-overlay">
                <div className="lux-location-row">
                  <span className="lux-location-icon">
                    <Image src={location} alt="location" /></span>
                  <span className="lux-location-text">Switzerland</span>
                </div>
                <div className="lux-content-row">
                  <div className="lux-main-text">
                    <h3>Snow Covered Hills</h3>
                    <p className="lux-from">FROM</p>
                    <p className="lux-price">$ 1700</p>
                  </div>
                  <div className="lux-side-info">
                    <span className="lux-rating">4.6</span>
                    <span className="lux-dots-vertical">
                      <Image src={Polygon} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lux-card">
              <Image src={imgDesert} alt="Desert Safari" />
              <div className="lux-overlay">
                <div className="lux-location-row">
                  <span className="lux-location-icon">
                    <Image src={location} alt="location" /></span>
                  <span className="lux-location-text">Dubai</span>
                </div>
                <div className="lux-content-row">
                  <div className="lux-main-text">
                    <h3>Desert Safari</h3>
                    <p className="lux-from">FROM</p>
                    <p className="lux-price">$ 1200</p>
                  </div>
                  <div className="lux-side-info">
                    <span className="lux-rating">4.2</span>
                    <span className="lux-dots-vertical">
                      <Image src={Polygon} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                      <Image src={Polygonn} alt="polygon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="book-with-us">
          <h2 className="book-title">
            Book
            <br />
            With Us
          </h2>
          <div className="book-grid">
            <div className="book-card">
              <Image src={car} alt="Super Cars" fill sizes="(max-width: 768px) 100vw, 300px" className="book-card-img" />
              <div className="book-card-overlay" />
              <span className="book-card-label">SUPER CARS</span>
            </div>
            <div className="book-card">
              <Image src={hotel} alt="Hotels" fill sizes="(max-width: 768px) 100vw, 300px" className="book-card-img" />
              <div className="book-card-overlay" />
              <span className="book-card-label">HOTELS</span>
            </div>
            <div className="book-card">
              <Image src={villa} alt="Villas" fill sizes="(max-width: 768px) 100vw, 300px" className="book-card-img" />
              <div className="book-card-overlay" />
              <span className="book-card-label">VILLAS</span>
            </div>
            <div className="book-card">
              <Image src={yacht} alt="Yachts" fill sizes="(max-width: 768px) 100vw, 300px" className="book-card-img" />
              <div className="book-card-overlay" />
              <span className="book-card-label">YACHTS</span>
            </div>
            <div className="book-card">
              <Image src={heli} alt="Private Helicopter" fill sizes="(max-width: 768px) 100vw, 300px" className="book-card-img" />
              <div className="book-card-overlay" />
              <span className="book-card-label">PRIVATE HELICOPTER</span>
            </div>
            <div className="book-card">
              <Image src={jet} alt="Private Jet" fill sizes="(max-width: 768px) 100vw, 300px"        className="book-card-img" />
              <div className="book-card-overlay" />
              <span className="book-card-label">PRIVATE JET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LuxurySection;

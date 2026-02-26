import Image from "next/image";
import "./customizeTripSection.css";
import SmokeFill from "../../assets/downsmokefill.svg";
import Smokeleft from "../../assets/smokefill1.svg";
import SmokeRight from "../../assets/smoke1.svg";
import Polygon from "../../assets/Polygon 9 (1).svg";

export default function CustomizeTripSection() {
  return (
    <section className="customize-trip">
      <Image
        src={SmokeFill}
        alt="smoke left"
        className="customize-trip__smoke customize-trip__smoke--left"
        width={400}
        height={600}
        aria-hidden
      />
        <Image
        src={Smokeleft}
        alt="smoke left"
        className="customize-trip__smoke customize-trip__smoke--midleft"
        width={400}
        height={600}
        aria-hidden
      />
      <Image
        src={SmokeRight}
        alt="smoke right"
        className="customize-trip__smoke customize-trip__smoke--right"
        width={400}
        height={600}
        aria-hidden
      />

      <div className="customize-trip__inner">
        <header className="customize-trip__header">
          <p className="customize-trip__eyebrow">Customize</p>
          <h2 className="customize-trip__title">Your Trip With Us</h2>
        </header>
        <div className="customize-trip__content">
          <div className="customize-trip__steps">
            <div className="customize-trip__step">
              <div className="customize-trip__step-marker">
                <Image
                  src={Polygon}
                  alt=""
                  className="customize-trip__step-diamond"
                  width={80}
                  height={120}
                  aria-hidden
                />
                <span className="customize-trip__step-number">1</span>
                <div className="customize-trip__step-line" />
              </div>
              <div className="customize-trip__step-copy">
                <h3 className="customize-trip__step-title">
                  Describe your dream trip
                </h3>
                <p className="customize-trip__step-text">
                  Lorem ipsum dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
            <div className="customize-trip__step">
              <div className="customize-trip__step-marker">
                <Image
                  src={Polygon}
                  alt=""
                  className="customize-trip__step-diamond"
                  width={80}
                  height={120}
                  aria-hidden
                />
                <span className="customize-trip__step-number">2</span>
                                <div className="customize-trip__step-line" />
              </div>
              <div className="customize-trip__step-copy">
                <h3 className="customize-trip__step-title">Get matched</h3>
                <p className="customize-trip__step-text">
                  Lorem ipsum dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
            <div className="customize-trip__step">
              <div className="customize-trip__step-marker">
                <Image
                  src={Polygon}
                  alt=""
                  className="customize-trip__step-diamond"
                  width={80}
                  height={120}
                  aria-hidden
                />
                <span className="customize-trip__step-number">3</span>
              </div>
              <div className="customize-trip__step-copy">
                <h3 className="customize-trip__step-title">
                  Book your vacation
                </h3>
                <p className="customize-trip__step-text">
                  Lorem ipsum dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


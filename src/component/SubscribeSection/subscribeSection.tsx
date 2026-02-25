import Image from "next/image";
import "./subscribeSection.css";

function SubscribeSection() {
  return (
    <section className="subscribe">
      <div className="subscribe__inner">
        <div className="subscribe__cta-wrap">
          <div className="subscribe__cta-frame">
            <span className="subscribe__cta-line subscribe__cta-line--top" />
            <button className="subscribe__cta-button">
              Start a trip request
            </button>
            <span className="subscribe__cta-line subscribe__cta-line--bottom" />
          </div>
        </div>

        <div className="subscribe__card">
        
          <div className="subscribe__card-content">
            <h3 className="subscribe__card-title">
              Get weekly inspiration and expert advice
            </h3>
            <form>
              <input
                type="email"
                className="subscribe__input"
                placeholder="Email address"
              />
              <button type="submit" className="subscribe__submit">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;


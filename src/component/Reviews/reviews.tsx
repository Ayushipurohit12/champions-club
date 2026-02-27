"use client";

import Image from "next/image";
import ArrowIcon from "../../assets/arrow.svg";
import "./reviews.css";
import profile from "../../assets/man-wearing-waistcoat.png";

const testimonials = [
  {
    id: 1,
    name: "Eduard Hand",
    role: "UI/UX Designer",
    text: `\"Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s It was popular in the 1960s with the release of Letraset sheets containing Lorem Ipsum.\"`,
  },
  {
    id: 2,
    name: "Eduard Hand",
    role: "UI/UX Designer",
    text: `\"Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s It was popular in the 1960s with the release of Letraset sheets containing Lorem Ipsum.\"`,
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__horizon" aria-hidden />
      <div className="reviews__inner">
        <header className="reviews__header">
          <div className="reviews__title-wrap">
            <h2 className="reviews__title-line">Customers</h2>
            <h2 className="reviews__title-line">reviews</h2>
            <div className="reviews__title-ornament" aria-hidden>
              <span className="reviews__diamond" />
            </div>
          </div>
          <div className="reviews__header-divider" aria-hidden>
            <span className="reviews__line" />
            <span className="reviews__crown" />
            <span className="reviews__line" />
          </div>
        </header>
        <div className="reviews__cards">
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              className={`reviews__card ${
                index === 1 ? "reviews__card--active" : ""
              }`}
            >
              <div className="reviews__card-frame">
                <div className="reviews__card-header">
                  <div className="reviews__avatar">
                    <Image
                      src={profile}
                      alt={item.name}
                      className="reviews__avatar-img"
                    />
                  </div>
                </div>

                <div className="reviews__card-body">
                  <p className="reviews__text">{item.text}</p>
                  <div className="reviews__author">
                    <p className="reviews__author-name">- {item.name}</p>
                    <p className="reviews__author-role">{item.role}</p>
                  </div>
                </div>

                {index === 1 && (
                  <button
                    className="reviews__next"
                    type="button"
                    aria-label="Next review"
                  >
                    <Image
                      src={ArrowIcon}
                      alt=""
                      className="reviews__next-icon"
                    />
                  </button>
                )}

                <div className="reviews__card-crown" aria-hidden>
                  <span className="reviews__card-crown-icon" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


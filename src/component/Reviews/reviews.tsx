"use client";

import { useRef } from "react";
import Image from "next/image";
import "./reviews.css";

import profile from "../../assets/man-wearing-waistcoat.png";
import icon from "../../assets/icon.svg";
import ArrowIcon from "../../assets/arrow.svg";

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
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!cardsRef.current) return;
    const card = cardsRef.current.querySelector(
      ".reviews__card"
    ) as HTMLElement;
    const gap = 48;
    cardsRef.current.scrollBy({
      left: card.offsetWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="reviews">
      <div className="reviews__inner">
        <header className="reviews__header">
          <div className="reviews__title-wrap">
            <div className="reviews__diamond" />
            <h2 className="reviews__title">
              Customers <br /> Reviews
            </h2>
          </div>
          <div className="reviews__divider">
            <span className="reviews__line" />
            <span className="reviews__crown-line" />
            <span className="reviews__line" />
          </div>
        </header>
        <div className="reviews__cards-wrap">
          <div className="reviews__cards" ref={cardsRef}>
            {testimonials.map((item) => (
              <article key={item.id} className="reviews__card">
                <div className="reviews__card-frame">
                  <div className="reviews__card-crown">
                    <Image src={icon} alt="" width={50} height={40} />
                  </div>

                  <div className="reviews__avatar">
                    <Image
                      src={profile}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="reviews__avatar-img"
                    />
                  </div>

                  <p className="reviews__text">{item.text}</p>

                  <div className="reviews__author">
                    <p className="reviews__author-name">- {item.name}</p>
                    <p className="reviews__author-role">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            className="reviews__next"
            onClick={handleNext}
            aria-label="Next review"
          >
            <Image src={ArrowIcon} alt="" width={20} height={20}  className="reviews__next-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
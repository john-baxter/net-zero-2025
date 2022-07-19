import React from "react";
import LazyHero from "react-lazy-hero";
import Hero from "../images/hero.jpg";

const HeroImage = () => {
  return (
    <>
      <LazyHero
        parallaxOffset={200}
        color={"#000"}
        opacity={0.4}
        imageSrc={Hero}
      >
        <div
          className="d-flex justify-content-center"
          style={{ maxWidth: 250 + "px" }}
        >
          <div>
            <h1 className="text-white text-center bg-secondary rounded-3 p-3 fw-bolder">
              Net Zero 2025
            </h1>
            <p className="text-white fw-bold text-center pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              ullam nesciunt rerum atque sequi deleniti ea ex quas provident,
              quidem ut, fuga quo eligendi temporibus. Atque quisquam optio
              aliquid aliquam.
            </p>
          </div>
        </div>
      </LazyHero>
    </>
  );
};

export default HeroImage;

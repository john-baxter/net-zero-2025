import React, {useEffect, useState} from "react";
import axios from "axios";
import LazyHero from "react-lazy-hero";
import Hero from "../images/hero.jpg";

const HeroImage = () => {
  const [error, setError] = useState(null);
  const [heroText, setHeroText] = useState("Welcome to the AND Net Zero Hub!");

  useEffect(() => {
    axios
      .get("https://fierce-inlet-05264.herokuapp.com/api/hero-text")
      .then(({ data }) => {
          setHeroText(data.data.attributes.hero_text_content);
      })
      .catch((error) => setError(error));
  });

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

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
              { heroText }
            </p>
          </div>
        </div>
      </LazyHero>
    </>
  );
};

export default HeroImage;

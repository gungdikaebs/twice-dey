import React from "react";
import "./Hero.css";
import { BiUserPin, BiCamera, BiMap } from "react-icons/bi";
import hero_img from "../../assets/hero_img.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container-hero">
        <div className="left">
          <h1 className="title">Forget Busy Work, Start Next vacation</h1>
          <p className="desc">
            We provide what you need to enjoy your holiday with family time to
            make another memorable moments.
          </p>
          <form action="">
            <button formaction="./Recommendation" className="button">
              Show Me Now
            </button>
          </form>
          <div className="hero-icons">
            <div className="icons">
              <BiUserPin className="icon" />
              <p className="desc">80.409 travelers</p>
            </div>
            <div className="icons">
              <BiMap className="icon" />
              <p className="desc">1.493 cities</p>
            </div>
            <div className="icons">
              <BiCamera className="icon" />
              <p className="desc">238 treasure</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="hero-image" src={hero_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import { BiUserPin, BiCamera, BiMap } from "react-icons/bi";
import hero_img from "../../assets/hero_img.png";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="container-hero">
        <div className="left">
          <h1 className="title">Forget Busy Work, Start Next vacation</h1>
          <p className="desc">
            We provide what you need to enjoy your holiday with family time to
            make another memorable moments.
          </p>
          <button className="button">
            Show Me Now
          </button>
          <div className="hero-icons">
            <div className="traveler-icon">
              <BiUserPin/>
            <p className="desc">80.409 travelers</p>
            </div>
            <div className="cities-icon">
              <BiMap/>
            <p className="desc">1.493 cities</p>
            </div>
            <div className="treasure-icon">
              <BiCamera/>
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

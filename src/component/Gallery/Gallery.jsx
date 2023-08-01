import React from "react";
import "./Gallery.css";
import { RecommendImages } from "../../constants/constants";
import { BiSearch } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Gallery = () => {
  return (
    <section className="recommend">
      <div className="container-recommend">
        <div className="wrapper-head">
          <h2 className="title">
            TWICE <span>DEY</span>
          </h2>
          <div className="search-bar">
            <input
              className="input-search"
              type="text"
              placeholder="Search.."
            />
            <button className="button-search" type="submit">
              <BiSearch className="icon" />
            </button>
          </div>
        </div>
        <div className="wrapper-destination">
          <div className="search-bar">
            <input
              className="input-search"
              type="text"
              placeholder="Kuta, Badung"
            />
            <button className="button-search" type="submit">
              <BiSearch className="icon" />
            </button>
          </div>
        </div>
        <div className="wrapper-body">
          <div className="gallery">
            {RecommendImages.map(({ id, image }) => (
              <div className="images" id="" key={id}>
                <img className="gallery-image" src={image} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

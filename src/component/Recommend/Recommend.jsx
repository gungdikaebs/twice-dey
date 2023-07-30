import React from "react";
import "./Recommend.css";
import { RecommendImages } from "../../constants/constants";
import { BiSearch } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// import required modules
import { Navigation } from "swiper/modules";

const Recommend = () => {
  return (
    <section className="recommend">
      <div className="container-recommend">
        <div className="wrapper-head">
          <h2 className="title">Recommendation</h2>
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
        <div className="wrapper-body">
          <div className="content">
            {RecommendImages.map(({ id, image }) => (
              <div className="images" id="" key={id}>
                <img className="recommend-image" src={image} alt="img" />
              </div>
            ))}
          </div>
        </div>
        <button className="button">more</button>
      </div>
    </section>
  );
};

export default Recommend;

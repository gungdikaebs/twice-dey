import React from "react";
import "./MostPicked.css";
import { MostPickedData } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "./sliderSettings";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MostPicked = () => {
  return (
    <section className="mostpicked">
      <div className="container-mostpicked">
        <h3 className="title">Most Picked</h3>

        <Swiper
          {...sliderSettings}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}>
          <div className="content">
            {MostPickedData.map(
              ({ id, title, description, image, price, star, wishlist }) => (
                <SwiperSlide>
                  <div
                    className="mostpicked-images"
                    id="mostPickedHover"
                    key={id}>
                    <img className="image" src={image} alt="img" />
                    <div className="container-description">
                      <div className="description">
                        <h2 className="title">{title}</h2>
                        <p className="desc">{description}</p>
                        <h2 className="price">Rp.{price}</h2>
                        <button className="button">Book Now</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default MostPicked;

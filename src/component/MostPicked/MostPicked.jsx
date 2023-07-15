import React from "react";
import "./MostPicked.css";
import { MostPickedData } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const MostPicked = () => {
  return (
    <section className="mostpicked">
      <div className="container-mostpicked">
        <h3 className="title">Most Picked</h3>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          <div className="content">
            {MostPickedData.map(
              ({ id, title, description, image, price, star, wishlist }) => (
                <SwiperSlide>
                  <div
                    className="mostpicked-images"
                    id="mostPickedHover"
                    key={id}>
                    <img className="image" src={image} alt="img" />
                    <div className="description">
                      <h2 className="title">{title}</h2>
                      <p className="desc">{description}</p>
                      <h2 className="price">Rp.{price}</h2>
                      <button className="button">Book Now</button>
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

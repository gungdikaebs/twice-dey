import React from "react";
import "./MostPicked.css";
import { MostPickedData } from "../../constants/constants";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';



const MostPicked = () => {
  return (
    <section className="mostpicked">
      <div className="container-mostpicked">
          <h3 className="title">Most Picked</h3>
          <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="Swiper-MostPicked"
          >
        <div className="content">
          {MostPickedData.map(
            ({ id, title, description, image, price, star, wishlist }) => (
              <SwiperSlide>
            <div className="mostpicked-images" id="mostPickedHover" key={id}>
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
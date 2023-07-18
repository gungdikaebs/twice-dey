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
                        <input className="input-search" type="text" placeholder="Search.." />
                        <button className="button-search" type="submit"><BiSearch className="icon"/></button>
                    </div>
                </div>
                <div className="wrapper-body">
                    <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}>
                    <div className="content">
                        {RecommendImages.map(
                        ({ id, image }) => (
                            <SwiperSlide>
                            <div
                                className="mostpicked-images"
                                id="mostPickedHover"
                                key={id}>
                                <img className="image" src={image} alt="img" />
                                {/* <div className="container-description">
                                <div className="description">
                                    <h2 className="title">{title}</h2>
                                    <p className="desc">{description}</p>
                                    <h2 className="price">Rp.{price}</h2>
                                    <button className="button">Book Now</button>
                                </div>
                                </div> */}
                            </div>
                            </SwiperSlide>
                        )
                        )}
                    </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Recommend;

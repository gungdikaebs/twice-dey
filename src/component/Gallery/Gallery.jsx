import React, { useState } from "react";
import "./Gallery.css";
import { RecommendImages } from "../../constants/constants";
import { BiSearch } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk menyimpan nilai input pencarian

  // Fungsi untuk mengupdate state ketika nilai input berubah
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Fungsi untuk mendapatkan gambar berdasarkan query pencarian
  const getFilteredImages = () => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (trimmedQuery === "") {
      return RecommendImages; // Jika pencarian kosong, tampilkan semua isi dari RecommendImages
    } else {
      // Jika ada pencarian, filter gambar berdasarkan judul (title)
      return RecommendImages.filter((image) =>
        image.title.toLowerCase().includes(trimmedQuery)
      );
    }
  };

  return (
    <section className="gallery">
      <div className="container-gallery">
        <div className="wrapper-head">
          <h2 className="title">
            TWICE <span>DEY</span>
          </h2>
          <div className="search-bar">
            <input
              className="input-search"
              type="text"
              placeholder="Search.."
              value={searchQuery} // Binding nilai input dengan state
              onChange={handleChange} // Panggil fungsi handleChange ketika nilai input berubah
            />
            <button className="button-search" type="submit">
              <BiSearch className="icon" />
            </button>
          </div>
        </div>

        <div className="wrapper-body">
          <div className="gallery">
            {getFilteredImages().map(({ id, image }) => (
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

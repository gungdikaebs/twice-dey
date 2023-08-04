import React, { useState } from "react";
import "./Gallery.css";
import { RecommendImages } from "../../constants/constants";
import { BiSearch } from "react-icons/bi";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk menyimpan nilai input pencarian

  // Fungsi untuk mengupdate state ketika nilai input berubah
  const handleChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Fungsi untuk menampilkan gambar berdasarkan pencarian dan filter kategori
  const getFilteredImages = () => {
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      return RecommendImages; // Jika tidak ada query, tampilkan semua gambar
    }

    const filteredImages = RecommendImages.filter((image) => {
      const lowerCasedTitle = image.title.toLowerCase();
      const lowerCasedCategory = image.categories.toLowerCase();

      return (
        lowerCasedTitle.includes(trimmedQuery) ||
        lowerCasedCategory.includes(trimmedQuery)
      );
    });

    return filteredImages;
  };

  return (
    <section className="gallery">
      <div className="container-gallery">
        <div className="wrapper-head">
          <h2 className="title">
            <a href="../">
              TWICE <span>DEY</span>
            </a>
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
            {getFilteredImages().map(({ id, image, title }) => (
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

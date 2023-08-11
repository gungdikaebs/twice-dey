import React, { useRef, useState, useMemo } from "react";
import "./Gallery.css";
import { RecommendImages } from "../../constants/constants";
import { BiSearch } from "react-icons/bi";
import Pagination from "./GalleryPage/Pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

let PageSize = 8;

const Gallery = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return RecommendImages.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  // tutup pagination

  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk mengupdate state ketika nilai input berubah
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Fungsi untuk mendapatkan gambar berdasarkan query pencarian
  const getFilteredImages = () => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (trimmedQuery === "") {
      return currentTableData;
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
            <a href="./">
              {" "}
              TWICE <span>DEY</span>{" "}
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
            {getFilteredImages().map(({ id, image }) => (
              <div className="images" id="" key={id}>
                <img className="gallery-image" src={image} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={RecommendImages.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

export default Gallery;

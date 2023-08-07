import React, { useState } from "react";
import "./Navbar.css";
import ModalProfilePicture from "./ModalProfilePicture"; // Ganti dengan path sesuai lokasi komponen ModalProfilePicture
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  // Fungsi untuk membuka modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="navbar">
      <div className="container-navbar">
        <div className="content">
          <div className="left">
            TWICE <span>DEY</span>
          </div>
          <div className="right">
            <div className="text">
              <a href="./">Home</a>
              <a href="#facilities">Facilities</a>
              <a href="#recommend">Recommend</a>
            </div>
            <div className="profiles" onClick={handleOpenModal}>
              <BiUser className="profile" />
            </div>
            <ModalProfilePicture
              isOpen={showModal}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

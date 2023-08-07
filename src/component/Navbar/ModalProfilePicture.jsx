import React, { useState } from "react";
import "./ModalProfilePicture.css"; // Ganti dengan nama file CSS yang sesuai
import { BiUser } from "react-icons/bi";

const ModalProfilePicture = ({ isOpen, onClose }) => {
  const [profilePicture, setProfilePicture] = useState(null); // State untuk menyimpan foto profil yang akan diganti
  const [name, setName] = useState("John Doe"); // Contoh nilai nama user (ganti dengan data user sesuai kebutuhan)
  const [email, setEmail] = useState("john.doe@example.com"); // Contoh nilai email user (ganti dengan data user sesuai kebutuhan)

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = () => {
    // Lakukan logika untuk menyimpan foto profil baru ke backend atau mengganti gambar profil yang ada
    console.log("Foto profil telah diganti:", profilePicture);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Profile</h2>
        <div className="profile-info">
          <div className="profile-picture">
            <BiUser className="profile-icon" />
            <input type="file" onChange={handleInputChange} />
          </div>
          <div className="profile-details">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        </div>
        <div className="button-container">
          <button className="edit-profile-button button">Edit Profile</button>
          <button className="other-button button">Other Button</button>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalProfilePicture;

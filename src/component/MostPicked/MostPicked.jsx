import React from "react";
import "./MostPicked.css";
import { BiUser } from "react-icons/bi";
import mostpicked_img from "../../assets/mostpicked_img.png";



const MostPicked = () => {
  return (

    <section className="mostpicked">
      <div className="container-mostpicked">
        <div className="content">
          <h3 className="title">Most Picked</h3>
          <div className="mostpicked-images">
            <img className="image" src={mostpicked_img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPicked;
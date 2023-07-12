import React from "react";
import "./MostPicked.css";
import { BiUser } from "react-icons/bi";
import { MostPickedData } from "../../constants/constants";



const MostPicked = () => {
  return (

    <section className="mostpicked">
      <div className="container-mostpicked">
        <div className="content">
          <h3 className="title">Most Picked</h3>
          {MostPickedData.map(
            ({ id, title, description, image, price, star, wishlist }) => (
            <div className="mostpicked-images" id="mostPickedHover" key={id}>
              <img className="image" src={image} alt="img" />
              <div className="description">
                <h2 className="title">{title}</h2>
                <p className="desc">{description}</p>
                <h2 className="price">Rp.{price}</h2>
                <button className="button">Book Now</button>
              </div>
            </div>
            )
            )}
        </div>
      </div>
    </section>
  );
};

export default MostPicked;
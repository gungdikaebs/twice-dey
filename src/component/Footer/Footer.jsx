import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="container-footer">
        <div className="wrapper-top">
          <div className="column1">
            <div className="title">
              <h2>TWICE DEY</h2>
            </div>
            <div className="description">
              <p>
                Easy, Fast, and Reliable Reservations Manage Your Schedule with
                Ease Book Now, Enjoy the Convenience of Reservation Practical
                Reservations in the Palm of Your Hand
              </p>
            </div>
          </div>
          <div className="column2">
            <div className="title">
              <h2>Popular Location</h2>
            </div>
            <div className="description">
              <p>Kuta, Badung</p>
              <p>Sanur, Denpasar</p>
              <p>Jimbaran, Badung</p>
              <p>Canggu, Badung</p>
              <p>Ubud, Gianyar</p>
            </div>
          </div>
          <div className="column3">
            <div className="title">
              <h2>Subscribe To Our Newsletter</h2>
            </div>
            <div className="input-email">
              <input className="email" type="email" />
            </div>
            <div className="subscribe-button">
              <button className="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="wrapper-bottom">
          <p>test</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

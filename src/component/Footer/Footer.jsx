import React from "react";
import "./Footer.css";
import {
  BiPhoneCall,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoGmail,
} from "react-icons/bi";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="container-footer">
        <div className="wrapper-top">
          <div className="column1">
            <div className="title">
              <h2>
                TWICE <span>DEY</span>
              </h2>
            </div>
            <div className="description">
              <p>
                Easy, Fast, and Reliable Reservations Manage Your Schedule with
                Ease Book Now, Enjoy the Convenience of Reservation Practical
                Reservations in the Palm of Your Hand
              </p>
            </div>
            <div className="social-media">
              <div className="call icon">
                <a href="">
                  <BiPhoneCall />
                </a>
              </div>
              <div className="instagram icon">
                <a href="">
                  <BiLogoInstagram />
                </a>
              </div>
              <div className="twitter icon">
                <a href="">
                  <BiLogoTwitter />
                </a>
              </div>
              <div className="facebook icon">
                <a href="">
                  <BiLogoFacebook />
                </a>
              </div>
              <div className="email icon">
                <a href="">
                  <BiLogoGmail />
                </a>
              </div>
            </div>
          </div>
          <div className="column2">
            <div className="title">
              <h2>Popular Location</h2>
            </div>
            <div className="description">
              <a href="">
                <p>Kuta, Badung</p>
              </a>
              <a href="">
                <p>Sanur, Denpasar</p>
              </a>
              <a href="">
                <p>Jimbaran, Badung</p>
              </a>
              <a href="">
                <p>Canggu, Badung</p>
              </a>
              <a href="">
                <p>Ubud, Gianyar</p>
              </a>
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
        <div className="wrapper-bottom"></div>
      </div>
    </section>
  );
};

export default Footer;

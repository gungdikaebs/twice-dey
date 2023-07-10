import React from "react";
import "./Navbar.css";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container-navbar">
        <div className="content">
          <div className="left">
            Twice <span>Dey</span>
          </div>
          <div className="right">
            <div className="text">
              <a href="">Home</a>
              <a href="">Recommend</a>
              <a href="">Stories</a>
            </div>
            <div className="profiles">
              <BiUser
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

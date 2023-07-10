import React from "react";
import "./Navbar.css";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <section className="Navbar">
      <div className="container-navbar">
        <div className="left">
          Twice <span>Dey</span>
        </div>
        <div className="right">
          <div className="text">
            <span>Home</span>
            <span>Recommend</span>
            <span>Stories</span>
          </div>
          <div className="profiles">
            <BiUser />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

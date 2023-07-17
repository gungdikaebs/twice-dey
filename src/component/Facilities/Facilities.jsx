import React from "react";
import "./Facilities.css";
import { BiDish, BiSpa, BiBook, BiStoreAlt, BiDrink } from "react-icons/bi";


const Facilities = () => {
    return (
        <section className="facilities">
            <div className="container-facilities">
                <div className="wrapper">
                    <h2 className="title">Facilities</h2>
                    <div className="facility-icons">
                        <div className="icons">
                            <BiDish className="icon"/>
                            <p className="desc">Restaurant</p>
                        </div>
                        <div className="icons">
                            <BiSpa className="icon"/>
                            <p className="desc">Spa</p>
                        </div>
                        <div className="icons">
                            <BiBook className="icon"/>
                            <p className="desc">Library</p>
                        </div>
                        <div className="icons">
                            <BiStoreAlt className="icon"/>
                            <p className="desc">Mart</p>
                        </div>
                        <div className="icons">
                            <BiDrink className="icon"/>
                            <p className="desc">Bar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;

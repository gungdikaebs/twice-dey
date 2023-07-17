import React from "react";
import "./Fasilities.css";
import { BiDish, BiSpa, BiBook, BiStoreAlt, BiDrink } from "react-icons/bi";


const Fasilities = () => {
    return (
        <section className="fasilities">
            <div className="container-fasilities">
                <div className="wrapper">
                    <h2 className="title">Fasilities</h2>
                    <div className="fasility-icons">
                        <div className="icons">
                            <BiDish className="icon"/>
                            <p className="desc">Restaurant</p>
                        </div>
                        <div className="icons">
                            <BiSpa className="icon"/>
                            <p className="desc">SPA</p>
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

export default Fasilities;

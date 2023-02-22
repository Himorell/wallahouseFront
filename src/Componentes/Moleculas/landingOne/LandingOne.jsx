import React from "react";
import wallahouse from "../../../img/wallahouse.png";
import imagehome from "../../../img/manos.jpg";
import "./landingOne.css";

function LandingOne() {
  return (
    <div className="container">
      <div className="landingOnelogo">
        <img className="landingOneimagen" src={wallahouse} alt="logo"></img>
      </div>

      <div className="house">
        <div className="containerImage">
          <img className="imageHouse" src={imagehome} alt="house"></img>
        </div>
        <div className="subtitleContainer">
          <h1>INTERCAMBIO DE</h1>
          <h1>CASAS VACACIONALES</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingOne;

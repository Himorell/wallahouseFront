import React from "react";
import wallahouse from "../../../img/wallahouse.png";
import imagehome from "../../../img/manos.jpg";
import "./landingOne.css";
import ButtonHome from "../../atomos/buttonHome/ButtonHome";

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
        <div className="containerButton">
          <ButtonHome
            className="btnOne"
            action="/howToProtect"
            text="TENGO UNA CASA!"
          />
          <ButtonHome
            className="btnTwo"
            action="/howToProtect"
            text="QUIERO UNA CASA!"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingOne;

import React from "react";
import "../Landing/landing.css";
import quiero from "../../Assets/Landing/quierounacasa.svg";
import tengo from "../../Assets/Landing/tengounacasa.svg";
import logo from "../../Assets/Landing/wallahouselogo.svg";
import hero from "../../Assets/Landing/hero-landing.svg";
import Footer from "../../Components/footer";
import { Container } from "semantic-ui-react";

const Landing = () => {
  return (
    <div>
      <Container>
        <div className="container">
          <div className="landingOnelogo">
            <img src={logo} alt="logo"></img>
          </div>

          <div className="house">
            <div className="containerImage">
              <img src={hero} alt="hero" className="imgHouse"></img>
              <div className="titleContainerHome">
                <h1>INTERCAMBIO DE</h1>
                <h1>CASAS VACACIONALES</h1>
              </div>
            </div>

            <div className="containerButton">
              <a href="/profile">
                {" "}
                <img src={tengo} alt="tengo"></img>
              </a>
              <a href="/main">
                {" "}
                <img src={quiero} alt="quiero"></img>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Landing;

import React from 'react';
import '../App.css';
import quiero from '../Assets/Landing/quierounacasa.svg'
import tengo from '../Assets/Landing/tengounacasa.svg'
import logo from '../Assets/Landing/wallahouselogo.svg'
import hero from '../Assets/Landing/hero-landing.svg'
import Footer from "../Components/footer";
import { Link } from 'react-router-dom';
import './landing.css';



const Landing = ()=> {
return(
    <>
    <div>
        <div id="header">
            <img src={logo} alt='logo' ></img>
        </div>
        <br></br>
        <div id="image">
            <img src={hero} alt='hero' ></img>
            <h2>Intercambio de Casas Vacacionales</h2>
        </div>
        <br></br>
        <div id="select">
            <Link to="/dashboard"> <img src={quiero} alt='quiero una casa'></img>
            </Link>
            <Link to="/form"><img src={tengo} alt='tengo una casa'></img>
            </Link>
        </div>    
    </div>
<Footer />
</>
);
}

export default Landing;
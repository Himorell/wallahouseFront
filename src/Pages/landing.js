import React from 'react';
import '../App.css';
import quiero from '../Assets/Landing/quierounacasa.svg'
import tengo from '../Assets/Landing/tengounacasa.svg'
import logo from '../Assets/Landing/wallahouselogo.svg'
import hero from '../Assets/Landing/hero-landing.svg'
import Footer from "../Components/footer";



const Landing = ()=> {
return(
    <>
    <div>
        <img src={logo} alt='logo' ></img>
        <img src={hero} alt='hero' ></img>
        <img src={quiero} alt='quiero'></img>
        <img src={tengo} alt='quiero'></img>
    </div>
<Footer />
</>
);
}

export default Landing;
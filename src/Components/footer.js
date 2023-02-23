import React from "react";
import facebook from'../Assets/Footer/facebook.png'
import instagram from'../Assets/Footer/instagram.png'
import './footer.css';

const Footer = ()=> {
    return(
        <footer>
            <div id="conteiner-1">
                <div id="enlaces">
                    <p><a href="">Sobre nosotros</a></p>
                    <p><a href="">Nuestro compromiso</a></p>
                    <p><a href="">Partners</a></p>
                    <p><a href="">Trabaja con nosotros</a></p>
                    <p><a href="">Contacto</a></p> 

                </div>

                <div id="redes-footer">
                <h2>Síguenos</h2>
                    <a title="facebook" href="" target="_blank">
                        <img
                        src={facebook}
                        alt="facebook"/>
                    </a>
                    <a title="instagram" href="" target="_blank">
                        <img
                        src={instagram}
                        alt="instagram"/>
                    </a>

                </div>
            </div>

            <div id="conteiner-2">
                <div id="copyright">
                    <p>©Copyright WallaHouse2023. Todos los derechos reservados</p>
                </div> 

                <div id="legal">
                    <a href="" id="politica">Aviso Legal</a>
                    <a href="" id="privacidad">Política de Privacidad</a>
                    <a href="" id="cookies">Política de Cookies</a>
                </div>

            </div>
        
        </footer>    
    )
}
    
export default Footer

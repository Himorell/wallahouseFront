import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import houseHandler from '../Handler/houseHandler';
import Footer from "../Components/footer";
import './housePage.css';
import { Link } from 'react-router-dom';

function HousePage() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    async function fetchHouse() {
      const houseData = await houseHandler.loadHouse(id);
      setHouse(houseData);
    }
    fetchHouse();
  }, [id]);

  if (!house) {
    return <div>Loading...</div>;
  }

  const { title, price, img, category, bedrooms, bathrooms, persons, city, province, exchange, animals, pool, description } = house;
console.log(description)
  return (
    <>
    <div id="container">
      <img src={img} alt={title} />
      <div >
        <h2>{title}</h2>
        <h3>Casa {category} para {persons} personas</h3>
        <p>{bedrooms} dormitorios - {bathrooms} baños</p>
        <p> La encontrarás en {city}, población de {province}</p>
        <p>{description}</p>
        <h3>{price} € por noche</h3>
      </div>
      <div className="line"></div>
      <div id="checkbox">
        <p>Admite animales: {animals}</p>
        <p>Intercambiar esta casa: {exchange}</p>
        <p>Tiene piscina: {pool}</p>
      </div>
      <div className="line"></div>
      <div>
        <a className="float" href={`https://api.whatsapp.com/send?phone=34623008189&text=Hola%20equipo%20de%20WallaHome%20quiero%20saber%20más%20sobre%20la%20casa%20${title}`}>
          * Contactar con el dueño
        </a>
      </div>
      <Link to="/dashboard"><input id="return" type="button" value="VOLVER" /></Link>
    </div>
    <br></br>
    <Footer />
    </>
  );
}

export default HousePage;

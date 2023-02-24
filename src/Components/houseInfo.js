// import "./Product.css";
import { useLoaderData } from "react-router-dom";


function HouseInfo() {

    const { house } = useLoaderData();
    let {title, description, price, img, category, bedrooms, bathrooms, persons, city, province, exchange, animals, pool} = house;

    return (
        <div className="houseCard">
            <div className="houseCard--info">
            <img>{img}</img>
                <h1>{title}</h1>
                <p>Precio/noche: {price}€</p>
                <p>{category}</p>
                <p>{city}, {province}</p>
                <p>{description}</p>
                <div>
                    <p>Nº de habitaciones: {bedrooms}</p>
                    <p>Nº de personas: {persons}</p>
                    <p>Nº de baños: {bathrooms}</p>
                </div>
                <div>
                    if({exchange}="True"){
                        <img>Disponible para intercambios</img>
                    }
                    if({animals}="True"){
                        <img>Macotas permitidas</img>
                    }
                    if({pool}="True"){
                        <img>Con piscina</img>
                    }
                </div>
            </div>
        </div>
    )
}

export default HouseInfo
import React, { useState, useEffect } from 'react';

function HousePage() {
    const [house, setHouse] = useState([]);

    useEffect(() => {
    fetch('../../api/house.json')
        .then(response => response.json())
        .then(data => setHouse(data));
    }, []);

    return (
        <div>
        {house && (
            <ul>
            {house.map(item => (
                <li key={item.id}>
                    <img src={item.img}></img>
                    <h1>{item.title}</h1>
                    <p>Precio/noche: {item.price}€</p>
                    <p>{item.category}</p>
                    <p>{item.city}, {item.province}</p>
                    <p>{item.description}</p>
                        <div>
                        <p>Nº de habitaciones: {item.bedrooms}</p>
                        <p>Nº de personas: {item.persons}</p>
                        <p>Nº de baños: {item.bathrooms}</p>
                    </div>
                    <a
                    class="float"
                    href="https://api.whatsapp.com/send?phone=34623008189&text=Hola%20equipo%20de%20WallaHome"
                    >
                        * Contactar con el dueño
                    </a>
                </li>
            ))}
            </ul>
        )}
    </div>
    );
}

export default HousePage;

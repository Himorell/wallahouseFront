import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Footer from "../Components/footer";
import { Link } from 'react-router-dom';


function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/houses')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
      <>
        <div >
        {data && (
            
            <div id="dashboard">
            {data.map(item => (
    
                <div id="conteiner" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Precio: {item.price} €</p>
                    <p>Nº de personas: {item.persons}</p>
                    <p>Provincia: {item.province}</p>
                    <img src={item.img} alt={item.title} />
                    <div className="houseCard">
                      <Link className="house--link" to={`/house-page/${item.id}`}>
                      <p>VER MÁS</p>
                    </Link>
                    </div>
                </div>
            ))}
            </div>
        )}
        
    </div>
    <Footer />
    </>
    )
    
}

export default Dashboard;

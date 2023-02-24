import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Footer from "../Components/footer";


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
                    <img src={item.img} alt={item.name}/>
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

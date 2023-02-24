/* import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'; */

function House({ house }) {

    const { title, price, img, category, persons, province } = house;

    return (
        <div className="productCard">
            <div className="productCard--info">
                <img>{img}</img>
                <h1>{title}</h1>
                <p>Precio/noche: {price}€</p>
                <p>{category}</p>
                <p>Nº personas: {persons}</p>
                <p>{province}</p>
            </div>
            {/* <div className="productCard--buttons">
                <DeleteIcon fontSize="large" />
                <Link className="edit--link" to={`/editProduct/${product.id}`}>
                    <EditIcon fontSize="large" color="inherit" />
                </Link>
            </div> */}
        </div>
    )
}

export default House

import { Link, useLoaderData } from "react-router-dom"
import House from '../Components/house'
// import './Dashboard.css'

function Dashboard() {
    const { houses } = useLoaderData();

    return (
        <>
        {houses.map((house) => (
          <Link key={house.id} to={`houses/${house.id}`} title={house.title} className="house--link">
            <House house={house} />
          </Link>
        ))}
      </>
    )
}

export default Dashboard;

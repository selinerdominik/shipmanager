import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getShipById, type ShipOutput} from "../api.ts";

export default function ShipDetail() {
    const { id } = useParams();
    const [ship, setShip] = useState<ShipOutput>();

    useEffect(() => {
        if (!id) return;
        getShipById(parseInt(id)).then(res => setShip(res.data)).catch(console.error);
    }, [id]);

    if (!ship) return <div>Loading...</div>;

    console.log(ship);

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">{ship.name}</h1>
            <p className="mb-2">{ship.description}</p>
            <p>Created at: {new Date(ship.createdAt).toLocaleString()}</p>
            <Link to={`/edit/${ship.id}`}>Edit Ship</Link>
        </div>
    );
}
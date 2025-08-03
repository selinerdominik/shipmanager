import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getShipById, type ShipOutput} from "../api.ts";
import {BasicAuthContext} from "../AuthProvider.tsx";

export default function ShipDetail() {
    const authData = useContext(BasicAuthContext).user;
    const { id } = useParams();
    const [ship, setShip] = useState<ShipOutput>();

    useEffect(() => {
        if (!id) return;
        if (!authData) return;
        getShipById(parseInt(id), authData).then(res => setShip(res.data)).catch(console.error);
    }, [id, authData]);

    if (!ship) return <div>Loading...</div>;

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">{ship.name}</h1>
            <p className="mb-2">{ship.description}</p>
            <p>Created at: {new Date(ship.createdAt).toLocaleString()}</p>
            <Link to={`/edit/${ship.id}`}>Edit Ship</Link>
        </div>
    );
}
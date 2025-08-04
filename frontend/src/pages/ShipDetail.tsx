import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getShipById, type ShipOutput} from "../util/api.ts";
import {useRequireAuth} from "../hooks/useRequireAuth.ts";

export default function ShipDetail() {
    const authData = useRequireAuth();
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
            <h1>View Ship "{ship.name}"</h1>
            <p><strong>ID:</strong> {ship.id}</p>
            <p><strong>Description:</strong> {ship.description}</p>
            <p><strong>Created at:</strong> {new Date(ship.createdAt).toLocaleString('de-CH')}</p>
            <Link to={`/edit/${ship.id}`}>Edit Ship</Link>
        </div>
    );
}
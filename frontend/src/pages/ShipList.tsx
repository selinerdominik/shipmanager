import {useEffect, useState} from "react";
import {getAllShips, type ShipOutput} from "../api.ts";
import {Link} from "react-router-dom";

export default function ShipList() {
    const [ships, setShips] = useState<ShipOutput[]>([]);

    useEffect(() => {
        getAllShips().then(res => setShips(res.data)).catch(console.error);
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">Ships</h1>
            <ul className="list-disc pl-5">
        {ships.map(ship => (
                <li key={ship.id}>
                <Link to={`/ships/${ship.id}`}>{ship.name}</Link>
        </li>
))}
    </ul>
    </div>
);
}
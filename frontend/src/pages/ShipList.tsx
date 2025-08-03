import {useContext, useEffect, useState} from "react";
import {getAllShips, type ShipOutput} from "../api.ts";
import {Link} from "react-router-dom";
import {BasicAuthContext} from "../AuthProvider.tsx";

export default function ShipList() {
    const authData = useContext(BasicAuthContext).user;
    const [ships, setShips] = useState<ShipOutput[]>([]);

    useEffect(() => {
        if (!authData) return;
        getAllShips(authData).then(res => setShips(res.data)).catch(console.error);
    }, [authData]);

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
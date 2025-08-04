import {useEffect, useState} from "react";
import {getAllShips, type ShipOutput} from "../api.ts";
import {Link} from "react-router-dom";
import {useRequireAuth} from "../hooks/useRequireAuth.ts";

export default function ShipList() {
    const authData = useRequireAuth();
    const [ships, setShips] = useState<ShipOutput[]>([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (!authData) return;
        getAllShips(authData, page, 20).then(res => {
            setShips(res.data.ships);
            setTotalPages(res.data.totalPages);
            console.log(res.data);
        }).catch(console.error);
    }, [authData, page]);

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">Ships</h1>
            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {ships.map(ship => (
                    <tr key={ship.id}>
                        <td>{ship.name}</td>
                        <td>
                            <Link to={`/ships/${ship.id}`}>View</Link>
                            |
                            <Link to={`/edit/${ship.id}`}>Edit</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="pageButtons">
                {page > 0 && <button onClick={() => setPage(page - 1)}>Previous</button>}
                Page {page + 1} of {totalPages}
                {page < totalPages - 1 && <button onClick={() => setPage(page + 1)}>Next</button>}
            </div>
    </div>
);
}
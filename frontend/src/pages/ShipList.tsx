import {useEffect, useState} from "react";
import {getAllShips, deleteShip as apiDeleteShip, type ShipOutput} from "../util/api.ts";
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

    const deleteShip = async (id: number) => {
        if (!authData) return;
        if (window.confirm('Are you sure you want to delete this ship?')) {
            try {
                await apiDeleteShip(id, authData);
                setShips(ships.filter(ship => ship.id !== id));
            } catch (error) {
                console.error(error);
            }
        }
    };


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
                            |
                            <Link to="#" onClick={(e) => {
                                e.preventDefault();
                                deleteShip(ship.id);
                            }} className="deleteLink">Delete</Link>
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
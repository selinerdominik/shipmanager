import {Link, useNavigate} from "react-router-dom";
import {BasicAuthContext} from "../AuthProvider.tsx";
import {useContext} from "react";

export default function Menu() {
    const basicAuthContext = useContext(BasicAuthContext);
    const navigate = useNavigate();
    return (
        <nav className="mb-4 space-x-4">
            <Link to="/">Home</Link>
            -
            <Link to="/create">Create Ship</Link>
            -
            <Link to="/login">Login</Link>
            -
            <a href="#" onClick={() => {
                basicAuthContext.logout();
                navigate('/login');
            }}>Logout</a>
        </nav>
    )
}
import {Link, useNavigate} from "react-router-dom";
import {BasicAuthContext} from "./AuthProvider.tsx";
import {useContext} from "react";

export default function Menu() {
    const basicAuthContext = useContext(BasicAuthContext);
    const navigate = useNavigate();
    return (
        <nav>
            <Link to="/">Home</Link>
            -
            <Link to="/create">Create Ship</Link>
            -
            <a href="#" onClick={() => {
                basicAuthContext.logout();
                navigate('/login');
            }}>Logout</a>
        </nav>
    )
}
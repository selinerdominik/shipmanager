import {useContext, useState} from "react";
import {BasicAuthContext} from "../components/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";
import {authenticate} from "../util/api.ts";

export default function Login() {
    const basicAuthContext = useContext(BasicAuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        authenticate({username, password}).then(res => {
            console.log(res.data);
            if (res.data.status === 'ok') {
                basicAuthContext.login(window.btoa(username + ':' + password));
                navigate('/');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        }).catch((error) => {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials.');
        });
    }

    return(
        <>
            <h1>Welcome to Shipmanager</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={login}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password"/>
                <input type="submit" />
            </form>
        </>
    )
}
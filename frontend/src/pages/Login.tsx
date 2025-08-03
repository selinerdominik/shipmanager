import {useContext} from "react";
import {BasicAuthContext} from "../AuthProvider.tsx";

export default function Login() {
    const basicAuthContext = useContext(BasicAuthContext);

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
        basicAuthContext.login(window.btoa(username + ':' + password));
    }

    return(
        <>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="submit" />
            </form>
        </>
    )
}
import {createContext, type ReactNode, useLayoutEffect, useState} from "react";

type BasicAuth = {
    login: (basicAuth: string) => void;
    logout: () => void;
    user: string | undefined;
}

type AuthProviderProps = {
    children: ReactNode;
}

const BasicAuthContext = createContext<BasicAuth>({
    login: () => {},
    logout: () => {},
    user: undefined,
});

export default function AuthProvider({children}: AuthProviderProps) {

    const [user, setUser] = useState<string|undefined>(undefined);

    const login = (basicAuth: string) => {
        localStorage.setItem('basicAuth', basicAuth);
        setUser(basicAuth);
    }

    const logout = () => {
        localStorage.removeItem('basicAuth');
        setUser(undefined);
    }

    useLayoutEffect(() => {
        const basicAuth = localStorage.getItem('basicAuth');
        if (basicAuth) {
            setUser(basicAuth);
        }
    }, [])

    const basicAuth = {
        login,
        logout,
        user,
    }

    return (
        <BasicAuthContext value={basicAuth}>
            {children}
        </BasicAuthContext>
    )
};

export { BasicAuthContext }
import type {ReactNode} from "react";
import {useRequireAuth} from "../hooks/useRequireAuth.ts";
import Login from "../pages/Login.tsx";

type ProtectedResourceProps = {
    children: ReactNode;
}

export default function ProtectedResource({ children }: ProtectedResourceProps) {
    const authData = useRequireAuth();
    return (
        authData ? children : <Login />
    )
}
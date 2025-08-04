
import { useContext } from 'react';
import { BasicAuthContext } from '../components/AuthProvider.tsx';

export function useRequireAuth() {
    const { user } = useContext(BasicAuthContext);

    return user;
}

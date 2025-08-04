
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicAuthContext } from '../AuthProvider';

export function useRequireAuth() {
    const { user } = useContext(BasicAuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login', { replace: true });
        }
    }, [user, navigate]);

    return user;
}

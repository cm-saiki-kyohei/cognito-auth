import { useEffect, useState } from 'react';

export const useIdToken = () => {
    const [idToken, setIdToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIdTokenFromLocalStorage = () => {
            const keyPrefix = `CognitoIdentityServiceProvider.${import.meta.env.VITE_AWS_USER_POOLS_WEB_CLIENT_ID}`;
            const lastAuthUser = localStorage.getItem(`${keyPrefix}.LastAuthUser`);
            const idToken = lastAuthUser ? localStorage.getItem(`${keyPrefix}.${lastAuthUser}.idToken`) : null;

            idToken ? setIdToken(idToken) : setError('Failed to retrieve ID token from localStorage');
        };

        fetchIdTokenFromLocalStorage();
    }, []);

    return { idToken, error };
};
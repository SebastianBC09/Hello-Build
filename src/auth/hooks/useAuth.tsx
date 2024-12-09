import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useStore } from '../../store/useStore';

export const useAuth = () => {
  const {
    getAccessTokenSilently,
    user,
    isAuthenticated,
    logout: auth0Logout,
    isLoading,
    loginWithRedirect
  } = useAuth0();

  const setToken = useStore((state) => state.setToken);
  const clearAuth = useStore((state) => state.clearAuth);

  useEffect(() => {
    const getToken = async () => {
      try {
        if (isAuthenticated) {
          const token = await getAccessTokenSilently();
          setToken(token);
        }
      } catch (error) {
        console.error('Error getting token:', error);
        clearAuth();
      }
    };

    getToken();
  }, [isAuthenticated, getAccessTokenSilently, setToken, clearAuth]);

  const handleLogout = () => {
    clearAuth();
    auth0Logout();
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    logout: handleLogout,
    login: handleLogin
  };
};

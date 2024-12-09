import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { useStore } from '../../store/useStore';

export const useAuth = () => {
  const { getAccessTokenSilently, user, isAuthenticated, logout } = useAuth0();
  const setToken = useStore((state) => state.setToken);
  const clearAuth = useStore((state) => state.clearAuth);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then(setToken);
    }
  }, [isAuthenticated, getAccessTokenSilently, setToken]);

  const handleLogout = () => {
    clearAuth();
    logout();
  };

  return {
    user,
    isAuthenticated,
    logout: handleLogout
  };
};

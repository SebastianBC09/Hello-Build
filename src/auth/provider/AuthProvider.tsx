import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

interface Auth0ProviderWithHistory {
  children: ReactNode;
}

const Auth0ProviderWithHistory:FC<Auth0ProviderWithHistory> = ({children}) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audience,
        scope: 'openid profile email read:user read:repo'
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation='localstorage'
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;

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
    navigate(appState?.returnTo || '/');;
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
        audience: audience,
        scope: "read:current_user update:current_user_metadata"
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;

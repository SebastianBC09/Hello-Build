import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

interface Auth0ProviderWithHistoryProps {
  children: ReactNode;
}

const Auth0ProviderWithHistory: FC<Auth0ProviderWithHistoryProps> = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const navigate = useNavigate();

  const callbackUrl = 'http://localhost:3000/callback';

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || '/');
  };

  if (!(domain && clientId && audience)) {
    console.error('Missing required Auth0 environment variables');
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: callbackUrl,
        audience: audience,
        scope: "openid profile email read:user repo read:repo offline_access",
        connection: "github"
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

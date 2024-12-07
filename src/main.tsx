import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/provider/AuthProvider.tsx'
import ApolloProviderWithConfig from './apollo/provider/ApolloProvider.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ApolloProviderWithConfig>
          <App />
        </ApolloProviderWithConfig>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </StrictMode>,
)

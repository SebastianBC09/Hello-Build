import { FC, ReactNode } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth } from '../../auth/hooks/useAuth';

interface ApolloProviderWithConfig {
  children: ReactNode;
}

const ApolloProviderWithConfig: FC<ApolloProviderWithConfig> = ({ children }) => {
  const { getToken } = useAuth();
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      }
    };
  });

  const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        viewer: {
          merge: true,
        },
        repositories: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return {
              ...incoming,
              nodes: [...(existing.nodes || []), ...(incoming.nodes || [])]
            };
          }
        }
      }
    }
  }
});

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloProviderWithConfig;

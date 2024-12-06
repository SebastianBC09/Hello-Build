import { ApolloError } from '@apollo/client';

export const handleApolloError = (error: ApolloError) => {
  if (error.networkError) {
    console.error('Network error:', error.networkError);
    return 'Network error occurred';
  }

  if (error.graphQLErrors) {
    console.error('GraphQL errors:', error.graphQLErrors);
    return error.graphQLErrors[0]?.message || 'GraphQL error occurred';
  }

  return 'An unexpected error occurred';
};

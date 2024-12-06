import { gql } from '@apollo/client';

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    viewer {
      login
      name
      bio
      avatarUrl
      email
    }
  }
`;

export const GET_USER_REPOSITORIES = gql`
  query GetUserRepositories($first: Int!, $after: String) {
    viewer {
      repositories(first: $first, after: $after) {
        nodes {
          id
          name
          description
          url
          stargazerCount
          primaryLanguage {
            name
            color
          }
          isPrivate
          updatedAt
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
      }
    }
  }
`;

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $first: Int!) {
    search(query: $query, type: REPOSITORY, first: $first) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          stargazerCount
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`;

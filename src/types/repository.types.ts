export interface Repository {
  id: number;
  name: string;
  description: string | null;
  url: string;
  isPrivate: boolean;
  stargazerCount: number;
  updatedAt: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
}

export interface RepositoryResponse {
  viewer: {
    repositories: {
      nodes: Repository[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
    };
  };
}

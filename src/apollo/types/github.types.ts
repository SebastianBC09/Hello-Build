export interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: {
    name: string;
    color: string;
  } | null;
  url: string;
  stargazerCount: number;
  isPrivate: boolean;
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

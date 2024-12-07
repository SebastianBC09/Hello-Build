import { api } from './api';
import { Repository, RepositoryResponse } from '../apollo/types/github.types';

export const repositoryService = {
  getRepositories: async (): Promise<Repository[]> => {
    const { data } = await api.get<RepositoryResponse>('/api/github/repositories');
    return data.viewer.repositories.nodes;
  },

  searchRepositories: async (query: string): Promise<Repository[]> => {
    const { data } = await api.get<RepositoryResponse>(`/api/github/search?q=${query}`);
    return data.viewer.repositories.nodes;
  },

  getFavorites: async(): Promise<Repository[]> => {
    const { data } = await api.get<Repository[]>('/api/github/favorites');
    return data;
  },

  toggleFavorite: async(repoId: number): Promise<{ success: boolean; message: string }> => {
    const { data } = await api.post<{ success: boolean; message: string }>(`/api/github/favorites/${repoId}`)
    return data;
  }
}

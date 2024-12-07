import axios from 'axios';
import { api } from './api';
import { Repository, RepositoryResponse } from '../apollo/types/github.types';
import { ServiceError } from '../types/error.types';

export const repositoryService = {
  getRepositories: async (): Promise<Repository[]> => {
    try {
      const { data } = await api.get<RepositoryResponse>('/api/github/repositories');
      return data.viewer.repositories.nodes;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new ServiceError(error.response?.data?.message || 'Failed to fetch repositories','FETCH_ERROR',error.response?.status);
      }
      throw new ServiceError('An unexpected error occurred');
    }
  },

  searchRepositories: async (query: string): Promise<Repository[]> => {
    try {
      const { data } = await api.get<RepositoryResponse>(`/api/github/search?q=${query}`);
      return data.viewer.repositories.nodes;
    } catch (error) {
      if (axios.isAxiosError(error)) {
      throw new ServiceError(error.response?.data?.message || 'Failed to fetch repositories','FETCH_ERROR',error.response?.status);
      }
      throw new ServiceError('An unexpected error occurred');
    }
  },

  getFavorites: async(): Promise<Repository[]> => {
    try {
      const { data } = await api.get<Repository[]>('/api/github/favorites');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new ServiceError(error.response?.data?.message || 'Failed to fetch repositories','FETCH_ERROR',error.response?.status);
      }
      throw new ServiceError('An unexpected error occurred');
    }
  },

  toggleFavorite: async(repoId: number): Promise<{ success: boolean; message: string }> => {
    try {
      const { data } = await api.post<{ success: boolean; message: string }>(`/api/github/favorites/${repoId}`)
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new ServiceError(error.response?.data?.message || 'Failed to fetch repositories','FETCH_ERROR',error.response?.status);
      }
      throw new ServiceError('An unexpected error occurred');
    }
  }
}

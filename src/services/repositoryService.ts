import api from './api';
import { Repository } from '../types/repository.types';
import { ServiceError } from '../types/error.types';

export const repositoryService = {
  getRepositories: async () => {
    try {
      const response = await api.get('/api/github/repositories');
      return response;
    } catch (error: any) {
      console.error('Repository fetch error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });

      throw new ServiceError(
        error.response?.data?.error || 'Failed to fetch repositories',
        error.response?.data?.code,
        error.response?.status
      );
    }
  },

  searchRepositories: async (query: string) => {
    try {
      const response = await api.get(`/api/github/repositories/search?query=${query}`);
      return response.data;
    } catch (error) {
      console.error('Search repositories error:', error);
      throw error;
    }
  },

  getFavorites: async () => {
    try {
      const response = await api.get('/api/favorites');
      return response.data;
    } catch (error) {
      console.error('Get favorites error:', error);
      throw error;
    }
  },

  addFavorite: async (repository: Repository) => {
    try {
      const response = await api.post(`/api/favorites/${repository.id}`, { repository });
      return response.data;
    } catch (error) {
      console.error('Add favorite error:', error);
      throw error;
    }
  },

  removeFavorite: async (repoId: string) => {
    try {
      const response = await api.delete(`/api/favorites/${repoId}`);
      return response.data;
    } catch (error) {
      console.error('Remove favorite error:', error);
      throw error;
    }
  },
};

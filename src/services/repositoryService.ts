import api from './api';
import { Repository } from '../types/repository.types';

export const repositoryService = {
  getRepositories: () =>
    api.get('/api/github/repositories'),

  searchRepositories: (query: string) =>
    api.get(`/api/github/repositories/search?query=${query}`),

  getFavorites: () =>
    api.get('/api/favorites'),

  addFavorite: (repository: Repository) =>
    api.post(`/api/favorites/${repository.id}`, { repository }),

  removeFavorite: (repoId: string) =>
    api.delete(`/api/favorites/${repoId}`),
};

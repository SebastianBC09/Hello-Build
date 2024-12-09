import { StateCreator } from 'zustand';
import { Repository } from '../../types/repository.types'; // Updated import
import { repositoryService } from '../../services/repositoryService';

export interface FavoritesSlice {
  favorites: Repository[];
  isLoading: boolean;
  addFavorite: (repo: Repository) => Promise<void>;
  removeFavorite: (repoId: string) => Promise<void>;
  fetchFavorites: () => Promise<void>;
}

export const createFavoritesSlice: StateCreator<FavoritesSlice> = (set, get) => ({
  favorites: [],
  isLoading: false,

  fetchFavorites: async () => {
    try {
      set({ isLoading: true });
      const { data } = await repositoryService.getFavorites();
      set({ favorites: data.favorites });
    } finally {
      set({ isLoading: false });
    }
  },

  addFavorite: async (repo) => {
    try {
      await repositoryService.addFavorite(repo);
      set((state) => ({
        favorites: [...state.favorites, repo]
      }));
    } catch (error) {
      console.error('Failed to add favorite:', error);
      throw error;
    }
  },

  removeFavorite: async (repoId) => {
    try {
      await repositoryService.removeFavorite(repoId);
      set((state) => ({
        favorites: state.favorites.filter((repo) => repo.id !== repoId)
      }));
    } catch (error) {
      console.error('Failed to remove favorite:', error);
      throw error;
    }
  }
});

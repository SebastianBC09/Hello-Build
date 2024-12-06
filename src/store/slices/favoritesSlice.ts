import { StateCreator } from 'zustand';
import { Repository } from '../../apollo/types/github.types';

export interface FavoritesSlice {
  favorites: Repository[];
  addFavorite: (repo: Repository) => void;
  removeFavorite: (repoId: string) => void;
}

export const createFavoritesSlice: StateCreator<FavoritesSlice> = (set) => ({
  favorites: [],
  addFavorite: (repo) =>
    set((state) => ({
      favorites: [...state.favorites, repo]
    })),
  removeFavorite: (repoId) =>
    set((state) => ({
      favorites: state.favorites.filter((repo) => repo.id !== repoId)
    }))
});

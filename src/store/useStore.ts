import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserSlice, createUserSlice } from './slices/userSlice';
import { FavoritesSlice, createFavoritesSlice } from './slices/favoritesSlice';
import { SearchSlice, createSearchSlice } from './slices/searchSlice';

type StoreState = UserSlice & FavoritesSlice & SearchSlice

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createFavoritesSlice(...a),
      ...createSearchSlice(...a),
    }),
    {
      name: 'hello-build-storage',
    }
  )
);

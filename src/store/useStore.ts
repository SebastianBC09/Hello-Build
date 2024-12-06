import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserSlice, createUserSlice } from './slices/userSlice';
import { FavoritesSlice, createFavoritesSlice } from './slices/favoritesSlice';

type StoreState = UserSlice & FavoritesSlice;

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createFavoritesSlice(...a)
    }),
    {
      name: 'hello-build-storage',
    }
  )
);

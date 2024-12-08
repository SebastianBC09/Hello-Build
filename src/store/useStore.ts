import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthSlice, createAuthSlice } from './slices/AuthSlice';
import { UserSlice, createUserSlice } from './slices/userSlice';
import { FavoritesSlice, createFavoritesSlice } from './slices/favoritesSlice';
import { SearchSlice, createSearchSlice } from './slices/searchSlice';


type StoreState = UserSlice & FavoritesSlice & SearchSlice & AuthSlice;

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createFavoritesSlice(...a),
      ...createSearchSlice(...a),
      ...createAuthSlice(...a),
    }),
    {
      name: 'hello-build-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        tokens: state.tokens
      })
    }
  )
);

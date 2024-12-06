import { StateCreator } from 'zustand';
import { AuthUser } from '../../auth/types/auth.types';

export interface UserSlice {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  setUser: (user) => set({ user })
});

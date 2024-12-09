import { StateCreator } from 'zustand';
interface User {
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
}
export interface UserSlice {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  setUser: (user) => set({ user })
});

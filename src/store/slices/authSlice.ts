import { StateCreator } from 'zustand';

export interface AuthSlice {
  isAuthenticated: boolean;
  token: string | null;
  setToken: (token: string) => void;
  clearAuth: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isAuthenticated: false,
  token: null,
  setToken: (token) => {
    set({ token, isAuthenticated: true });
    localStorage.setItem('auth_token', token);
  },
  clearAuth: () => {
    set({ token: null, isAuthenticated: false });
    localStorage.removeItem('auth_token');
  }
});

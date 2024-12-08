import { StateCreator } from 'zustand';
import { AuthUser } from '../../auth/types/auth.types';

export interface AuthSlice {
  isAuthenticated: boolean;
  user: AuthUser | null;
  tokens: {
    accessToken: string | null;
    idToken: string | null;
    githubToken: string | null;
  };
  setAuth: (tokens: {
    accessToken: string;
    idToken: string;
    githubToken: string;
  }) => void;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isAuthenticated: false,
  user: null,
  tokens: {
    accessToken: null,
    idToken: null,
    githubToken: null
  },
  setAuth: (tokens) => {
    localStorage.setItem('access_token', tokens.accessToken);
    localStorage.setItem('id_token', tokens.idToken);
    localStorage.setItem('github_token', tokens.githubToken);

    set({
      isAuthenticated: true,
      tokens: {
        accessToken: tokens.accessToken,
        idToken: tokens.idToken,
        githubToken: tokens.githubToken
      }
    });
  },
  setUser: (user: AuthUser | null) => set({ user }),
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('github_token');

    set({
      isAuthenticated: false,
      user: null,
      tokens: {
        accessToken: null,
        idToken: null,
        githubToken: null
      }
    });
  }
});

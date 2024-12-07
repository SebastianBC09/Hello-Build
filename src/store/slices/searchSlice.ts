import { StateCreator } from 'zustand';

export interface SearchSlice {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const createSearchSlice: StateCreator<SearchSlice> = (set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query })
});

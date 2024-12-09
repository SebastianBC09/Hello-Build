import { useState, useCallback, useEffect } from 'react';
import { repositoryService } from '../services/repositoryService';
import { Repository } from '../types/repository.types';
import { useStore } from '../store/useStore';

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const searchQuery = useStore(state => state.searchQuery);

  const fetchRepositories = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await repositoryService.getRepositories();
      setRepositories(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch repositories'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const searchRepositories = useCallback(async (query: string) => {
    if (!query.trim()) {
      return fetchRepositories();
    }

    try {
      setIsLoading(true);
      setError(null);
      const { data } = await repositoryService.searchRepositories(query);
      setRepositories(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to search repositories'));
    } finally {
      setIsLoading(false);
    }
  }, [fetchRepositories]);

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      if (searchQuery) {
        searchRepositories(searchQuery);
      } else {
        fetchRepositories();
      }
    }, 300);

    return () => clearTimeout(debounceSearch);
  }, [searchQuery, searchRepositories, fetchRepositories]);

  return {
    repositories,
    isLoading,
    error,
    fetchRepositories,
    searchRepositories
  };
};

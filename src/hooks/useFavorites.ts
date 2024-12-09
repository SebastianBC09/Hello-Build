import { useState, useEffect } from 'react';
import { repositoryService } from '../services/repositoryService';
import { Repository } from '../types/repository.types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const data = await repositoryService.getFavorites();
      setFavorites(data.favorites || []); // Add fallback empty array
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch favorites'));
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async (repository: Repository) => {
    try {
      await repositoryService.addFavorite(repository);
      await fetchFavorites();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add favorite'));
    }
  };

  const removeFavorite = async (repoId: string) => {
    try {
      await repositoryService.removeFavorite(repoId);
      await fetchFavorites();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to remove favorite'));
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return { favorites, loading, error, addFavorite, removeFavorite };
};

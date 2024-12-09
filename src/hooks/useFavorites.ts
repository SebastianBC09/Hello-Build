import { useState, useEffect } from 'react';
import { repositoryService } from '../services/repositoryService';
import { Repository } from '../types/repository.types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      const { data } = await repositoryService.getFavorites();
      setFavorites(data.favorites);
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async (repository: Repository) => {
    await repositoryService.addFavorite(repository);
    fetchFavorites();
  };

  const removeFavorite = async (repoId: string) => {
    await repositoryService.removeFavorite(repoId);
    fetchFavorites();
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return { favorites, loading, addFavorite, removeFavorite };
};

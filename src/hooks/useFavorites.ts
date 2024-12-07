import { useState, useCallback } from 'react';
import { Repository } from "../apollo/types/github.types"
import { repositoryService } from "../services/repositoryService";
import { ServiceError } from "../types/error.types";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ServiceError | null>(null);

  const fetchFavorites = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await repositoryService.getRepositories();
      setFavorites(data);
    } catch (error) {
      setError(error as ServiceError)
    } finally {
      setIsLoading(false)
    }
  },[]);

  const toggleFavorites = useCallback(async(repoId: number) => {
    try {
      const result = await repositoryService.toggleFavorite(repoId);
      if(result.success) {
        await fetchFavorites();
      }
      return result;
    } catch (error) {
      setError(error as ServiceError);
      return { success: false, message: error.message };
    }
  },[fetchFavorites])

  return { favorites, isLoading, error, fetchFavorites, toggleFavorites}
}

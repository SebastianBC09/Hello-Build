import { useState, useCallback } from 'react';
import { Repository } from "../apollo/types/github.types"
import { repositoryService } from "../services/repositoryService";
import { ServiceError } from "../types/error.types";

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ServiceError | null>(null);

  const fetchRepositories = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await repositoryService.getRepositories();
      setRepositories(data);
    } catch (error) {
      setError(error as ServiceError)
    } finally {
      setIsLoading(false)
    }
  },[]);
  return { repositories, isLoading, error, fetchRepositories}
}

import { useState, useCallback } from 'react';
import { repositoryService } from '../services/repositoryService';
import { Repository } from '../types/repository.types';
import { AxiosError } from 'axios';

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepositories = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await repositoryService.getRepositories();
      setRepositories(data);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response:', {
          data: axiosError.response.data,
          status: axiosError.response.status,
          headers: axiosError.response.headers,
        });
        setError(`Server error: ${JSON.stringify(axiosError.response.data)}`);
      } else if (axiosError.request) {
        // The request was made but no response was received
        console.error('No response received:', axiosError.request);
        setError('No response received from server');
      } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', axiosError.message);
        setError(axiosError.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { repositories, isLoading, error, fetchRepositories };
};

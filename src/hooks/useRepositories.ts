import { useState, useEffect } from 'react';
import { repositoryService } from '../services/repositoryService';
import { Repository } from '../types/repository.types';

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const { data } = await repositoryService.getRepositories();
        setRepositories(data);
      } catch (err) {
        setError('Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return { repositories, loading, error };
};

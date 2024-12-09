import { useState, useCallback } from 'react';
import { ServiceError } from '../types/error.types';
import { repositoryService } from '../services/repositoryService';
import { Repository } from '../types/repository.types';

export const useRepositorySearch = () => {
  const [searchResults, setSearchResults] = useState<Repository[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<ServiceError | null>(null);

  const searchRepositories = useCallback(async(query: string) => {
    if(!query.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setIsSearching(true);
      const { data } = await repositoryService.searchRepositories(query);
      setSearchResults(data);
    } catch (error) {
      setSearchError(error as ServiceError);
    } finally {
      setIsSearching(false);
    }
  },[]);

  return { searchResults, isSearching, searchError, searchRepositories };
};

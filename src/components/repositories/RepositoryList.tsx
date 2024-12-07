import { FC, useEffect } from 'react';
import { Alert, AlertTitle, Box, CircularProgress, Typography } from '@mui/material';
import RepoCard from './RepoCard';
import { useRepositories } from '../../hooks/useRepositories';
import { Repository } from '../../apollo/types/github.types';
interface RepositoryList {
  repositories: Repository[];
  onFavoriteToggle: (repoId: number) => void;
}

const RepositoryList: FC<ReportList> = () => {
  const { repositories, fetchRepositories, isLoading, error } = useRepositories();

  useEffect(() => {
    fetchRepositories();
  }, [fetchRepositories])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return(
      <Alert severity="error" sx={{ mb: 2 }}>
        <AlertTitle>Error</AlertTitle>
        {error.message || 'Failed to load repositories'}
      </Alert>
    );
  }

  if (!repositories.length) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="text.secondary">
          No repositories found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {repositories.map((repo) => (
        <RepoCard key={repo.id} {...repo} />
      ))}
    </Box>
  );
};

export default RepositoryList;

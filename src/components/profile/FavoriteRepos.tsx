import { FC } from 'react';
import { Box, CircularProgress, Typography, Alert, AlertTitle } from '@mui/material';
import RepoCard from '../repositories/RepoCard';
import { useFavorites } from '../../hooks/useFavorites';

const FavoriteRepos: FC = () => {
  const { favorites, loading, error } = useFavorites();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        <AlertTitle>Error</AlertTitle>
        {error.message}
      </Alert>
    );
  }

  if (!favorites || favorites.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="text.secondary">
          You haven't added any repositories to your favorites yet
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {favorites.map((repo) => (
        <RepoCard key={repo.id} {...repo} />
      ))}
    </Box>
  );
};

export default FavoriteRepos;

import { FC } from 'react';
import RepoCard from '../repositories/RepoCard';
import { Box } from '@mui/material';
import { Repository } from '../../apollo/types/github.types';
interface FavoriteRepos {
  favoriteRepos: Repository[];
  onFavoriteToggle: (repoId: number) => void;
}

const FavoriteRepos: FC<FavoriteRepos> = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
      {favoriteRepos.map((repo) => (
        <RepoCard
          key={repo.id}
          id={repo.id} // Asegúrate de pasar la prop id
          name={repo.name}
          description={repo.description}
          language={repo.language}
        />
      ))}
    </Box>
  );
};

export default FavoriteRepos;

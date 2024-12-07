import { FC } from 'react';
import { Box } from '@mui/material';
import RepoCard from './RepoCard';
import { Repository } from '../../apollo/types/github.types';

interface RepositoryList {
  repositories: Repository[];
  onFavoriteToggle: (repoId: number) => void;
}

const RepositoryList: FC<ReportList> = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {repositories.map((repo) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          language={repo.language}
        />
      ))}
    </Box>
  );
};

export default RepositoryList;

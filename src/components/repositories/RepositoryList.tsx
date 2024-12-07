import { FC } from 'react';
import { Box } from '@mui/material';
import RepoCard from './RepoCard';

const RepositoryList: FC = () => {
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

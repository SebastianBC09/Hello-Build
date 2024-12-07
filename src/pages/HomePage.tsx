import { FC } from 'react';
import { Box, Container } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import RepositoryList from '../components/repositories/RepositoryList';

const HomePage: FC = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <RepositoryList />
      </Container>
    </Box>
  );
};

export default HomePage;

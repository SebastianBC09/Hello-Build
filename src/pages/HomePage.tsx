import { FC } from 'react';
import { Box, Container } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import RepositoryList from '../components/repositories/RepositoryList';

const HomePage: FC = () => {
  return (
  <Box
      sx={{
        minHeight: '100vh',
        background: '#f5f8fc',
      }}
    >
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          py: 6,
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <RepositoryList />
      </Container>
    </Box>
  );
};

export default HomePage;

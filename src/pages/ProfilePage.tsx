import { FC } from 'react';
import { Box, Container, Typography, Paper, Avatar, Divider } from '@mui/material';
import { useAuth } from '../auth/hooks/useAuth';
import Navbar from '../components/layout/Navbar';
import FavoriteRepos from '../components/profile/FavoriteRepos';

const ProfilePage: FC = () => {
  const { user } = useAuth();

  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              src={user?.picture}
              alt={user?.name || 'Profile'}
              sx={{ width: 100, height: 100, mr: 3 }}
            />
            <Box>
              <Typography variant="h4" gutterBottom>
                {user?.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {user?.email}
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Favorite Repositories
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <FavoriteRepos />
        </Box>
      </Container>
    </Box>
  );
};

export default ProfilePage;

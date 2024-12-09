import { FC } from 'react';
import { Box, Container, Typography, Paper, Avatar, Divider } from '@mui/material';
import { useAuth } from '../auth/hooks/useAuth';
import Navbar from '../components/layout/Navbar';
import FavoriteRepos from '../components/profile/FavoriteRepos';

const ProfilePage: FC = () => {
  const { user } = useAuth();

  return (
    <Box sx={{
        minHeight: '100vh',
        background: '#f5f8fc',
      }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 2,
            background: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3,
            gap: 3
          }}>
            <Avatar
              src={user?.picture}
              alt={user?.name || 'Profile'}
              sx={{
                width: 100,
                height: 100,
                border: '3px solid #1e3c72'
              }}
            />
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: '#1e3c72',
                  fontWeight: 500,
                  mb: 1
                }}
              >
                {user?.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary' }}
              >
                {user?.email}
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              mb: 2
            }}
          >
            Favorite Repositories
          </Typography>
          <FavoriteRepos />
        </Box>
      </Container>
    </Box>
  );
};

export default ProfilePage;

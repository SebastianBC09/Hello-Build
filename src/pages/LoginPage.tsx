import { FC } from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAuth } from '../auth/hooks/useAuth';

const LoginPage: FC = () => {
  const { login } = useAuth();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: 2,
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <GitHubIcon
            sx={{
              fontSize: 56,
              color: '#1e3c72',
              mb: 3
            }}
          />

          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 500,
              color: '#1e3c72'
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mb: 4,
              color: 'text.secondary'
            }}
          >
            Manage your GitHub repositories with Hello Build
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={login}
            startIcon={<GitHubIcon />}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              textTransform: 'none',
              backgroundColor: '#1e3c72',
              '&:hover': {
                backgroundColor: '#2a5298'
              }
            }}
          >
            Continue with GitHub
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;

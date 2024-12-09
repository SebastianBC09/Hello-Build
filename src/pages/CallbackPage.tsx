import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, CircularProgress, Typography, Container } from '@mui/material';

const CallbackPage: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, error } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        navigate('/');
      } else if (!error) {
        navigate('/login');
      }
    }
  }, [isLoading, isAuthenticated, navigate, error]);

  if (error) {
    return (
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          gap={2}
        >
          <Typography variant="h6" color="error">
            Authentication Error
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {error.message}
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        gap={2}
      >
        <CircularProgress size={40} />
        <Typography variant="h6" component="h2">
          Completing authentication...
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Please wait while we redirect you
        </Typography>
      </Box>
    </Container>
  );
};

export default CallbackPage;

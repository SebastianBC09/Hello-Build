import { FC } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ProfileLink from './ProfileLink';

const Navbar: FC = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(30, 60, 114, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            GitHub Favorite Repos
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {location.pathname === '/' && <SearchBar />}
          <ProfileLink />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

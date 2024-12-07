import { FC } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ProfileLink from './ProfileLink';

const Navbar: FC = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div">
            GitHub Favorite Repos
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {location.pathname === '/' && <SearchBar />}
          <ProfileLink />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

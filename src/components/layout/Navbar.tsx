import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import ProfileLink from './ProfileLink';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GitHub Favorite Repos
        </Typography>
        <SearchBar />
        <ProfileLink />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

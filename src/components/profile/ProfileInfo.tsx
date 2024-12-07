import { FC } from 'react';
import { Avatar, Typography, Box } from '@mui/material';

const ProfileInfo: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar alt={user?.name} src={user?.picture} sx={{ width: 100, height: 100, mb: 2 }} />
      <Typography variant="h5" component="div">
        {user?.name}
      </Typography>
      <Typography variant="body1" component="div">
        {user?.email}
      </Typography>
    </Box>
  );
};

export default ProfileInfo;

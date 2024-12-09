import { FC } from "react";
import { Avatar, Typography, Box, Menu, MenuItem } from "@mui/material";
import { useAuth } from "../../auth/hooks/useAuth";
import { useState } from "react";
import { LogoutRounded, PersonOutlineRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ProfileLink: FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  if (!user) return null;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleProfile = () => {
    handleClose();
    navigate('/profile');
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.8
          }
        }}
      >
        <Avatar
          alt={user.name || user.nickname}
          src={user.picture}
        />
        <Typography variant="body1" sx={{ ml: 1 }}>
          {user.name || user.nickname}
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfile}>
          <PersonOutlineRounded sx={{ mr: 1 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutRounded sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileLink;

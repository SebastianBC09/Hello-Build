import { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography, Box } from "@mui/material";
import { useAuth } from "../../auth/hooks/useAuth";

const ProfileLink: FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt={user.name || user.nickname}
          src={user.picture}
        />
        <Typography variant="body1" sx={{ ml: 1 }}>
          {user.name || user.nickname}
        </Typography>
      </Box>
    </Link>
  );
};

export default ProfileLink;

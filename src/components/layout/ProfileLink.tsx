import { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";

const ProfileLink: FC = () => {
  return (
    <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
      <Avatar alt={name} src={picture} />
      <Typography variant="body1" component="div" sx={{ ml: 1 }}>
        {name}
      </Typography>
    </Link>
  );
};

export default ProfileLink;

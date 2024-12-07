import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

interface FavoriteButton {
  repoId: number;
}

const FavoriteButton: FC<FavoriteButton> = ({ repoId }) => {
  return (
    <IconButton onClick={handleFavoriteClick} aria-label="add to favorites">
      {isFavorite ? <Star color="warning" /> : <StarBorder />}
    </IconButton>
  );
};

export default FavoriteButton;

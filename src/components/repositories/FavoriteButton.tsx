import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
interface FavoriteButton {
  isFavorite: boolean;
  onToggle: () => void;
}

const FavoriteButton: FC<FavoriteButton> = ({ isFavorite, onToggle  }) => {
  return (
    <IconButton onClick={onToggle} aria-label="add to favorites">
      {isFavorite ? <Star color="warning" /> : <StarBorder />}
    </IconButton>
  );
};

export default FavoriteButton;

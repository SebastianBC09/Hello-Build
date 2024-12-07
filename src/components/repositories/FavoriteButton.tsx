import { FC, useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { useFavorites } from '../../hooks/useFavorites';

interface FavoriteButton {
  repoId: number;
}

const FavoriteButton: FC<FavoriteButton> = ({ repoId }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { toggleFavorites, favorites } = useFavorites();

  useEffect(() => {
    const isRepoFavorite = favorites.some((repository) => repository.id === repoId);
    setIsFavorite(isRepoFavorite);
  }, [favorites, repoId])

  return (
    <IconButton onClick={() => toggleFavorites(repoId)} aria-label="add to favorites">
      {isFavorite ? <Star color="warning" /> : <StarBorder />}
    </IconButton>
  );
};

export default FavoriteButton;

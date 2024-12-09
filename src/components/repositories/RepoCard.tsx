import { FC } from 'react';
import { Box, Card, CardContent, Chip, Link, Typography } from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { Star } from '@mui/icons-material';
import FavoriteButton from './FavoriteButton';
import { useFavorites } from '../../hooks/useFavorites';
interface RepoCard {
  id: number;
  name: string;
  description: string | null;
  url: string;
  isPrivate: boolean;
  stargazerCount: number;
  updatedAt: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
}
const RepoCard: FC<RepoCard> = ({id,
  name,
  description,
  primaryLanguage,
  url,
  stargazerCount,
  isPrivate  }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some(repo => repo.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(id.toString());
    } else {
      addFavorite({
        id,
        name,
        description,
        primaryLanguage,
        url,
        stargazerCount,
        isPrivate,
        updatedAt: new Date().toISOString()
      });
    }
  };


return (
    <Card elevation={2} sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Box>
            <Link href={url} target="_blank" underline="hover" sx={{ color: 'primary.main' }}>
              <Typography variant="h6">{name}</Typography>
            </Link>
            {description && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {description}
              </Typography>
            )}
          </Box>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={handleFavoriteClick}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
          {primaryLanguage && (  // Changed from language
            <Chip
              size="small"
              label={primaryLanguage.name}
              sx={{
                backgroundColor: primaryLanguage.color,
                color: '#fff',
                '& .MuiChip-label': { fontWeight: 500 }
              }}
            />
          )}
          <Chip
            size="small"
            icon={isPrivate ? <LockTwoToneIcon fontSize="small" /> : <LockOpenTwoToneIcon fontSize="small" />}
            label={isPrivate ? 'Private' : 'Public'}
            variant="outlined"
          />
          <Chip
            size="small"
            icon={<Star fontSize="small" />}
            label={stargazerCount}
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default RepoCard;

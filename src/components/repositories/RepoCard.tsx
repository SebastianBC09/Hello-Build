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
    <Card
      elevation={0}
      sx={{
        minWidth: 275,
        background: '#fff',
        borderRadius: 2,
        transition: 'all 0.2s ease-in-out',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Link
              href={url}
              target="_blank"
              underline="hover"
              sx={{
                color: '#1e3c72',
                textDecoration: 'none',
                '&:hover': {
                  color: '#2a5298'
                }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: 1
                }}
              >
                {name}
              </Typography>
            </Link>
            {description && (
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6
                }}
              >
                {description}
              </Typography>
            )}
          </Box>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={handleFavoriteClick}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}>
          {primaryLanguage && (
            <Chip
              size="small"
              label={primaryLanguage.name}
              sx={{
                backgroundColor: primaryLanguage.color,
                color: '#fff',
                fontWeight: 500,
                px: 1
              }}
            />
          )}
          <Chip
            size="small"
            icon={isPrivate ? <LockTwoToneIcon /> : <LockOpenTwoToneIcon />}
            label={isPrivate ? 'Private' : 'Public'}
            variant="outlined"
            sx={{ borderColor: '#1e3c72', color: '#1e3c72' }}
          />
          <Chip
            size="small"
            icon={<Star sx={{ color: '#1e3c72' }} />}
            label={stargazerCount}
            variant="outlined"
            sx={{ borderColor: '#1e3c72', color: '#1e3c72' }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default RepoCard;

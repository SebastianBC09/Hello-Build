import { FC } from 'react';
import { Box, Card, CardContent, Chip, Link, Typography } from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import FavoriteButton from './FavoriteButton';

interface RepoCard {
  id: number;
  name: string;
  description: string | null;
  language: {
    name: string;
    color: string;
  } | null;
  url: string;
  stargazerCount: number;
  isPrivate: boolean;
}
const RepoCard: FC<RepoCard> = ({ id, name, description, language, url, stargazerCount, isPrivate }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Link href={url} target="_blank" underline="hover">
            <Typography variant="h5" component="div">
              {name}
            </Typography>
          </Link>
          <FavoriteButton repoId={id} />
        </Box>

        {description && (
          <Typography sx={{ mb: 2 }} color="text.secondary">
            {description}
          </Typography>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {language && (
            <Chip
              label={language.name}
              sx={{
                backgroundColor: language.color,
                color: '#fff'
              }}
            />
          )}
          <Chip
            icon={isPrivate ? <LockTwoToneIcon /> : <LockOpenTwoToneIcon />}
            label={isPrivate ? 'Private' : 'Public'}
            variant="outlined"
          />
          <Chip
            label={`${stargazerCount} stars`}
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default RepoCard;

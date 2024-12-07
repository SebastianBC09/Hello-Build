import { FC } from 'react';
import { Card, CardContent, Chip, Typography } from '@mui/material';
import FavoriteButton from './FavoriteButton';

interface RepoCard {
  name: string;
  description: string;
  language: string;
  id: number;
}
const RepoCard: FC<RepoCard> = ({ name, description, language, id}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Chip label={language} />
        <FavoriteButton repoId={id} />
      </CardContent>
    </Card>
  );
};

export default RepoCard;

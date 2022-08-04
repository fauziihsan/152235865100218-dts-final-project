import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const BASE_IMAGE_URL = "https://masak-apa-tomorisakura.vercel.app/api/recipes/results";

const MasakCard = ({ masak }) => {
  return (
    <Card id={masak.key} sx={{ display: 'flex', width: 400, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${BASE_IMAGE_URL}${masak.thumb}`}
        alt="Masak poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {masak.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {masak.portion}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* <Rating name="read-only" precision={0.1} value={masak.vote_average / 2} max={5} readOnly /> */}
            {/* <Box sx={{ ml: 2 }}>{masak.vote_average.toFixed(1)}</Box> */}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MasakCard;
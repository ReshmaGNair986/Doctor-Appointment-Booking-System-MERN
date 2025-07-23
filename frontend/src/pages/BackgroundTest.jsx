import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const BackgroundTest = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("https://images.unsplash.com/photo-1588776814546-ec7c8d8db0b2?auto=format&fit=crop&w=1600&q=80")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.9)' }}>
        <Typography variant="h5">Test Background Page</Typography>
      </Paper>
    </Box>
  );
};

export default BackgroundTest;


import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
       
        backgroundImage: `url('https://images.pexels.com/photos/8376300/pexels-photo-8376300.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#000000ff',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '4px',
        }}
      >
        BOOK YOUR APPOINTMENTS
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="h3"
          sx={{
            color: '#000000ff',
            fontWeight: 800,
            fontFamily: 'Arial Black, Gadget, sans-serif',
            textTransform: 'uppercase',
            lineHeight: 1.2,
          }}
        >
          NOW
        </Typography>
        <IconButton
  onClick={() => navigate('/signup')}
  sx={{ color: 'Black' }}
  aria-label="Go to Signup"
>
  <ArrowForwardIcon fontSize="large" />
</IconButton>


        {/* <IconButton
          onClick={() => navigate('/signup')}
          sx={{ color: '#000000ff' }}
          aria-label="Go to Signup"
        >
          <ArrowForwardIcon fontSize="large" />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Home;

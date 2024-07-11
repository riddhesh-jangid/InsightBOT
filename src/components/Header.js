// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = () => {
  const logoUrl = 'https://insightbotadls.blob.core.windows.net/sitecontent/onlylion.png'; // Replace with your actual logo URL

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
          <Box display="flex" alignItems="center">
            <img src={logoUrl} alt="Logo" style={{ height: '60px', marginRight: '10px' }} />
            <Typography variant="h5">
                <b>InightBOT</b>
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

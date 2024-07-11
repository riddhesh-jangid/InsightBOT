// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" p={2} bgcolor="primary.main" color="white" mt={2} textAlign="center">
      <Typography variant="body1">Download Report</Typography>
    </Box>
  );
};

export default Footer;

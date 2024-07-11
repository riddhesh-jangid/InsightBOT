// src/components/SearchBar.js
import React from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

const SearchBar = () => {
  return (
    <Box display="flex" justifyContent="center" mt={2} mb={2} width="100%">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={10}>
          <TextField
            label="Search Bar"
            variant="outlined"
            fullWidth
            InputProps={{ style: { height: '56px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ height: '56px', minHeight: '56px' }}
          >
            Search Button
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;

// src/components/ContentSection.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const ContentSection = () => {
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setCatFact(data.fact))
      .catch(error => console.error('Error fetching the cat fact:', error));
  }, []);
  
  return (
    <Box p={2}>
      <Typography variant="body1" paragraph>
        In the given sales scenario, a comprehensive comparison of the last three years' sales was conducted, revealing crucial trends and performance metrics. The analysis focused on total annual sales, average monthly sales, and year-over-year growth rates, providing a clear picture of the company's sales trajectory. Various visualizations and statistical methods were employed to identify seasonal trends, product category performance, and the impact of marketing campaigns. The findings offer valuable insights into the sales patterns and potential areas for strategic improvements.
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" paragraph>
          Sales have shown a steady year-over-year increase, with a 20% growth each year, from $500,000 in the first year to $600,000 in the second year, and $720,000 in the third year.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" paragraph>
           {catFact} 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" paragraph>
          Electronics and home appliances emerged as the top-performing categories, contributing to 60% of the total sales
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={4}>
          <img src="https://insightbotadls.blob.core.windows.net/graphs/barchart.png" alt="Graph 1" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="https://insightbotadls.blob.core.windows.net/graphs/barchart.png" alt="Graph 2" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="https://insightbotadls.blob.core.windows.net/graphs/barchart.png" alt="Graph 3" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentSection;

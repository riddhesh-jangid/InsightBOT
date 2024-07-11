// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FBFDE8',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    allVariants: {
      color: '#000',
    },
  },
});

export default theme;

import './App.css';

import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import { Container, ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
        <Container>
          <SearchBar />
          <ContentSection />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

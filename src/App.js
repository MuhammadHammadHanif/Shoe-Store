import React from 'react';
import './App.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Header from './components/layout/header/Header';
import Footer from './components/layout/Footer';
import theme from './components/layout/Theme';
import Home from './components/pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

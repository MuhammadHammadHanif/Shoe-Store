import React from 'react';
import './App.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Header from './components/layout/header/Header';
import theme from './components/layout/Theme';
import Home from './components/pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;

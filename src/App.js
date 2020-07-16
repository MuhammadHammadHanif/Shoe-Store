import React from 'react';
import './App.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/header/Header';
import Footer from './components/layout/Footer';
import theme from './components/layout/Theme';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Product from './components/pages/Product';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/product/:slug' element={<Product />} />
            <Route path='/about' element={<AboutUs />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;

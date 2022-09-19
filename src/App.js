import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './components/styles/GlobalStyles';
import { appThemeDictionary } from './dictionaries/appThemes';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <ThemeProvider theme={appThemeDictionary}>
      <>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import Header from '../Components/UI/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './UI/Theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello and welcome to the site!
    </ThemeProvider>
  );
}

export default App;

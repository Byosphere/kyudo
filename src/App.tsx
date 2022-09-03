import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import './App.css';
import MainLayout from './pages/MainLayout';
import theme from './theme';

function App() {


  // https://henninglarsen.com/en

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MainLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;

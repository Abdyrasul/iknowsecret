import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18nextConf';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ShareSecret from "./pages/ShareSecret/ShareSecret";
import {ThemeProvider, createTheme} from '@mui/material/styles';

let theme = createTheme();

ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme ={theme}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="share" element={<ShareSecret />} />
    </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


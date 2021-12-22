import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ShareSecret from "./pages/ShareSecret/ShareSecret";
import {ThemeProvider, createTheme} from '@mui/material/styles';
// import { Container } from '@mui/material';
// import Image from "./public/1.jpg";
// import { CssBaseline } from '@mui/material';
const theme = createTheme({
  body:{
    margin:'0px',
  }
});

ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme ={theme}>
    {/* <CssBaseline /> */}
    {/* <Container sx={{backgroundImage: `url(${Image})`}}> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="share" element={<ShareSecret />} />
    </Routes>
    {/* </Container> */}
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


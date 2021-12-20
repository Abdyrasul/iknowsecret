import * as React from 'react';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';
import CustomItem from './pages/Home/CustomItem';
// import { createTheme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Footer from "./components/Footer";
// let theme = createTheme();

const useStyles = makeStyles((theme) => ({
  
  pagination: {
        marginTop: theme.spacing(2),
        justifyContent: "center",
        alignItems:"center",
        display: 'flex',
        marginBottom: theme.spacing(5),
  },
}));

function App() {
  const cars = ["1", "2", "3"];
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <h1>sfsdfdsf</h1> */}
       <CssBaseline />
      
      <Container maxWidth="sm" margin="auto">
      <Header name = "HOME"></Header>
      <Container maxWidth="sm">
      <Grid
          container
          spacing={1}
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
        >
          {cars.map((car) => (
            <CustomItem key={car} data={car}></CustomItem>
          ))}
        </Grid>
        
        </Container>
        <Container className={classes.pagination}>
        <Pagination className = {classes.pagination} count={10}  color="primary" />
        </Container>
      </Container>
    {/* <Footer></Footer> */}
  </React.Fragment>

  );
}


export default App;

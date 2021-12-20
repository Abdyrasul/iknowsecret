import React, { Component } from "react";
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';
import CustomItem from './pages/Home/CustomItem';
// import { createTheme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Footer from "./components/Footer";
import SecretDataService from "../src/services/secret.service";

// const useStyles = makeStyles((theme) => ({
  
//   pagination: {
//         marginTop: theme.spacing(2),
//         justifyContent: "center",
//         alignItems:"center",
//         display: 'flex',
//         marginBottom: theme.spacing(5),
//   },
// }));

// const classes = useStyles();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.retrieveSecrets = this.retrieveSecrets.bind(this);
    // this.refreshList = this.refreshList.bind(this);
    // this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    // this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

   
    this.state = {
      secrets: [],
      currentIndex: -1,
      page: 1,
      count: 0,
      pageSize: 3,
    };

    this.pageSizes = [3, 6, 9];
  }

  componentDidMount() {
    this.retrieveSecrets();
  }

  getRequestParams( page, pageSize) {
    let params = {};

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  }

  retrieveSecrets() {
    const {page} = this.state;
    const params = this.getRequestParams(page);

    SecretDataService.getAll(params)
      .then((response) => {
        const { secrets, totalPages } = response.data;

        this.setState({
          secrets: secrets,
          count: totalPages,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handlePageChange(event, value) {
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrieveSecrets();
      }
    );
  }

  // const cars = ["1", "2", "3"];
  
  
  render() {

    const {
      secrets,
      currentIndex,
      page,
      count,
      pageSize,
    } = this.state;

    return(
     
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
          {secrets.map((secret, index) => (
            <CustomItem key={index} data={secret}></CustomItem>
          ))}
        </Grid>
        
        </Container>
        <Container >
        <Pagination 
        sx={{
          marginTop: 5,
        justifyContent: "center",
        alignItems:"center",
        display: 'flex',
        marginBottom: 5,
        }}
        count={count}
        page={page} 
        color="primary" 
        onChange={this.handlePageChange}
        />
        </Container>
      </Container>
    {/* <Footer></Footer> */}
  </React.Fragment>
    );
}
}


// export default App;

import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        iknowsecret.com
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const languageMap = {
  tm: { label: "Türkmençe", dir: "ltr", active: true },
  end: { label: "English", dir: "ltr", active: false },
};

let theme = createTheme();
const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">

        {/* <Copyright /> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            // alignContent:"center",
            // alignItems:"center",
            p: 1,
            m: 1,
            // bgcolor: 'background.paper',
          }}
        >
          <Box>
            {/* <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
            sx={{
              // color: 'white',
              p: 1,
              m: 1,
              borderRadius: 1,
              textAlign: 'center',
              fontSize: '1rem',
              fontWeight: '700',
            }}
          >
            English
          </Typography> */}
          <Button 
          onClick={() => {
            i18next.changeLanguage('en');
          }}
          size="small" 
          color="inherit" 
          sx = {{color:"#444941",fontWeight:'700'}}>English</Button>
          </Box>
          <Box>
            {/* <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Türkmençe
          </Typography> */}
          <Button 
          onClick={() => {
            i18next.changeLanguage('tm');
          }}
          size="small" 
          // color="inherit" 
          sx = {{color:"#444941",fontWeight:'700'}}>Türkmençe</Button>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
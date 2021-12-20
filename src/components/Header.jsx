import React from "react";
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
// import { createTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import './style.css';
// let theme = createTheme();
// theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
    logo:{
        
        color:"#DA4E42",
        fontFamily: "Bubblegum Sans",
        fontSize: 27,
    },
    toolbarLink: {
        alignItems: 'end',
        fontFamily: "Nanum Pen Script",
        fontSize: 20,
        // color: theme.palette.secondary,
        // marginLeft:5,
        // marginRight:"5",
        flexShrink: 2,
        "&:hover": {
            color: theme.palette.secondary.main,
            //   borderBottom: `2px solid ${theme.palette.success.dark}`,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 13,
        },
    },
    socialIcons: {
        [theme.breakpoints.down("xs")]: {
            fontSize: 17,
            // backgroundColor:"#FFDFDC",
            // paddingBottom:"30px"
        },
    },
    div: {

    },
}));


function Header(props) {
    const classes = useStyles();
    return (
        // <ThemeProvider theme={theme}>
            <React.Fragment>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    p: 1,
                    m: 1,
                    // bgcolor: '#FCF6ED',
                }}>
                    <Box className={classes.logo}>

                        <Typography noWrap className={classes.logo}
                        fontFamily="Bubblegum Sans" 
                        fontSize = {22}
                            sx={{ flex: 1 }}
                        >
                            Logo
                        </Typography>

                    </Box>
                    <Box sx ={{flexGrow:1}}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 1,
                            m: 1,
                            // bgcolor: 'background.paper',
                        }}
                    >
                        {/* <div style = {divStyle}> */}
                        <Box sx = {{ marginRight:3}}>
                            <Link
                                className={classes.toolbarLink}
                                component={RouterLink}
                                to="/"
                                color="inherit"
                                noWrap
                                key='home'
                                variant="button"
                                underline="none"
                            >
                                HOME
                            </Link>
                        </Box>
                        <Box></Box>
                        <Box>
                            <Link
                                className={classes.toolbarLink}
                                component={RouterLink}
                                to="/share"
                                color="inherit"
                                noWrap
                                key='share'
                                variant="button"
                                underline="none"
                            >
                                SHARE SECRET
                            </Link>
                        </Box>
                        {/* <Button size="small">Home</Button>
                    <Button size="small">Share Secret</Button> */}
                        {/* </div> */}
                    </Box>
                    </Box>
                    <Box>
                        <a href="https://www.instagram.com/abdiresul/">
                            <TwitterIcon
                                className={classes.socialIcons}
                                color="primary"
                            ></TwitterIcon>
                        </a>
                    </Box>
                </Box>
            </React.Fragment>
        // </ThemeProvider>
    );
}


export default Header;
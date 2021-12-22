import React from "react";
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import makeStyles from '@mui/styles/makeStyles';
import SvgIcon from '@mui/material/SvgIcon';
// import {ReactComponent as Logo} from "../public/logo.svg";
// import { pink } from '@mui/material/colors';
import './style.css';
// let theme = createTheme();
// theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
    logo: {

        color: "#2A0944",
        fontFamily: "Bangers",
        fontSize: 27,
        // marginRight:"5px",
        paddingRight:"10px"
    },
    toolbarLink: {
        alignItems: 'end',
        fontFamily: "Merriweather",
        fontSize: 15,
        '@media (max-width:420px)': {
            fontSize: 12,
        },
        // color: theme.palette.secondary,
        // marginLeft:5,
        // marginRight:"5",
        flexShrink: 2,
        "&:hover": {
            color: theme.palette.secondary.main,
            //   borderBottom: `2px solid ${theme.palette.success.dark}`,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 10,
        },
    },
    socialIcons: {
        '@media (max-width:420px)': {
            fontSize: 20,
        },
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
    const { t, i18n } = useTranslation();
    return (
        // <ThemeProvider theme={theme}>
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                m: 1,
                // bgcolor: '#FCF6ED',
            }}>
                <Box className={classes.logo}>

                    <Typography noWrap className={classes.logo}
                        // fontFamily="Bubblegum Sans" 
                        // fontSize = {22}
                            // sx={{ marginRight:"5" }}
                        >
                            Paýlaş
                        </Typography>
                    {/* <SvgIcon >
                        <Logo />
                        <path d="../public/logo.svgz" />
                    </SvgIcon> */}
                   {/* <img src={ require('./logo.svg') } style={{width:"150px",
  height: "100px"}}/> */}

                </Box>
                <Box sx={{ flexGrow: 1 }}>
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
                        <Box sx={{ marginRight: 3 }}>
                            <Link
                                className={classes.toolbarLink}
                                component={RouterLink}
                                to="/"
                                color="#4B3869"
                                noWrap
                                key='home'
                                variant="button"
                                underline="none"
                            >
                                {t('HOME')}
                            </Link>
                        </Box>
                        <Box></Box>
                        <Box>
                            <Link
                                className={classes.toolbarLink}
                                component={RouterLink}
                                to="/share"
                                color="#4B3869"
                                noWrap
                                key='share'
                                variant="button"
                                underline="none"
                            >
                                {t('SHARE_SECRET')}
                            </Link>
                        </Box>
                        {/* <Button size="small">Home</Button>
                    <Button size="small">Share Secret</Button> */}
                        {/* </div> */}
                    </Box>
                </Box>
                <Box>
                    <a href="https://www.instagram.com/abdiresul/">
                        <TwitterIcon className={classes.socialIcons}
                        //    sx={{ color: pink[500] }}
                        ></TwitterIcon>
                    </a>
                </Box>
            </Box>
        </React.Fragment>
        // </ThemeProvider>
    );
}


export default Header;
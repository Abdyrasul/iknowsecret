import React from 'react';
import Header from '../../components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
// import Footer from "../../components/Footer";

export default function ShareSecret() {
    return (
        <React.Fragment>
            <CssBaseline />

            <Container maxWidth="sm" margin="auto">
                <Header name="HOME"></Header>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        marginBottom:1
                    }}
                >
                    <TextField fullWidth id="fullWidth" multiline
                        rows={7}
                        placeholder="Share your secret with us"
                        inputProps={{ maxLength: 280 }}
                        style = {{marginBottom:"5", backgroundColor:"white"}}
                         />
                   
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        marginBottom:1
                    }}
                >
                    <TextField fullWidth id="fullWidth"
                    label = "Name" 
                    focused 
                        placeholder="Optional"
                        size="small"
                        style = {{marginBottom:"5", backgroundColor:"white"}}
                         />
                    </Box>
                
                <Button variant="contained" color = "success" endIcon={<SendIcon />}>
        Send
      </Button>
                {/* <Container maxWidth="sm">
          </Container> */}
          
            </Container>
          {/* <Footer></Footer> */}
        </React.Fragment>
    )
}

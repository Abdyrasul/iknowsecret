import React, { Component } from 'react';
import Header from '../../components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

// import Footer from "../../components/Footer";

export default class ShareSecret extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.saveSecret = this.saveSecret.bind(this);
        // this.newSecret = this.newSecret.bind(this);

        this.state = {
            id: null,
            text: "",
            name: "",
        };
    }


    onChangeText(e) {
        this.setState({
            text: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    saveSecret() {

        var data = {
            text: this.state.text,
            name: this.state.name
        };

        
        if(data.text == null || data.text.isEmpty()){
            console.log('Text bos');
            return;
        }

        TutorialDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    text: response.data.secret_data,
                    name: response.person_name,
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />

                <Container maxWidth="sm" margin="auto">
                    <Header name="HOME"></Header>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '100%',
                            marginBottom: 1
                        }}
                    >
                        <TextField fullWidth id="fullWidth" multiline
                            value={this.state.text}
                            onChange={this.onChangeText}
                            rows={7}
                            placeholder="Share your secret with us"
                            inputProps={{ maxLength: 280 }}
                            style={{ marginBottom: "5", backgroundColor: "white" }}
                        />

                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '100%',
                            marginBottom: 1
                        }}
                    >
                        <TextField fullWidth id="fullWidth"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            label="Name"
                            focused
                            placeholder="Optional"
                            size="small"
                            style={{ marginBottom: "5", backgroundColor: "white" }}
                        />
                    </Box>

                    <Button 
                    onClick={this.saveSecret}
                    variant="contained" 
                    color="success" 
                    endIcon={<SendIcon />}>
                        Send
                    </Button>
                    {/* <Container maxWidth="sm">
          </Container> */}

                </Container>
                {/* <Footer></Footer> */}
            </React.Fragment>
        );
    }
}

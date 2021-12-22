import React, { Component } from 'react';
import Header from '../../components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { withTranslation } from 'react-i18next';
import SecretDataService from "../../../src/services/secret.service";
import Snackbar from '@mui/material/Snackbar';

import Footer from "../../components/Footer";





class ShareSecret extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.saveSecret = this.saveSecret.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.handleClose  = this.handleClose .bind(this);
        // this.newSecret = this.newSecret.bind(this);

        this.state = {
            id: null,
            text: "",
            name: "",
            open: false,
            vertical: 'bottom',
            horizontal: 'center',
            snackbartext: ""
        };
    }

    handleClose = () => {
        this.setState({open: false });
      };

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
            secret_data: this.state.text,
            person_name: this.state.name
        };


        if (data.secret_data == null || data.secret_data.length == 0) {
            console.log('Text bos');
            return;
        }

        SecretDataService.create(data)
            .then(response => {
                this.setState({
                    text: "",
                    name: "",
                    open: true,
                    snackbartext : "SUCCESSFUL"
                });
                // console.log('Sonuc Open: ' + this.state.open);

            })
            .catch(e => {
                console.log(e);
                this.setState({
                    text: data.secret_data,
                    name: data.person_name,
                    open: true,
                    snackbartext : "UNSUCCESSFUL"
                });
            });
    }

    render() {
        const { t } = this.props;
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
                            placeholder={t('Share_your_secret_with_us')}
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
                            label={t('Name')}
                            focused
                            placeholder={t('Optional')}
                            size="small"
                            style={{ marginBottom: "5", backgroundColor: "white" }}
                        />
                    </Box>

                    <Button
                        onClick={this.saveSecret}
                        variant="contained"
                        color="success"
                        endIcon={<SendIcon />}>
                        {t('Send')}
                    </Button>
                    <Snackbar
        anchorOrigin={ {
            vertical: 'bottom',
            horizontal: 'center',
          } }
        open={this.state.open}
        onClose={this.handleClose}
        message={t(this.state.snackbartext)}
        key={this.state.vertical + this.state.horizontal}
        autoHideDuration={3000}
      />
                    {/* <Container maxWidth="sm">
          </Container> */}

                </Container>
                
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default withTranslation()(ShareSecret);
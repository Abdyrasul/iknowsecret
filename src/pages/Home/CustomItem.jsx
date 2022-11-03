import React from 'react'
import Grid from "@mui/material/Grid";
// import Link from "@material-ui/core/Link";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../../style.css';
// import '@fontsource/roboto/400.css';

let theme = createTheme();
// theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
    card: {
        display: "flex",
        borderRadius: 20,
        borderColor: 'primary.main',
        backgroundColor: "#F2FFE9"
      },
      cardDetails: {
        flex: 1,
      },
      text:{
        fontFamily: "Volkorn",
        fontSize: 16,
        // fontWeight: 600
      }
}));

function CustomItem(props) {
    const classes = useStyles();
    const data = props.data;
    let dateStringTemp = data.secret_date.split(".")[0].replace("T"," ");
    let d = new Date(dateStringTemp);
    let dateString = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes();
var name = data.person_name==null?"Anonim":data.person_name;
    
    return (
        <Grid item xs={12}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Box
                        borderRadius="50%"
                         sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignContent: 'flex-start',
                            
                            // p: 1,
                            // m: 1,
                            marginBottom:1,
                        
                        }}>
                            <Box>
                                <Typography variant="subtitle1" color="textSecondary" fontSize="13px">
                                    {"#"+data.secret_id}
                                </Typography>
                            </Box>
                            <Box>
                            <Typography variant="subtitle1" color="textSecondary" fontSize="13px">
                                    {dateString}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body1" paragraph className={classes.text}>
                {data.secret_data}
              </Typography>
              <Stack direction = "row" justifyContent="flex-end">
              <Chip label = {name} align ="right" variant="outlined" size="small" />
              </Stack>
              {/* <Typography variant="subtitle1" style={{color: '#F14A16'}} fontSize="13px" textAlign ="right">
                                   {data.person_name==false?"Anonim":data.person_name}
                                </Typography> */}
                    </CardContent>
                </div>
            </Card>
        </Grid>
    )
}

export default CustomItem

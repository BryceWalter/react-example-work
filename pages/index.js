import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ToDoCard from '../components/ToDoCard';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Just a List
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid 
                    style={{marginTop: '7%'}}
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center" >
                    <Grid item md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <ToDoCard/>  
                    </Grid>
                    <Grid item md={3}></Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Index;
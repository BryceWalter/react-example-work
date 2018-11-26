import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ToDoCard from '../components/ToDoCard';
import AddToDo from '../components/AddToDo';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center" >
                    <Grid item md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <ToDoCard/>  
                    </Grid>
                    <Grid item md={3}></Grid>
                </Grid>
                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center" >
                    <Grid item md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <AddToDo/>  
                    </Grid>
                    <Grid item md={3}></Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Index;
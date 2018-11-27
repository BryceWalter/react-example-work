import React, { Component } from 'react';
import Head from '../components/Head';
import Grid from '@material-ui/core/Grid';
import ToDoCard from '../components/ToDoCard';
import AppToolbar from '../components/AppToolbar';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newToDo: '',
            checked: [],
            initialToDoList: [
                {
                    text: 'Something to do!'
                },
                {
                    text: 'Something else to do!'
                },
                {
                    text: 'Another thing to do!'
                },
                {
                    text: 'Woah a lot to do!'
                },
                {
                    text: 'Crazy thing to do!'
                },
            ],
            toDoList: [
                {
                    text: 'Something to do!'
                },
                {
                    text: 'Something else to do!'
                },
                {
                    text: 'Another thing to do!'
                },
                {
                    text: 'Woah a lot to do!'
                },
                {
                    text: 'Crazy thing to do!'
                },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <Head/>
                <AppToolbar/>
                <Grid 
                    style={{marginTop: '70px'}}
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center" >
                    <Grid item md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <ToDoCard appState={this.state}/>  
                    </Grid>
                    <Grid item md={3}></Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Index;
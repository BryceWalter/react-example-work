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

    handleSearch = (e) => {
        console.log(e.target.value)
        var updatedList = this.state.initialToDoList;
        updatedList = updatedList.filter((toDo) => {
          return toDo.text.toLowerCase().search(
            e.target.value.toLowerCase()) !== -1;
        });

        this.setState({toDoList: updatedList});
    }

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val })
    };

    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
          this.addToDo(event.value)
        }
    }

    addToDo = (value) => (e) => {
        if (e.key === 'Enter' || e.target.name === 'newToDoButton' || e.target.name === undefined) {
            e.preventDefault();
            const array = [...this.state.toDoList];
            const toDoObj = { text: value }
            array.push(toDoObj);
            this.setState({initialToDoList: array, toDoList: array, newToDo: ''})
        }
    }

    render() {
        return (
            <React.Fragment>
                <Head/>
                <AppToolbar 
                    newToDo={this.state.newToDo}
                    handleSearch={this.handleSearch}
                    handleToDoChange={this.handleChange}
                    handleAddToDo={this.addToDo}
                />
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
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

class ToDoCard extends Component {
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
        };
    }

    handleToggle = (value) => () => {
        const array = [...this.state.toDoList];
        if (value !== -1) {
            array.splice(value, 1);
            this.setState({toDoList: array});
        }
    };

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
        console.log(e)
        if (e.key === 'Enter' || e.target.name === 'newToDoButton' || e.target.name === undefined) {
            const array = [...this.state.toDoList];
            const toDoObj = { text: value }
            array.push(toDoObj);
            this.setState({initialToDoList: array, toDoList: array, newToDo: ''})
        }
    }

    handleSearch = (e) => {
        var updatedList = this.state.initialToDoList;
        updatedList = updatedList.filter((toDo) => {
          return toDo.text.toLowerCase().search(
            e.target.value.toLowerCase()) !== -1;
        });
        this.setState({toDoList: updatedList});
      }

    render() {
        return (
            <Card >
                <CardHeader title={'Stuff You Gotta Do'}>
                </CardHeader>
                <CardContent>
                    <TextField
                        onChange={this.handleSearch}
                        placeholder="Have a look..."
                        multiline
                        label=""
                        InputProps={{
                            endAdornment: (
                              <InputAdornment variant="filled" position="end">
                                <Search/>
                              </InputAdornment>
                            ),
                        }}
                    />
                    <ToDoList 
                        
                        handleToggle={this.handleToggle.bind(this)} 
                        toDoList={this.state.toDoList} 
                        checked={this.state.checked} 
                    />
                </CardContent>
                <AddToDo 
                    handleAddToDo={this.addToDo.bind(this)} 
                    handleToDoChange={this.handleChange} 
                    newToDo={this.state.newToDo} 
                />
            </Card>
        );
    }
}

export default ToDoCard;
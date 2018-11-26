import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ToDoList from './ToDoList';
import AddToDo from './AddToDo';
import { CardHeader, Typography } from '@material-ui/core';

class ToDoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newToDo: '',
            checked: [],
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
            ]
        };
    }

    handleToggle = value => () => {
        const array = [...this.state.toDoList]; // make a separate copy of the array

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

    addToDo = value => () => {
        const array = [...this.state.toDoList];
        const toDoObj = { text: value }
        array.push(toDoObj);
        this.setState({toDoList: array, newToDo: ''})
    }

    render() {
        return (
            <Card >
                <CardHeader title={'Stuff You Gotta Do'}>
                </CardHeader>
                <CardContent>
                    <ToDoList handleToggle={this.handleToggle.bind(this)} toDoList={this.state.toDoList} checked={this.state.checked} />
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
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

class ToDoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: [],
            toDoList: [
                {
                    id: 0,
                    text: 'Something to do!'
                },
                {
                    id: 1,
                    text: 'Something else to do!'
                },
                {
                    id: 2,
                    text: 'Another thing to do!'
                },
                {
                    id: 3,
                    text: 'Woah a lot to do!'
                },
                {
                    id: 4,
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

    addToDo = value => () => {
        const array = [...this.state.toDoList];

        array.push(value)
        this.setState({toDoList: array})
    }

    render() {
        return (
            <Card >
                <CardContent>
                    <ToDoList handleToggle={this.handleToggle.bind(this)} toDoList={this.state.toDoList} checked={this.state.checked} />
                </CardContent>
                <AddToDo/>
            </Card>
        );
    }
}

export default ToDoCard;
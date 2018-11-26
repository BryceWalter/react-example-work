import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class ToDoList extends React.Component {

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

    render() {
        return (
            <List>
            {this.state.toDoList.map((toDo, index) => (
                <ListItem key={index} role={undefined} dense button onClick={this.handleToggle(index)}>
                <Checkbox
                    checked={this.state.checked.indexOf(toDo.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText primary={toDo.text} />
                </ListItem>
            ))}
            </List>
        );
    }
}

export default ToDoList;
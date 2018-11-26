import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class ToDoList extends React.Component {
    render() {
        return (
            <List>
            {this.props.toDoList.map((toDo, index) => (
                <ListItem 
                    key={index} 
                    role={undefined} 
                    dense 
                    button 
                    onClick={this.props.handleToggle(index)}
                >
                    <Checkbox
                        checked={this.props.checked.indexOf(toDo.id) !== -1}
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
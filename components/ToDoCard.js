import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';

import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

class ToDoCard extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.appState
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.appState);
    }

    handleToggle = (value) => () => {
        const array = [...this.state.toDoList];
        if (value !== -1) {
            array.splice(value, 1);
            this.setState({toDoList: array});
        }
    };

    render() {
        return (
            <Card >
                <CardHeader title={'Stuff You Gotta Do'}>
                </CardHeader>
                <CardContent>
                    <ToDoList 
                        handleToggle={this.handleToggle.bind(this)} 
                        toDoList={this.state.toDoList} 
                        checked={this.state.checked} 
                    />
                </CardContent>
            </Card>
        );
    }
}

export default ToDoCard;
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ToDoList from './ToDoList';

class ToDoCard extends Component {
    render() {
        return (
            <Card >
                <CardContent>
                    <ToDoList/>
                </CardContent>
            </Card>
        );
    }
}

export default ToDoCard;
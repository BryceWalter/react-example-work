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
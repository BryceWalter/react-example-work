import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddToDo extends Component {
    render() {
        return (
            <Card style={{marginTop: '40px'}}>
            <CardContent>
                <TextField 
                    fullWidth
                    multiline
                    rows="4"
                    label="Todo"
                />
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small" variant="outlined">Add</Button>
            </CardActions>
        </Card>
        );
    }
}

export default AddToDo;
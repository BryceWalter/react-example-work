import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddToDo extends Component {
    render() {
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.modalOpen}
                onClose={this.props.closeModal}
                style={{ height: '300px' }}
            >
                <Card style={{marginTop: '40px'}}>
                    <CardContent>
                        <TextField 
                            onChange={this.props.handleToDoChange}
                            onKeyPress={this.props.handleAddToDo(this.props.newToDo)}
                            value={this.props.newToDo}
                            name="newToDo"
                            fullWidth
                            multiline
                            rows="4"
                            label="Todo"
                        />
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button 
                            name="newToDoButton"
                            onClick={this.props.handleAddToDo(this.props.newToDo)} 
                            size="small" 
                            variant="outlined"
                        >
                            Add
                        </Button>
                        <Button 
                            name="newToDoButton"
                            onClick={this.props.closeModal} 
                            size="small" 
                            variant="outlined"
                        >
                            Close
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        );
    }
}

export default AddToDo;
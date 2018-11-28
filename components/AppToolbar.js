import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';

import AddToDo from './AddToDo';

class AppToolbar extends Component {
    state = {
        open: false,
    };
    
    handleOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };

    handleAddToDo = (value) => (e) => {
        this.props.handleAddToDo(value)(e)
    }
    
    render() {
        return (
            <AppBar>
                <AddToDo
                    modalOpen={this.state.open} 
                    closeModal={this.handleClose}
                    newToDo={this.props.newToDo}
                    handleToDoChange={this.props.handleToDoChange} 
                    handleAddToDo={this.props.handleAddToDo}
                />
                <Toolbar> 
                    <Typography style={{flexGrow: 1}} variant="h6" color="inherit" noWrap>
                        ¡Listo!
                    </Typography>
                    <Button onClick={this.handleOpen} style={{ marginRight: '10px' }} color="inherit" aria-label="Add" >
                        <Add />
                    </Button>
                    <TextField
                        style={{backgroundColor: '#e8e8e8', borderRadius: '3px', padding: '5px 10px'}}
                        onChange={this.props.handleSearch}
                        placeholder="Search by name"
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
                </Toolbar>
            </AppBar>
        );
    }
}

export default AppToolbar;
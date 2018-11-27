import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

class AppToolbar extends Component {
    
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography style={{flexGrow: 1}} variant="h6" color="inherit" noWrap>
                        Just a List
                    </Typography>
                    <TextField
                        style={{color: 'white'}}
                        onChange={this.handleSearch}
                        placeholder="Have a look..."
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
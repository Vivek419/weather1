import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {Filter} from '../redux/action'
import { connect } from 'react-redux'




class header extends Component {
  state = {
    input: ""
  }

  change(e) {
    let val = e.target.value;
    console.log(val)
    this.setState({ input: val })

  }
  handle(e) {
    let val = e
    console.log("vvvv", val);
    this.props.dispatch(Filter(val));
  }




  render() {

    return (
      <>
        <div>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" style={{ marginRight: "2px" }} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Weather Forcast
          </Typography>

              <InputBase
                placeholder="Search…"
                name="userInput"
                inputProps={{ 'aria-label': 'search' }} style={{ marginLeft: "60%", paddingLeft: "1%", borderRadius: "5px", backgroundColor: "white" }}
                onChange={(e) => this.change(e)}
              />
              <IconButton aria-label="search" color="inherit" >
                <SearchIcon style={{ justifySelf: "center", alignSelf: "center", flex: "center" }} onClick={() => this.handle(this.state.input)} />
              </IconButton>

            </Toolbar>
          </AppBar>
          
        </div>
       
      </>
    );
  }
}

export default connect()(header);


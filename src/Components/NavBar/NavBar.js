
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './NavBar.css';
import Button from 'react-bootstrap/Button';


class NavBar extends Component{
    constructor(props){
      super(props);
      this.state={ }
    }
      render(){
        return (
          <div>
            <div class="NavBar__barcontent">
                <Grid Container>
                    <Grid item xs={2}>
                        jio
                    </Grid>
                    <Grid item xs={6}>
                        <img class="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"width="145px"/>
                    </Grid>
                    <Grid item xs={4}>
                        <input type="text"placeholder="Type"/>
                    </Grid>
                </Grid>
            </div>
          </div>

        );
    }
}
export default NavBar;
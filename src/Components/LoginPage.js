import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './LoginPage.css';
import Button from 'react-bootstrap/Button';


class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state={ }
  }
    render(){
      return (
        <div>
          <Grid Container>
              <Grid item xs={3}>
                hello
              </Grid>
              <Grid item xs={6}>
                 <div className="Loginpage">
                     <div>
                      
                        <img src="https://fdn.gsmarena.com/imgroot/news/21/03/instagram-lite-ofic/-1200/gsmarena_003.jpg"width="560px"alt=""/>
                     </div>
                      <div class="border">
                          <img class="loginpage__io"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" width="290px"height="120px"/>
                          <div class="signin">
                            <input class="text1"type="text"placeholder="phone Email type"/>
                            <input class="text2"type="password"placeholder="Password"/>
                            <button class="btn">Log in</button>
                            <div class="ordivider">
                              <div class="login_divider"></div>
                              <div class="or">Or</div>
                              <div class="login_divider"></div>
                            </div>



                          </div>
                  </div>
                </div>
              </Grid>

                <Grid item xs={3}>
                </Grid>    
          </Grid>
        </div>
      );
  }
}
export default LoginPage;
    
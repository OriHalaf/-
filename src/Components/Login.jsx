import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import blabla from './Video/video.mp4';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      pass: '',
    }
  }


  FuncLogin = () => {
    const { userId, pass } = this.state
    var userData = {
      userId,
      pass
    }
    this.props.continueLogin(userData)
  }

  render() {
    return (

      <div className="Login-Form" style={{ width: '40%' }}>
        <h2>Login</h2>
        <div id="Login" >
          <p>UserId:</p>
          <TextField id="outlined-basic" color="secondary" label="Enter ID" variant="outlined" onChange={(e) => this.setState({ userId: e.target.value })} value={this.state.userId} ></TextField>
          <p>Pass:</p>
          <TextField id="outlined-basic" color="secondary" label="Enter password" variant="outlined" onChange={(e) => this.setState({ pass: e.target.value })} value={this.state.pass}></TextField>
        </div>
        <br /><br></br>
        <Button variant="contained" color="primary" onClick={this.FuncLogin} >
          Login
        </Button>
         {/* { <video autoPlay loop
          style={{
            position: "absolute",
            width: "100%",
            left: 100,
            left: "50%",
            top: 400,
            marginTop: 100,
            height: 1000,
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "0"
          }}
        >
          <source src={blabla} type="video/mp4" />

        </video>} */}
      </div>
    )
  }
}
export default withRouter(Login);
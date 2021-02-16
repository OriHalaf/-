import { withRouter } from 'react-router-dom';
import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import PasswordStrengthBar from 'react-password-strength-bar';
import '../CSSComponents/Register.css';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lName: '',
      fName: '',
      userId: '',
      pass: '',
      email: '',
      classId: '',
      errMessage: null,
      isStudent: true,
      classId: 0,

    }
  }

  funcLogin = () => {
    
    debugger
    
    const { students, teachers } = this.props
    const { lName, fName, userId, pass, classId, isStudent, email } = this.state
    if (!lName || !fName || !userId || !pass || !classId || !email) {
      console.log(pass)
      this.setState({ errMessage: 'נא מלא את כל השדות' })
      return
    }
    else if ((students.find(s => s.userId == this.state.userId) || teachers.find(s => s.userId == this.state.userId)) !== undefined) {
      alert('user id allredy exsit')
      return
    }

    if (!this.isValidPassword(pass)) {
      this.setState({ errMessage: 'סיסמא לא תקינה' })
      return
    }
    if (!this.isValidEmail(email)) {
      this.setState({ errMessage: 'איימל לא תקין' })
      return
    }
    if(!this.isValidId(userId)){
      this.setState({errMessage:'תז לא תקין'})
      return
    }


    var userData = {
      lName,
      fName,
      userId,
      email,
      pass,
      classId,
      isStudent
    }
    this.props.continueReg(userData)
  }

  isValidEmail = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };

  isValidPassword = (pass) => {
    var pasRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    return pasRegex.test(pass);
  };

  isValidId = (id) =>{
    var id1 = /^\d{9}$/;
    return id1.test(id)
  }

  //לעשות בדיקה על מקוצר אם אני סטודנט אני לא אראה את האינפוט של הכיתה ואם אני מרצה אני אראה את הכיתה
  render() {
    const { pass } = this.state
    return (
      <div style={{}}>
        <div className="Register-Form" style={{ textAlign: 'center', alignItems: 'center', width: '45%', backgroundImage: 'linear-gradient(to right top, #e7e7e7, #ebebeb, #eeeeee, #f2f2f2, #f6f6f6);', bacgroundSize: 'cover', height: '100%' }}>
          <h2>Register</h2>

          <div style={{ margin: '0 auto' }}>
            <RadioGroup aria-label="gender" name="gender1" onChange={() => this.setState({ isStudent: !this.state.isStudent })} >
              <FormControlLabel checked={this.state.isStudent} control={<Radio />} label="Student" />
              <FormControlLabel checked={!this.state.isStudent} control={<Radio />} label="Teacher" />
            </RadioGroup>
          </div>

          <p>First Name:</p>
          <TextField id="outlined-basic" color="secondary" label="Enter first name" variant="outlined" onChange={(e) => this.setState({ fName: e.target.value })} />
          <br />

          <p>Last Name:</p>
          <TextField id="outlined-basic" color="secondary" label="Enter last name" variant="outlined" onChange={(e) => this.setState({ lName: e.target.value })} />
          <br />

          <p>Email:</p>
          <TextField id="outlined-basic" color="secondary" label="Enter email" variant="outlined"
            onChange={(e) => this.setState({ email: e.target.value })} />
          <br />

          <p>User ID:</p>
          <TextField id="outlined-basic" color="secondary" label="Enter ID" variant="outlined" onChange={(e) => this.setState({ userId: e.target.value })} />
          <br />

          <p>Pass:</p>
          <TextField id="outlined-basic" color="secondary" label="Enter password" variant="outlined" type="password" onChange={(e) => this.setState({ pass: e.target.value })} />
          <br></br>
          <br></br>
          <PasswordStrengthBar style={{
            width: ' 60%',
            margin: '0 auto'
          }} password={pass} />
          <p>All Courses:</p>
          <FormControl style={{ width: '100%' }} id="outlined-basic" color="secondary" label="Enter ID" variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.state.classId || 0}
              onChange={(e) => this.setState({ classId: e.target.value })}
              label="Age"
            >
              < MenuItem value={0} > None</MenuItem>
              {this.props.classes && this.props.classes.map(c => {
                return < MenuItem value={c.classId} > {c.subject}</MenuItem>

              })}
            </Select>
          </FormControl>

          <br />
          {this.state.errMessage}
          <br>
          </br>
          <br>
          </br>
          <Button variant="contained" color="primary" onClick={this.funcLogin} >
            Register
        </Button>
          <br />


        </div >
      </div>
    )
  }
}
export default withRouter(Register)
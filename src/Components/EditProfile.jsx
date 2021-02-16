import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAddCheckTwoToneIcon from '@material-ui/icons/PlaylistAddCheckTwoTone';


class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: props.userData.fName,
            lName: props.userData.lName,
            userId: props.userData.userId,
            pass: props.userData.pass,
            isStudent: props.userData.isStudent
        }
    }

    btnEditStudent = () => {
        const { fName, lName, userId, pass, isStudent } = this.state
        const data = {
            fName,
            lName,
            userId,
            pass,
            isStudent
        }
        this.props.editProfile(data)
    }



    render() {
        console.log("PROPS EDIT", this.props);
        return (
            <div className="Edit-Profile">
                <div>
                    <h2>Edit Student</h2>
                </div>
                <TextField id="fName" label="First Name" color="secondary" value={this.state.fName} variant="outlined"
                    onChange={(e) => {
                        this.setState({ fName: e.target.value });
                    }}
                /> <br /> <br />
                <TextField id="lName" label="Last Name" color="secondary" value={this.state.lName} variant="outlined"
                    onChange={(e) => {
                        this.setState({ lName: e.target.value });
                    }}
                /> <br /> <br />

                <TextField id="pass" label="Password" color="secondary" value={this.state.pass} variant="outlined"
                    onChange={(e) => {
                        this.setState({ pass: e.target.value });
                    }}
                /> <br /> <br />

                <IconButton aria-label="people" color="black" size='medium'
                    onClick={this.btnEditStudent}>
                    <PlaylistAddCheckTwoToneIcon />
                </IconButton>
            </div>
        );
    }
}

export default withRouter(EditStudent);
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';


class Storege extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grade: 0
        }
    }

    btnsync = () => {
        //console.log('before');
        this.setState({
            grade: 100
        }, () => {
            console.log("grad in sync=", this.state.grade)
        });

        //console.log("grad after setstate=", this.state.grade)
    }

    render() {
        return (
            <div>
                <NavBar />
                <h2>Storage</h2>
                <button onClick={this.btnsync}>btn</button>
            </div>

        )
    }

}

export default withRouter(Storege);
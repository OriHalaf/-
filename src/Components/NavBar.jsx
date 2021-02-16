import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { IconName } from "react-icons/fa";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grade: 0
        }
    }

    render() {
        return (
            <>
                <header className="navbar">

                    <nav>
                        <a href="/">Home
                    <span></span>
                        </a>
                        <a href="/Forum">Forum
                    <span></span>
                        </a>
                        <a href="/StudentsList">StudentsList
                    <span></span>
                        </a>
                        <a href="/EditProfile">EditProfile
                    <span></span>
                        </a>
                    </nav>

                </header>
                {/* <div style={{ margin: 10 }}>
                    <Link to={{
                        pathname: "/Forum",
                        user: this.props.userData
                    }}>Forum</Link>
                 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
                <Link to={{
                        pathname: "/",
                        user: this.props.userData
                    }}>StudentsList</Link>
                </div> */}
            </>
        )
    }

}

export default withRouter(NavBar);
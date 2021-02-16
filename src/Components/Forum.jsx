import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core';
import '../CSSComponents/fourm.css';
//import NavBar from './NavBar'


class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            // comments: []
        }
    }
    componentDidMount() {
        //console.log("DIDMOU" ,this.props)
        // this.setState({ comments: this.props.comments })
    }

    addComments = () => {
        const { userData } = this.props
        let newComments = this.props.comments
        newComments.push({ name: userData.fName + " " + userData.lName, comment: this.state.comment })
        this.props.addComments(newComments)

        // this.setState({ comments: newComments })
    }

    render() {
        const { comments } = this.props
        //console.log("props" ,this.props)

        return (
            <div className="Forum" style={{ width: '100%' }}>
                <h1 > Ruppin - Forum</h1>
                <h5 style={{fontFamily:'etc',color:"black"}}>Welcome to the official forum of the HackerTec Academic Center</h5>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField id="outlined-basic" color="secondary" label="Enter comments:" variant="outlined" onChange={(e) => this.setState({ comment: e.target.value })} />
                    <Button style={{ width: '80%', margin: '5px auto' }} variant="contained" color="secondary" onClick={() => this.addComments()}>
                        Send
                </Button>
                </div>
                {comments.length ?

                    <div style={{ width: '80%', alignItems: 'left', textAlign: 'left', border:' 1px solid black',
                    padding: '5px',
                    margin: '8px auto',
                    borderRadius:' 10px',
                    boxShadow: '1px 1px 3px 1px' }}>
                        {comments.map((c, i) => (
                            <div key={i} style={{ backgroundColor: i % 2 ? '#afeeee' : '#4682b4', width:'fit-content', borderRadius:'5px' }}>
                                <p style={{ color: 'black', width:'fit-content', padding: '0 4px'  }}>{c.name} : {c.comment}</p>
                            </div>
                        ))}
                    </div>

                    :
                    <>
                        <p>No messages available</p>
                    </>
                }

            </div>
        )
    }
}

export default withRouter(Forum);
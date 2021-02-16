import { FormControl, InputLabel, MenuItem, NativeSelect, Select, Button } from '@material-ui/core'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Forum from './Forum'
import NavBar from './NavBar'




class StudentsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classId: 0,
      goToForum: false
    }
  }



  render() {
    const { userData, students, teachers, classes, comments } = this.props
    const { classId, goToForum } = this.state
    const studentsAfterFilter = classId ? students.filter(s => s.classId == classId) : students
    console.log(studentsAfterFilter)
    console.log("classId", classId)
    console.log(" this.props", this.props)
    return (
      <div style={{
        zIndex: "1",
        marginTop: 150,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',

      }}>
        {/* <NavBar /> */}


        <div style={{
          position: 'absolute',
          top: 25,
          right: 550,
          opacity: 0.5, marginTop: 25,
          borderWidth: 2, backgroundColor: '#194D33',
          borderRadius: 200,
          width: 400,
          alignItems: 'center',
          justifySelf: 'center',
          justifyContent: 'center'
        }}>
          <Button onClick={() => this.setState({ goToForum: true })}>

            <h3 style={{ color: 'white', fontWeight: 'bold' }}>Fourum</h3>
          </Button>
                 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Button onClick={() => this.setState({ goToForum: false })}>
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>StudentList</h3>

          </Button>
        </div>
        {
          goToForum ?
            <>
              <Forum
                userData={userData}
                comments={comments}
                addComments={this.props.setComments}
              />
            </>
            :
            <>
              <h1 style={{ fontFamily: 'etc', color: "black" }} >Hello: {userData.fName + " " + userData.lName}</h1>
              <h2 style={{ fontFamily: 'etc', color: "black", textDecorationLine: 'underline' }}>StudentsList</h2>
              <div>
                <h3 style={{ fontFamily: 'etc', color: "black" }}> Filter By Course</h3>

                <FormControl style={{ width: '100%', maxWidth: '650px' }} id="outlined-basic" color="secondary" label="Enter ID" variant="outlined">
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.classId || 0}
                    onChange={(e) => this.setState({ classId: e.target.value })}
                    label="Age"
                  >
                    < MenuItem value={0} > All Courses</MenuItem>
                    {classes && classes.map(t => {
                      return < MenuItem value={t.classId} > {t.subject}</MenuItem>

                    })}
                  </Select>
                </FormControl>
                {classId !== 0 && <p> Teacher Name :
                                {teachers.filter(t => t.classId == classId)[0].fName + " " + teachers.filter(t => t.classId == classId)[0].lName + " Class Id: " + teachers.filter(t => t.classId == classId)[0].classId} </p>}
              </div>

              <div className='students-list'>
                {studentsAfterFilter.map((student, index) => (
                  <div className='student-card' style={{ boxShadow: '0 0 3px 1px', width: '100%', maxWidth: '650px', margin: '8px auto', position: 'relative', border: '1px solid gray', borderRadius: '3px', textAlign: 'left', padding: 4, display: 'flex', justifyContent: 'center' }}>
                    {userData && userData.classId == classId && userData.isStudent !== true && <button style={{ alignItems: 'center', color: 'red', border: '1px solid white', margin: 5 }}
                      onClick={() => this.props.deleteUser(student.userId)}>X</button>
                    }
                    <p style={{
                      fontWeight: 'bold', position: 'absolute',
                      top: '-22px',
                      left: '1px'
                    }}
                    >{index + 1}</p>
                    <p>Name: {student.fName} {student.lName} - </p>
                    <p>
                      Class: {student.classId}
                    </p>
                  </div>
                )
                )}
              </div>
            </>
        }
      </div >

    )
  }


}

export default withRouter(StudentsList);
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { Button } from '@material-ui/core';
import StudentsList from './StudentsList';
import EditProfile from './EditProfile';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Create from '@material-ui/icons/Create';






class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userConnected: false,
      userData: null,
      students: [
        { fName: 'gal', lName: 'gul', userId: "44433322", pass: '11', classId: 'A', subject: 'Python', isStudent: true, },
        { fName: 'ofir', lName: 'ori', userId: "12", pass: '12', classId: 'A', subject: 'Python', isStudent: true, },
        { fName: 'ori', lName: 'mai', userId: "13", pass: '13', classId: 'A', subject: 'Python', isStudent: true, },
        { fName: 'Yarin', lName: 'Magal', userId: "14", pass: '14', classId: 'B', subject: 'FullStack', isStudent: true, },
        { fName: 'Yagil', lName: 'Madmo', userId: "15", pass: '15', classId: 'B', subject: 'FullStack', isStudent: true, },
        { fName: 'osher', lName: 'Chohen', userId: "16", pass: '16', classId: 'B', subject: 'FullStack', isStudent: true, },
        { fName: 'Shlomi', lName: 'Yarimi', userId: "17", pass: '17', classId: 'C', subject: 'C#', isStudent: true, },
        { fName: 'Natan', lName: 'Levi', userId: "18", pass: '18', classId: 'C', subject: 'C#', isStudent: true, },
        { fName: 'Ron', lName: 'Levi', userId: "19", pass: '19', classId: 'C', subject: 'C#', isStudent: true, },
        { fName: 'Tal', lName: 'Halaf', userId: "22", pass: '22', classId: 'C', subject: 'C#', isStudent: true, },
        { fName: 'Shir', lName: 'Lebel', userId: "22", pass: '22', classId: 'D', subject: 'HTML', isStudent: true, },
        { fName: 'Mai', lName: 'Yehudai', userId: "22", pass: '22', classId: 'D', subject: 'HTML', isStudent: true, },
        { fName: 'Tali', lName: 'Aharon', userId: "22", pass: '22', classId: 'D', subject: 'HTML', isStudent: true, },

      ],

      teachers: [
        { fName: 'Anita', lName: 'Ulman', userId: "33322211", pass: 'Anita1', classId: 'A', subject: 'Python', isStudent: false, },
        { fName: 'Nir', lName: 'Hen', userId: "33", pass: '33', classId: 'B', subject: 'FullStack', isStudent: false, },
        { fName: 'Nitzan', lName: 'Inbar', userId: "44", pass: '44', classId: 'C', subject: 'C#', isStudent: false, },
        { fName: 'Shay', lName: 'Avraham', userId: "55", pass: '55', classId: 'D', subject: 'HTML', isStudent: false, }
      ],
      classes: [
        { classId: "A", subject: 'Python' },
        { classId: "B", subject: 'FullStack' },
        { classId: "C", subject: 'C#' },
        { classId: "D", subject: 'HTML' },
      ],
      comments: [],
      registerOrLogin: true,
      editProfile: false

    }
  }

  password_validate = (p) => {
    return
    // return (/[A-Z]/.test(p) && /[0-9]/.test(p) && /^[a-z]{7,13}$/.test(p));
  }

  RegisterUser = (data) => {

    // console.log(this.password_validate(data.pass), 'data.pass')
    // if (this.password_validate(data.pass)) {
    //   console.log(data.pass, 'data.pass')
    //   // password is good do something
    //   alert("You can now log in")
    //   alert("The registratuin was successful")
    // }
    // else {
    //   alert("Please enter a valid strong password between 8-14 characters. You must enter a capital letter, a small letter, a number."
    //   )
    // }
    if (data.isStudent) {
      var students = this.state.students
      students.push(data)
      this.setState({ students, registerOrLogin: true })
    } else {
      var teachers = this.state.teachers
      teachers.push(data)
      this.setState({ teachers, registerOrLogin: true })
    }

  }

  LoginUser = (data) => {
    const { pass, userId } = data
    const { students, teachers } = this.state

    //בודק אם הסיסמה או התז ריקים, ואם כן יוצא מהפונקציה ומדפיס הודעת שגיאה
    if (!userId || !pass) {
      this.setState({ errMessage: 'Please check your details' })
      return
    }

    // מחפש על המערכים של סטודנטים ומרצים אם קיים משתמש אם אותו תז ואתו סיסמה ואם כן מכניס אותו למערך הריק על ידי פילטור.
    var isActiveUser = []

    isActiveUser = students.filter(s => s.userId === userId && s.pass === pass)

    //אם לא מצא כלום במערך של הסטודנטים אני מחפש  אותו במערך של המרצים . - ואם הוא לא מצא כלום בסטודנטים המערך נישאר בגודל של 0
    if (isActiveUser.length === 0)
      isActiveUser = teachers.filter(s => s.userId === userId && s.pass === pass)

    //console.log("isActiveUser", isActiveUser) //מדפיס את המשתמש אם קיים

    if (isActiveUser.length > 0) {
      //link to StudentsList Page
      this.setState({ userConnected: true, userData: isActiveUser[0] })
      // this.props.history.push("/about", { userData: isActiveUser[0], students: this.state.students, teachers: this.state.teachers, classes: this.state.classes })
    } else {
      this.setState({ errMessage: 'Username or password incorrect' })
      return false
    }
  }
  deleteUser = (userId) => {
    let newStudents = this.state.students.filter(s => s.userId !== userId)

    this.setState({ students: newStudents })
  }
  setComments = (comments) => this.setState({ comments })

  editProfile = (data) => {
    let studentsOrTechersList = data.isStudent ? this.state.students : this.state.teachers
    let newList = []
    let newIsActiveUser = null
    studentsOrTechersList.forEach(item => {
      if (item.userId == data.userId) {
        newList.push({ fName: data.fName, lName: data.lName, userId: item.userId, pass: data.pass, classId: item.classId, subject: item.subject, isStudent: item.isStudent })
        newIsActiveUser = { fName: data.fName, lName: data.lName, userId: item.userId, pass: data.pass, classId: item.classId, subject: item.subject, isStudent: item.isStudent, }
      } else {
        newList.push(item)
      }
    });
    this.setState({ students: data.isStudent ? newList : this.state.students, teachers: !data.isStudent ? newList : this.state.teachers, userData: newIsActiveUser })
    alert("Profile successfully updated")
  }
  render() {
    const { registerOrLogin, classes, userConnected, editProfile, students, teachers } = this.state
    console.log("students", students)
    console.log("teachers", teachers)
    return (
      <div

        style={{ backgroundImage: "url(/img.1)", width: '100%' }}
      >


        {userConnected ?
          <>
            <button onClick={() => editProfile ? this.setState({ editProfile: false }) : this.setState({ userConnected: false, userData: null })} style={{ position: 'absolute', left: 20, top: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 50, width: 80, borderWidth: 1, borderRadius: 100 }}>
              {editProfile ?
                <ArrowBack />

                : "Logout"}
            </button>
            <button onClick={() => this.setState({ editProfile: true })} style={{ position: 'absolute', right: 20, top: 30, backgroundColor: 'red', color: 'white', justifyContent: 'center', alignItems: 'center', height: 50, width: 80, borderWidth: 1, borderRadius: 100 }}>
              <Create />
              edit Profile
                </button>
            {editProfile ?
              <EditProfile
                userData={this.state.userData}
                editProfile={this.editProfile}
              />
              :
              <StudentsList
                userData={this.state.userData}
                students={this.state.students}
                teachers={this.state.teachers}
                classes={this.state.classes}
                deleteUser={this.deleteUser}
                comments={this.state.comments}
                setComments={this.setComments}
              />}
          </>
          :
          <>
            <h2 style={{ fontFamily: 'etc', color: "black" }}>Hello to HackerTec programming courses</h2>


            {
              registerOrLogin ?
                <Login continueLogin={this.LoginUser} />
                :
                <Register teachers={this.state.teachers} students={this.state.students} continueReg={this.RegisterUser} classes={classes} />
            }


            <span>
              <br></br>
              {!registerOrLogin ?
                <Button variant="contained" color="secondary" onClick={() => this.setState({ registerOrLogin: true })}>
                  Go To Login
                </Button> :
                <Button variant="contained" color="secondary" onClick={() => this.setState({ registerOrLogin: false })}>
                  Go To Register
                </Button>}
              <span>
                <h2>{this.state.errMessage}</h2>
              </span>
            </span>
          </>
        }

      </div>
    )
  }


}

export default withRouter(Home);
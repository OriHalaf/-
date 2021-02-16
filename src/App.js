import './App.css';
import React from 'react'
import Storage from './Components/Storege';
import Home from './Components/Home';
import StudentsList from './Components/StudentsList';
import { Route, Switch, withRouter } from 'react-router-dom';
import Forum from './Components/Forum';
import Register from './Components/Register';
import Login from './Components/Login';
import EditProfile from './Components/EditProfile';
import NavBar from './Components/NavBar';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	};
	render() {
		return (
			<div className="App">
				
				<header className="App-header">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/EditProfile">
							<EditProfile />
						</Route>
						<Route path="/Login">
							<Login />
						</Route>
						<Route path="/Register">
							<Register />
						</Route>
						<Route path="/StudentsList">
							<StudentsList />
						</Route>
						<Route path="/storege">
							<Storage />
						</Route>
						<Route path="/Forum">
							<Forum />
						</Route>
					</Switch>

				</header>
			</div>
		);

	};

}

export default withRouter(App);

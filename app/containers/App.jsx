import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello from the App!</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</nav>
				<Switch>
					<Route exact path="/" render={() => 'Welcome to home page!'} />
					<Route path="/about" render={() => 'Welcome to about page!'} />
				</Switch>
			</div>
		);
	}
}

export default hot(module)(App);

import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from '../HomePage/Loadable';
import AboutPage from '../AboutPage/Loadable';

const App = () => (
	<div>
		<h1>Hello from the App!</h1>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		</nav>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
		</Switch>
	</div>
);

export default hot(module)(App);

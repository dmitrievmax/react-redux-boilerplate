import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';

const App = () => (
	<div>
		<nav className="app-nav">
			<NavLink
				exact
				to="/"
				className="app-nav__item"
				activeClassName="app-nav__item--active"
			>
				Home
			</NavLink>
			<NavLink
				to="/about"
				className="app-nav__item"
				activeClassName="app-nav__item--active"
			>
				About
			</NavLink>
		</nav>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
		</Switch>
	</div>
);

export default hot(module)(App);

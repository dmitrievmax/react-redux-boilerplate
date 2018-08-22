import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addVisit, visitCounterSelector } from 'ducks/homePage';

class HomePage extends Component {
	componentDidMount() {
		this.props.addVisit();
	}

	render() {
		const { counter } = this.props;

		return (
			<div className="home-page">
				<div className="home-page__title">Welcome to the React-redux-boilerplate</div>
				<div>
					{counter > 1
						? <i>Page was visited: <b>{counter}</b> times</i>
						: <i>It is your first time here!</i>
					}
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	counter: PropTypes.number.isRequired,
	addVisit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	counter: visitCounterSelector(state)
});

const mapDispatchToProps = ({ addVisit });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

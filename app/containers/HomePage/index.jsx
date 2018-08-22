import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addVisit, visitCounterSelector } from '../../ducks/homePage';

class HomePage extends Component {
	componentDidMount() {
		this.props.addVisit();
	}

	render() {
		const { counter } = this.props;

		return (
			<div>
				<div>This is a home page!</div>
				<div>
					{counter > 1
						? <i>It is your <b>{counter}</b> visit</i>
						: <i>This is your first time here!</i>
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

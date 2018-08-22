import React from 'react';
import PropTypes from 'prop-types';

const LoadableIndicator = ({ error, retry }) => {
	if (error) {
		return (
			<div>
				Something went wrong.
				<button type="button" onClick={retry}>Retry</button>
			</div>
		);
	}

	return (
		<div>Loading...</div>
	);
};

LoadableIndicator.defaultProps = {
	error: null
};

LoadableIndicator.propTypes = {
	error: PropTypes.shape({}),
	retry: PropTypes.func.isRequired
};

export default LoadableIndicator;

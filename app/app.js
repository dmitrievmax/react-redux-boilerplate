import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

// entry point for styles
import './styles.scss';

import App from './containers/App';

ReactDOM.render(
	<App />,
	document.getElementById('app'),
);

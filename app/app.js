import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

// entry point for styles
import './styles.css';

import App from './containers/App';

ReactDOM.render(
	<App />,
	document.getElementById('app'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'sanitize.css';

// entry point for styles
import './styles.scss';

import App from './containers/App';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app'),
);

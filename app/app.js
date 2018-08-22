import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './configureStore';
import App from './containers/App';

// cross-browser defaults for css
import 'sanitize.css';

// entry point for styles
import './styles.scss';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app'),
);

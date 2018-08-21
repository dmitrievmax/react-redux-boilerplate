const express = require('express');
const config = require('config');
const setupFrontend = require('./middlewares/frontendMiddleware');

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

setupFrontend(app);

const host = config.get('host') || 'localhost';
const port = config.get('port');

app.listen(port, host, () => {
	/* eslint-disable no-console */
	console.log(`Server is up and running --> http://${host}:${port}`);
	/* eslint-disable no-console */
});

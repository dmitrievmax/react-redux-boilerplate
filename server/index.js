const express = require('express');
const setupFrontend = require('./middlewares/frontendMiddleware');
const config = require('config');

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

setupFrontend(app);

const host = config.get('host') || 'localhost';
const port = config.get('port');

app.listen(port, host, () => {
	console.log(`Up and running on ${host}:${port}`);
});

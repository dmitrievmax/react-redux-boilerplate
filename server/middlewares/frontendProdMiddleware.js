const config = require('config');
const { resolve } = require('path');
const express = require('express');
const compression = require('compression');

module.exports = app => {
	const publicPath = config.get('publicPath');
	const outputPath = config.get('outputPath');

	app.use(compression());
	app.use(express.static(publicPath));

	app.get('*', (req, res) =>
		res.sendFile(resolve(outputPath, 'index.html')),
	);
};

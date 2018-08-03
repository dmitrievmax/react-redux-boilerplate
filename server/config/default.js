const path = require('path');
module.exports = {
	publicPath: '/',
	outputPath: path.resolve(process.cwd(), 'build'),
	host: process.env.HOST || null, // get the intended host and port number, use localhost if not provided
	port: parseInt(process.env.PORT || '8080', 10)
};
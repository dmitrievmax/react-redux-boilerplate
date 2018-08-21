const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack/webpack.dev');

module.exports = (app) => {
	const compiler = webpack(webpackConfig);
	const middleware = webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		stats: 'errors-only',
	});

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
};

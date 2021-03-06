const config = require('config');
const webpack = require('webpack');

const plugins = [
	new webpack.ProvidePlugin({
		// make fetch available
		fetch: 'exports-loader?self.fetch!whatwg-fetch',
	}),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		},
	}),
];

module.exports = options => ({
	mode: options.mode,
	entry: options.entry,
	output: Object.assign({
		path: config.get('outputPath'),
		publicPath: config.get('publicPath')
	}, options.output),
	optimization: options.optimisation,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							// Inline files smaller than 10 kB
							limit: 10 * 1024,
							noquotes: true,
						},
					},
				],
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							// Inline files smaller than 10 kB
							limit: 10 * 1024,
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								enabled: false, // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
							},
							gifsicle: {
								interlaced: false,
							},
							optipng: {
								optimizationLevel: 7,
							},
							pngquant: {
								quality: '65-90',
								speed: 4,
							},
						},
					},
				],
			}
		].concat(options.module.rules)
	},
	plugins: plugins.concat(options.plugins),
	resolve: {
		modules: ['node_modules', 'app'],
		extensions: ['.js', '.jsx'],
		mainFields: ['browser', 'jsnext:main', 'main'],
	},
	devtool: options.devtool,
	target: 'web', // Make web variables accessible to webpack, e.g. window
	performance: options.performance || {},
});

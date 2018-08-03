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
			{ // Preprocess app`s css, preprocessors could be included here
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				// Preprocess 3rd party .css files located in node_modules
				test: /\.css$/,
				include: /node_modules/,
				use: ['style-loader', 'css-loader'],
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
		]
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

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
	// Minify and optimize the index.html
	new HtmlWebpackPlugin({
		template: 'app/index.html',
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true,
		},
		inject: true,
	}),
	new webpack.HashedModuleIdsPlugin({
		hashFunction: 'sha256',
		hashDigest: 'hex',
		hashDigestLength: 20,
	}),
];

module.exports = require('./webpack.base')({
	mode: 'production',
	entry: [path.join(process.cwd(), 'app/app.js')],
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].chunk.js',
	},
	optimization: {
		minimize: true,
		nodeEnv: 'production',
		sideEffects: true,
		concatenateModules: true,
		splitChunks: { chunks: 'all' },
		runtimeChunk: true,
	},
	plugins,
});

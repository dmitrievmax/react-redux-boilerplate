const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css',
		chunkFilename: '[name].[contenthash].chunk.css',
	}),
];

module.exports = require('./webpack.base')({
	mode: 'production',
	entry: [path.join(process.cwd(), 'app/app.js')],
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].chunk.js',
	},
	module: {
		rules: [
			{ // Preprocess app`s css, preprocessors could be included here
				test: /\.scss/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		]
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

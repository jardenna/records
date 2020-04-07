const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');



module.exports = merge(common, {
	mode: 'production',

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: './',
		filename: '[name].[hash].js'

	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			cache: true
		})]
	},
	plugins: [
		new CleanWebpackPlugin()
	]
});

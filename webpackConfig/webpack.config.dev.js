const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		libs: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
};

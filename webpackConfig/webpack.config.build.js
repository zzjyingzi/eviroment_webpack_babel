const path = require('path');

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

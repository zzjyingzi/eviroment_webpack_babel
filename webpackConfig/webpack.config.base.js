const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name][hash:5].js',
		path: path.resolve(__dirname, '../dist')
	},
  devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true,
      inline: true
  },
  devtool: 'eval-source-map',

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: '大云物联',
			template: './static/index.html',
      // filename: "",
      // templateParameters: "",
      // inject: "",
      // favicon: "",
      // meta: "",
      // minify: false,  //boolean
      // hash: "",
      // cache: "",
      // showErrors: "",
      // chunks: "",
      // excludeChunks: "",   // skip some chunks
      // xhtml: "",
      chunksSortMode:"dependency",
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	},
	optimization: {
		splitChunks: {
			chunks: "all", //all, async, and initial
			maxAsyncRequests: 5,
			cacheGroups: {
				libs: {    //在一层的中拆出了第二层，第二层生成了libs~index.js文件
					name: true,
					chunks: "initial",
					minChunks: 1,
					automaticNameDelimiter: "_"
				},
        components: {
          name: true,
          chunks: "initial",
          minChunks: 2,
          automaticNameDelimiter: "_"
        },
        utils: {
          name: true,
          chunks: "initial",
          minChunks: 3,
          automaticNameDelimiter: "_"
        }
			}
		}
	}
};

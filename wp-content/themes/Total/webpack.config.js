const webpack = require('webpack');
const path = require('path');


module.exports = {
	entry: "./assets/js/main.js",
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: "bundle.js"
		},
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']

				},
				{
					test: /\.css$/,
					use: ['css-loader', 'style-loader']
				},
				{ 
					test: /\.js$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				}
			]
		},
		plugins: []
};

// if (process.env.NODE_ENV === 'production') {
// 	module.exports.plugins.push(
// 		new webpack.optimize.UglifyJsPlugin()
// 	);
// }
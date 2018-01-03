const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const inProduction = process.env.NODE_ENV === 'production';
const BuildManifestPlugin = require('./assets/build/plugins/BuildManifestPlugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PhpManifestPlugin = require('webpack-php-manifest');
const phpManifest = new PhpManifestPlugin({
	devServer: process.env.WEBPACK_DEV_SERVER,
	pathPrefix: process.env.WEBPACK_DEV_SERVER ? 'http://localhost:9000' : null,
	phpClassName: 'WebpackBuiltFiles'
});

module.exports = {
	entry: {
		index: "./assets/js/main.js",
		// functions: "./functions.php"
		// vendor: ['jquery']
	},
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: 'bundle.js'
		},
		devServer: {
			contentBase: path.join(__dirname, "/dist"),
			compress: true,
			port: 9000,
			allowedHosts: [
				'localhost:8080'
			]
		},
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/,
					use: ExtractTextPlugin.extract({
						use: ['css-loader', 'sass-loader'],
						fallback: 'style-loader'
					})
				},
				{
					test: /\.css$/,
					use: ['css-loader', 'style-loader']
				},
				{
					test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
					loaders: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/[name].[hash].[ext]'
							}
						},
						'img-loader'
					]
				},
				{ 
					test: /\.js$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				}
			]
		},
		plugins: [
			phpManifest,
			new HtmlWebpackPlugin({
				filename: 'test.html',
				template: './test.html'
			}),
			// new UglifyJSPlugin(),
    	new CleanWebpackPlugin('dist', 'build' [{
				root: __dirname,
				verbose:  true,
				dry:      false
			}]),

			new ExtractTextPlugin('[name].css'),
			new webpack.LoaderOptionsPlugin({
				minimize: true
			}),

			new BuildManifestPlugin(),

			// function () {
			// 	this.plugin('done', stats => {
			// 		require('fs').writeFileSync(
			// 			path.join(__dirname, 'dist/manifest.json'),
			// 			JSON.stringify(stats.toJson())
			// 		);
			// 	});
			// },
			
			new PurifyCSSPlugin({
				// Give paths to parse for rules. These should be absolute!
				paths: glob.sync(path.join(__dirname, 'app/*.html')),
				minimize: true
			})
		]
};
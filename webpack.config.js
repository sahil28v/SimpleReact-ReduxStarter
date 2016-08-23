var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'eventsource-polyfill',
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static'
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: "babel",
				exclude: /node_modules/,
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				loaders: [
					'style',
					'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
					'postcss'
				],
				exclude: [
			      path.resolve('node_modules')
			    ]
			},
			{
				test: /\.css$/,
				loaders: [
					'style',
					'css',
				],
				include:[
					path.resolve('node_modules','grommet')
				]
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file?name=[path][name].[hash].[ext]',
			}
		],
		postcss:[
			require('autoprefixer'),
		]
	}
};
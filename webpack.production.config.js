var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'eventsource-polyfill',
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins:[
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: true
			}
		})
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
			      path.resolve('node_modules', 'grommet')
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
		],
		postcss:[
			require('autoprefixer'),
		]
	}
};
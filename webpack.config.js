var path = require('path');
var webpack = require('webpack');

module.exports = {

	context: path.join(__dirname, 'src'),
	entry: ['babel-polyfill', './app.js'],
	output: {
		filename: 'bundle.js'
	},
	watch: true,
	devtool: 'inline-sourcemap',
	devServer: { inline: true, hot: true },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: __dirname,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
					compact: true
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: "css-loader!sass-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(png|jpg|gif|eot|woff2?|svg|ttf)([\?]?.*)$/,
				loader: 'file-loader'
			}
		]
	},
	historyApiFallback: {
		index: 'index.html'
    },
	resolve: {
		extensions: ['', '.js'],
		moduleDirectories: ['./node_modules']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]

};

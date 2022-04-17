const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	/* context决定entry入口和loaders中写的相对路径是相对与哪一个路径 */
	context:path.resolve(__dirname,'./'), 
	mode:'development',
	devtool:'source-map',
	entry:'./src/main.js',
	output:{
		filename:'./bundle.js',
		path:path.resolve(__dirname,'./dist')
	},
	resolve:{
		extensions:['.js']
	},
	module:{
		rules:[
			{
				test:/\.css$/i,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.md$/i,
				use:[
					// 'html-loader',
					'gk-md-loader',
				]
			},
			{
				test:/\.js$/i,
				use:[
					{
						loader:'gk-babel-loader',
						options:{
							presets:[
								"@babel/preset-env"
							]
						}
					}
				]
			}
		]
	},
	/* 专门用于解析loader路径的配置 */
	resolveLoader:{
		modules:['node_modules','./custom-loaders'],
		extensions:['.js','.json'],
	},
	plugins:[
		new HtmlWebpackPlugin()
	]
}
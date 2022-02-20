const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
	mode:"development",
	devtool:"nosources-source-map",
	entry: "./src/main.js",
	output: {
		filename: "js/bundle.js",
		path: path.resolve(__dirname, '../build'),
		// assetModuleFilename:"img/[name]-[hash:6][ext]"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:{
					loader:"babel-loader",
					options:{
						presets:["@babel/preset-env"]
					}
				}
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title:"webpack module"
		}),
		new DefinePlugin({
			BASE_URL:JSON.stringify('./'), 
		})
	]
}

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
				exclude:/node_modules/,
				use:{
					loader:"babel-loader",
					options:{
						// presets:[
						// 	["@babel/preset-env",{
						// 		// useBuiltIns:"false"
						// 	}],
						// 	["@babel/preset-react"]
						// ],
						// plugins:[
						// 	["@babel/plugin-transform-runtime",{
						// 		"corejs":3
						// 	}]
						// ]
					}
				}
			},
			{
				test:/\.ts$/,
				exclude:/node_modules/,
				use:{
					loader:"babel-loader"
				}
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title:"webpack module",
			template:'./index.html'
		}),
		new DefinePlugin({
			BASE_URL:JSON.stringify('./'), 
		})
	]
}

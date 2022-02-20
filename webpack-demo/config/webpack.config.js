const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "js/bundle.js",
		path: path.resolve(__dirname, '../build'),
		// assetModuleFilename:"img/[name]-[hash:6][ext]"
	},
	module: {
		rules: [
			{
				test: /\.css$/, // 匹配规则
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader"
				]
			},
			{
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"less-loader"
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				type:"asset",
				generator:{
					filename:"img/[name][hash:6][ext]",
				},
				parser:{
					dataUrlCondition:{
						maxSize:200 *1024
					}
				}
			},
			{
				test:/\.ttf|woff|woff2$/i,
				type:"asset/resource",
				generator:{
					filename:"font/[name][ext]"
				}
			}
			/* {
				test: /\.(png|jpe?g|gif|svg)$/,
				type:"asset/resource"
				use: [
					{
						loader:"file-loader",
						options:{
							name:"[name].[hash:4].[ext]", // 代表输出的文件保留文件名和拓展，并且取hash值的前6位
							outputPath:'assets'  // 代表输出的文件夹名称为image  
						}
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: [
					{
						loader:"url-loader",
						options:{
							name:"img/[name].[hash:6].[ext]" ,// 代表输出的文件保留文件名和拓展，并且取hash值的前6位
							limit:10 * 1024,
							esModule:false
						}
					}
				],
				 type: 'javascript/auto'
			} */
		]
	},
	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title:"webpack test",
			template:"public/index.html"
		}),
		new DefinePlugin({
			BASE_URL:JSON.stringify('./'), 
		}),
		new CopyPlugin({
			patterns:[
				{
					from:"public",
					globOptions:{
						ignore:[
							"**/index.html*",
							"**/1.txt*"
						]
					}
				}
			]
		})
	]
}

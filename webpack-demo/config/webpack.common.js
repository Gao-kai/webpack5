const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin} = require('vue-loader');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const resolvePath = require('./path');

// 导入生产环境配置和开发环境配置
const prodConfig = require('./webpack.prod.js');
const devConfig = require('./webpack.dev.js');

// 导入merge函数
const {merge} =  require("webpack-merge");

const commonConfig = {
	context:resolvePath("./"),
	entry: {
		index:{
			import:"./src/index.js",
			// dependOn:"shared",
		},
		main:{
			import:"./src/main.js",
			// dependOn:"shared",
		},
		// shared:["lodash","dayjs"]
	},
	optimization:{
		/* 禁用剥离注释功能  不生成LICENSE.txt文件*/
		minimizer: [
		  new TerserPlugin({
			extractComments: false,
		  }),
		],
		chunkIds:"deterministic",
		runtimeChunk:"single",
		/* 设置分包规则 */
		splitChunks:{
			chunks:"all",
			minSize:20000,
			cacheGroups:{
				vendors:{
					test:/[\\/]node_modules[\\/]/,
					// 设置分包的包名
					// name:"vendors-chunk",
					filename:"[id]_vendors-chunk.js",
					priority:-10,
				},
				default:{
					minChunks:2,
					filename:"common-chunk.js",
					priority:-20,
				}
			}
		}
	},
	output: {
		path: resolvePath("./build"),
		filename: "[name].bundle.js",
		chunkFilename:"[name].chunk.js"
		// publicPath:"/"
		// assetModuleFilename:"img/[name]-[hash:6][ext]"
	},
	resolve:{
		extensions:['.js', '.json', '.wasm','.jsx','.vue'],
		mainFiles:['index','main']
	},
	module: {
		rules: [{
				test: /\.less$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 2
						}
					},
					"postcss-loader",
					"less-loader",
				]
			},
			{
				test: /\.css/,
				use: [
					// "style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
				]
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.vue$/,
				use: "vue-loader"
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "webpack module",
			template: resolvePath("./index.html"),
		}),
		new DefinePlugin({
			BASE_URL: JSON.stringify("./"),
		}),
		new VueLoaderPlugin(),
		new webpack.ProvidePlugin({
			axios:"axios",
			get:["axios","get"],
		}),
		new MiniCssExtractPlugin({
			filename:"[name]-[hash:6].css"
		})
		
	],
};

// 导出
module.exports = function(env){
	// 基于scripts中的--env参数获取当前环境是否为生产环境
	const isProd = env.production;
	console.log("isProd: ",isProd);
	// 在当前进程中注入当前获取的环境信息
	process.env.NODE_ENV = isProd ? 'production':'development';
	console.log("process.env.NODE_ENV: ",process.env.NODE_ENV);
	
	// 基于webpack-merge库进行配置合并
	const webpackConfig = isProd ? merge(prodConfig,commonConfig):merge(devConfig,commonConfig);
	
	console.log("webpackConfig: ",webpackConfig);
	return webpackConfig;
}
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
	DefinePlugin
} = require("webpack");
const {
	VueLoaderPlugin
} = require('vue-loader');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const resolvePath = require('./path');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

// 导入生产环境配置和开发环境配置
const prodConfig = require('./webpack.prod.js');
const devConfig = require('./webpack.dev.js');

// 导入merge函数
const {
	merge
} = require("webpack-merge");

const commonConfig = (isProd) => {
	return {
		context: resolvePath("./"),
		entry: {
			index: {
				import: "./src/index.js",
				// dependOn:"shared",
			},
			main: {
				import: "./src/main.js",
				// dependOn:"shared",
			},
			// shared:["lodash","dayjs"]
		},
		optimization: {
			/* 禁用剥离注释功能  不生成LICENSE.txt文件*/
			minimizer: [
				new TerserPlugin({
					extractComments: false,
				}),
			],
			chunkIds: "deterministic",
			runtimeChunk: "single",
			/* 设置分包规则 */
			splitChunks: {
				chunks: "all",
				minSize: 20000,
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						// 设置分包的包名
						// name:"vendors-chunk",
						filename: "js/[id]_vendors-chunk.js",
						priority: -10,
					},
					default: {
						minChunks: 2,
						filename: "js/common-chunk.js",
						priority: -20,
					}
				}
			}
		},
		output: {
			path: resolvePath("./build"),
			filename: "js/[name]-[contenthash:6].bundle.js",
			chunkFilename: "js/[name]-[contenthash:6].chunk.js"
			// publicPath:"/"
			// assetModuleFilename:"img/[name]-[hash:6][ext]"
		},
		resolve: {
			extensions: ['.js', '.json', '.wasm', '.jsx', '.vue'],
			mainFiles: ['index', 'main']
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
						/* 
							在生产环境下使用MiniCssExtractPlugin.lodaer将css抽取到单独文件中基于link标签引入
							在开发环境下使用默认的style-loader不进行抽取，直接插入到style标签中
						 */
						isProd? MiniCssExtractPlugin.loader:'style-loader',
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
				axios: "axios",
				get: ["axios", "get"],
			}),
			new MiniCssExtractPlugin({
				filename: "css/[name]-[contenthash:6].css"
			}),
			new webpack.DllReferencePlugin({
				context:resolvePath('./'),
				manifest:resolvePath('./dll/react.manifest.json'),
				
			}),
			new AddAssetHtmlWebpackPlugin({
				filepath:resolvePath('./dll/dll_react.js')
			})

		],
	};
}

// 导出
module.exports = function(env) {
	// 基于scripts中的--env参数获取当前环境是否为生产环境
	const isProd = env.production;
	console.log("isProd: ", isProd);
	// 在当前进程中注入当前获取的环境信息
	process.env.NODE_ENV = isProd ? 'production' : 'development';
	console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

	// 基于webpack-merge库进行配置合并
	const webpackConfig = isProd ? merge(prodConfig, commonConfig(isProd)) : merge(devConfig, commonConfig(isProd));

	console.log("webpackConfig: ", webpackConfig);
	return webpackConfig;
}

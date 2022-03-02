const path = require("path");
const {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
	DefinePlugin
} = require("webpack");
const {
	VueLoaderPlugin
} = require('vue-loader');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
	// watch:true,
	mode: "development",
	devtool: "nosources-source-map",
	entry: "./src/main.js",
	devServer:{
		hot:true
	},
	output: {
		filename: "js/bundle.js",
		path: path.resolve(__dirname, "../build"),
		// assetModuleFilename:"img/[name]-[hash:6][ext]"
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
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "webpack module",
			template: "./index.html",
		}),
		new DefinePlugin({
			BASE_URL: JSON.stringify("./"),
		}),
		new ReactRefreshWebpackPlugin(),
		new VueLoaderPlugin(),
	],
};

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
	mode: "production",
	// devtool: "source-map",
	output:{
		publicPath:"./"
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
};

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
	mode: "production",
	// devtool: "source-map",
	output:{
		publicPath:"./",
		// publicPath:"https://webpack-demo.com/cdn/"
	},
	externals:{
		lodash:"_",
		dayjs:"dayjs"
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
};

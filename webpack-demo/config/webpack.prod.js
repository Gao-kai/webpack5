const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
	mode: "production",
	devtool: false,
	output:{
		publicPath:"./",
		// publicPath:"https://webpack-demo.com/cdn/"
	},
	optimization:{
		minimize:true,
		minimizer:[
			new TerserPlugin({
				extractComments:false,
				parallel:true,
				terserOptions: {
					compress:{
						dead_code:true,
						arguments:true,
						arrows:true
					},
					mangle:true,
					toplevel:true,
					keep_fnames:false,
					keep_classnames:false
				}
			}),
			new CssMinimizerWebpackPlugin({
				parallel:true, // 多进程构建
			})
		]
	},
	externals:{
		lodash:"_",
		dayjs:"dayjs"
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
};

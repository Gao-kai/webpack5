const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const PurgeCssWebpackPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const resolvePath = require('./path');
const CompressWebpackPlugin = require('compression-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "production",
	devtool: false,
	output:{
		publicPath:"./",
		// publicPath:"https://webpack-demo.com/cdn/"
	},
	optimization:{
		usedExports:true,
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
					mangle:false,
					toplevel:true,
					keep_fnames:false,
					keep_classnames:false
				}
			}),
			new CssMinimizerWebpackPlugin({
				parallel:true, // 多进程构建来压缩CSS代码 删除多余的空格
			})
		]
	},
	externals:{
		lodash:"_",
		dayjs:"dayjs"
	},
	plugins: [
		new CleanWebpackPlugin(),
		// 将css文件单独抽取到一个文件中
		new MiniCssExtractPlugin({
			filename: "css/[name]-[contenthash:6].css"
		}),
		// css tree shaking
		new PurgeCssWebpackPlugin({
			paths:glob.sync(`${resolvePath('./src')}/**/*`,{nodir:true}),
			safelist:function(){
				return {
					standard:["body","html"]
				}
			}
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new CompressWebpackPlugin({
			threshold:0,
			test:/\.(css|js)$/i,
			minRatio:0.8,
			algorithm:'gzip'
		}),
		new InlineChunkHtmlPlugin(HtmlWebpackPlugin,[/runtime.+\.js/])
		
	],
};

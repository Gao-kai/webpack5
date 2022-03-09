const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const resolvePath = require('./path');

module.exports = {
	mode: "development",
	devtool: "source-map",
	output:{
		publicPath:"/"
	},
	devServer:{
		hot:'only',
		port:5555,
		compress:true,
		open:true,
		static:{
			directory:resolvePath("./vender"),
			publicPath:'/vender'
		},
		historyApiFallback:true,
		proxy:{
			"/kai":{
				target:"http://127.168.15.12:5500",
				pathRewrite:{
					"^/kai":""
				},
				secure:false,
				changeOrigin:true
			}
		}
	},
	plugins: [
		new ReactRefreshWebpackPlugin(),
	],
};

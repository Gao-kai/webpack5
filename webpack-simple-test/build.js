const webpack = require('webpack');
const config = require('./config/webpack.common.js');

const webpackConfig = config({
	production:true
});

const compiler = webpack(webpackConfig,()=>{});
console.log('compiler',compiler);
const webpackDevMiddleWare = require('webpack-dev-middleware');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./config/webpack.config.js');

const compiler = webpack(webpackConfig);
const middleWare = webpackDevMiddleWare(compiler);

const app = express();
app.use(middleWare);
app.listen(5500,()=>{
	console.log('express服务已经运行在5500端口！')
})
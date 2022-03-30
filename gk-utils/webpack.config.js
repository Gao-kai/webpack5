const path = require('path');
module.exports = {
	mode:'production',
	entry:'./index.js',
	output:{
		filename:"gk-utils.js",
		path:path.resolve(__dirname,'./build'),
		libraryTarget:'umd',
		library:'gkUtils',
		globalObject:"this"
	}
}
const path = require('path');
// console.log(process.cwd())
// C:\Users\克林辣舞\Desktop\webpack\webpack-demo - 副本\config

// cwd就是启动时的目录 

function resolvePath(relativePath){
	const dirPath = process.cwd();
	const absolutePath = path.resolve(dirPath,relativePath);
	return absolutePath;
}

module.exports = resolvePath;
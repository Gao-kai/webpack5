/**
 * content:webpack通过fs.readFile读取到的当前要使用loader转化模块的所有内容
 * sourcemap：一般不使用
 * meta：元数据，一般也不使用
 *
 */

/* Normal Loader */
const {getOptions} = require('loader-utils');
const {validate} = require('schema-utils');
const gkLoader01Scheme = require('../loader-scheme/gkLoader01-scheme.json');

module.exports = function (content,sourcemap,meta) {
	console.log('这是Normal Loader1',content);
	
	/* 1.获取options参数 */
	const options = this.query;
	console.log('传递的options参数是',this.query);
	
	/* 
		2.校验options参数 
		参数1为校验规则对象
		参数2为校验的options参数
	 */
	validate(gkLoader01Scheme,options)
	
	/* 3.设置当前loader为异步loader */
	const callback = this.async();
	setTimeout(()=>{
		content += 123;
		callback(null,content);
	},2000)
}

/* Pitch Loader */
module.exports.pitch = function (content) {
	console.log('这是Pitch Loader1',content);
}

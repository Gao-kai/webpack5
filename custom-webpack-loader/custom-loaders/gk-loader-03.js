/**
 * content:webpack通过fs.readFile读取到的当前要使用loader转化模块的所有内容
 * sourcemap：一般不使用
 * meta：元数据，一般也不使用
 *
 */

/* Normal Loader */
module.exports = function (content,sourcemap,meta) {
	console.log('这是Normal Loader3',content);
	return content; 
}

/* Pitch Loader */
module.exports.pitch = function (content) {
	console.log('这是Pitch Loader3',content);
}

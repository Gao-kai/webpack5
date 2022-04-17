const marked = require('marked');
const hljs = require('highlight.js');

module.exports = function(content){
	
	marked.setOptions({
		highlight:function(code,lang){
			return hljs.highlight(lang,code).value;
		}
	})
	
	// console.log('读取到README.md文件中的内容是',content);
	
	const htmlContent = marked.parse(content);
	console.log('htmlContent',htmlContent);
	
	/* 转化为js格式字符串 */
	const innerHtmlCode = "`" + htmlContent + "`";
	const moduleCode = `var code = ${innerHtmlCode};export default code`;

	return moduleCode;
}
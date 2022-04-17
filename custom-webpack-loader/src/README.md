## 《深入webpack5等构建工具》
+ webpack核心配置深入解析
+ webpack常用loaders和plugin
+ 自定义webpack中自己的loader和plugin
+ Babel用法以及polyfill、TS的支持
+ Eslint的配置规则以及在vscode、webpack中的使用
+ webpack的性能优化方案：打包抽取分包、Tree Shaking、动态链接库、CDN、gzip压缩
+ webpack模块化原理解析、打包原理实现等

## 《深入研究 Webpack》微信公众号系列文章

### 珠峰架构师 《手写实现webpack》
### 珠峰架构师 《webpack面试题》
- Vscode中eslint插件和prettier插件专题
- ast抽象语法树
- babel原理
- eslint工作原理
- loader工作原理

```js
const babel = require('@babel/core');

module.exports = function(content){
	// 1.设置为异步loader，因为bable转化结果是基于回调实现的1.设置为异步loader，因为bable转化结果是基于回调实现的1.设置为异步loader，因为bable转化结果是基于回调实现的
	const callback = this.async();
	
	// 2. 获取参数
	const options = this.query;
	
	// 3. 基于babel/core的transform方法对源代码进行转化
	babel.transform(content,options,(err,result)=>{
		if(err){
			callback(err);
		}else{
			console.log(result.code);
			callback(null,result.code);
		}
	})
}
```
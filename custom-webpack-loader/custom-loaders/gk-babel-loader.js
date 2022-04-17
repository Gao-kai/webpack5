const babel = require('@babel/core');

module.exports = function(content){
	// 1.设置为异步loader，因为bable转化结果是基于回调实现的
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
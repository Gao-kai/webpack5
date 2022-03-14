// import "./test/common-key.js";
// import "./test/common-value.js";

import dayjs from "dayjs";
console.log(dayjs().format());

// import(/* webpackChunkName:"cube" */'./test/async2.js').then(res=>{
// 	console.log(res);
// })

console.log('这是index.js入口相关的代码');



if(module.hot){
	module.hot.accept();
}
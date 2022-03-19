/* 1. 使用polyfill入口文件配置相关代码 */
// import "core-js/stable";
// import "regenerator-runtime/runtime";


/* 2. React组件入口代码 */
// import './react/index.jsx';
// import ReactDom from "react-dom";
// import React from 'react';
// import App from './react/index.jsx'
// ReactDom.render(<App/>,document.getElementById('app'));


/* 3. Vue组件入口代码 */
// import './vue/index.js';


/* 4. TypeScript入口代码 */
// import "./ts/index.ts";


/* 5. 演示webpack模块化打包原理代码 */
// import { CommonSum, CommonMul } from "./js/CommonJS.js"
// console.log(CommonSum(10,20))
// console.log(CommonMul(10,20))
// const {ESModuleSum,ESModuleMul,ESModulec} = require('./js/ESModule.js')
// consolo.log(ESModuleSum(10,ESModulec))
// consolo.log(ESModuleMul(10,ESModulec))


/* 6. CodeSplit入口代码 */
// import "./test/common-key.js";
// import "./test/common-value.js";
// import _ from "lodash";
// console.log(_.join(['c','d']));

// import(/* webpackChunkName:"tiny" */'./test/async1.js').then(res=>{
// 	console.log(res);
// })

/* shimming代码 */
// import './test/shimming.js'

/* 分离css代码 */
import './css/index.css'


/* 7. 代码懒加载 */
// const btn = document.createElement('button');
// btn.innerHTML = "点击加载";
// document.body.appendChild(btn);

// btn.addEventListener('click',()=>{
// 	import(
// 	/* webpackChunkName:"lazyload" */
// 	/* webpackPrefetch:true */
// 	'./lazyload/element.js').then(({default:ele})=>{
// 		console.log(ele);
// 		document.body.appendChild(ele);
// 	})
// })

/* 8. terserPlugin */
import './test/terserTest.js'

console.log('这是main.js入口相关的代码1');

/* 7. HMR相关代码 代表当前文件支持HMR热更新 */
if(module.hot){
	module.hot.accept();
}


/* THIS IS A ES MODULE 导入了一个CommonJS模块 */
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import './react/index.jsx';
// import "./ts/index.ts";
import './vue/index.js';
import './index.js'
import ReactDom from "react-dom";
import React from 'react';
import App from './react/index.jsx'

import {
	CommonSum,
	CommonMul
} from "./js/CommonJS.js"


console.log(CommonSum(10,20))
console.log(CommonMul(10,20))


if(module.hot){
	module.hot.accept('./index.js',()=>{
		console.log(module);
		console.log('index.js發生模塊熱更新');
	});
}

ReactDom.render(<App/>,document.getElementById('app'));


// const {ESModuleSum,ESModuleMul,ESModulec} = require('./js/ESModule.js')
// consolo.log(ESModuleSum(10,ESModulec))
// consolo.log(ESModuleMul(10,ESModulec))


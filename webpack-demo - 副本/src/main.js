/* THIS IS A ES MODULE 导入了一个CommonJS模块 */
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import './react/index.js';
import "./ts/index.ts";

import {
	CommonSum,
	CommonMul
} from "./js/CommonJS.js"
console.log(CommonSum(10,20))
console.log(CommonMul(10,20))





// const {ESModuleSum,ESModuleMul,ESModulec} = require('./js/ESModule.js')
// consolo.log(ESModuleSum(10,ESModulec))
// consolo.log(ESModuleMul(10,ESModulec))


import {sum,mul} from './js/utils.js';
import './js/component.js';

const {getDate,getPrice} = require('./js/share.js');

const a = 20;
const b = 10;

console.log(sum(a,b));
console.log(mul(a,b));


console.log(getDate());
console.log(getPrice());
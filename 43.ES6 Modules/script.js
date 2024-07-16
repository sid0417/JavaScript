//ES6 Module:An external file that contains reusable code that can be imported in other javascript files.
//           Write reusable code for many different apps 
//           can contain variable,classess,function and more .... introduced as a part of ECMAScript 2015 update

import {pi,getArea,getcircumference} from './mathUtils.js'

console.log(pi)
const circum = getcircumference(10);
console.log(`${circum.toFixed(3)}cm`)
/****
 * IIFE - Inmedialetly Invoque Function Execution
 * 
 * Script Tags - lack of dependency resolution
 * 
 * Inline scripts - can´t reuse code
 * 
 * 
 * 
 */


 // IIFE
 (function (){

 })();
 //after creating its been executed



 // --Common JS +  Browserify

 //js1
 module.exports = function add(a, b){
     return a+b;
 }

 //js2
 var add = require("./add");

 //the tools will create a single file "bundle.js"




//------ES6 + Webpack2
//js1
 export const add = (a, b) => a + b;
//or
export default function add(){
    return a + b;
}

import { add } from './add';
//or 
import add from './add'; //for default exports 
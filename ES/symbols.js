//symbols

let sym = Symbol();
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');

//symbols are unique kind of types
console.log(sym1 === sym2);
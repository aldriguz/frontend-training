//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10)
addToTen(3)
//result = 13
//addTo(10) is y => 10 + y
//addToTen(3) is 10 + 3

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//result = 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//result = 17


//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//result = 16
//first add5, then add1

//What are the two elements of a pure function?
// 1. avoid side effects
// 2. determinism
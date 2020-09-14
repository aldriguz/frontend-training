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


// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const searchInside = [];
dragons.forEach(dragon => {
    if(dragon.includes('John'))
        searchInside.push(dragon);
});

searchInside;

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerOf100 = (x) => x**100;
powerOf100(2);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
//infinity



//----- ES8
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

//solution
var startLineLength = startLine.indexOf('-');
turtle = turtle.padStart(startLineLength);
rabbit = rabbit.padStart(startLineLength);


// when you do:
console.log(startLineLength);
console.log(startLine);
console.log(turtle);
console.log(rabbit);






// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

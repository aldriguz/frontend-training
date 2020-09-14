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




//-----------------------------------------------------

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


//-----------------------------------------------------
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

//solution: second parameter is the character that will be filled in


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

var strFromObj = '';
Object.entries(obj).map(value => {
    strFromObj = strFromObj.concat(`${value[0]} ${value[1]} `);
});

console.log(strFromObj);


//-----------------------------------------------------

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat().flat();

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
greeting.flat();
greeting.flatMap(item => item.join(' '));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
greeting.flatMap(item => item.join(' ')).join(' ');



//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
userEmail3.trimStart().trimEnd();


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
Object.entries(users);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
Object.entries(users).map(item => {
    return [item[0], item[1] * 2];
});


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const newUsers = Object.entries(users).map(item => {
    return [item[0], item[1] * 2];
});

Object.fromEntries(newUsers);
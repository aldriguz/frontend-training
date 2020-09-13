const array = [1, 2, 5, 4];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log('forEach', double);


//map, filter, reduce

// --- map ---
//iterates each elements and set the returned value to the current item in iteration, the result in a new array
const mapArray = array.map((num) => {
    return num * 2;
});

//equivalent
const mapArraySame = array.map(num => num * 2);
console.log('map', mapArray);


// --- filter ---
//return a new array with the items of array that satisfies the condition/rule
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// --- reduce ---
// return an accumulator based on the body
// needs a function with accuulator, and a second parameter is the init value
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);

console.log('reduce', reduceArray);


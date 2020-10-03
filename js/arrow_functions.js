//arrow functions


//both are the same, with different syntax

function add(a, b) {
    return a = b;
}

const add2 = (a,b) => a = b;

//arrow function without parentesis parameter
const noParentesisFunction = singleProperty => {
    return {
        insideProperty: singleProperty
    }
} 
console.log(noParentesisFunction('valueString'));

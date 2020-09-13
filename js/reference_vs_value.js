//cloning arrays

var a = [1, 2, 3, 4, 5];
var b = [1, 2, 3, 4, 5];



//cloning objetcts - shallow cloning (first level)
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deepProp: 'try and copy me'
    }
}

let clone = Object.assign({}, obj); //assinginig obj to clone as a copy, and not as a reference
let clone2 = {...obj}; //new syntax
obj.c.deepProp = 'new message';

//all objects bellow will have same vale of 'new message'
//because { deepProp: 'try and copy me'} is another object that is referenced to the obj (main object)
//if this change, will be reflected in all the references it has
console.log(obj);
console.log(clone);
console.log(clone2);



//cloning objects - deep clone (using JSON)
let cloneJson = Object.assign({}, obj);
let superClone = JSON.parse(JSON.stringify(cloneJson)); //completly clone parsing as string

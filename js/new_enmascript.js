// ES7 (ES2016)

//.includes
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog') //true

'Hello world'.includes('world');//true


//exponential operator
const square = (x) => x**2;
const cube = (y) => y**3;

square(2); // 4
cube(3); // 9

// ES8 (ES2017)
//.padStart()
//.padEnd()

//agrega espacios al inicio para completar 10 carácteres
'Turtle'.padStart(10); // '   Turtle';


const fun = (a, b, c, d,) => {
    console.log(a);
}

fun(1,2, 3, 4,)//stil valid

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}


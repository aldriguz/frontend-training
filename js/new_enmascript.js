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


/* 
Object.values
Object.entries
Object.keys 
*/

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}


Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});


Object.values(obj).forEach(value => {
    console.log(value);
});


Object.entries(obj).forEach(value => {
    console.log(value);
});


Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
});



//ES10 (2019)
//flat method that convert all to linear array
const jurassicPark = [['🦖'],['🐤', '🐎'],['🦢', '🐄'],[[['🦖']]],[[['🦜']]]];
jurassicPark.flat(50);

const entrie = ['bob', 'sally',,,,,,'cindy'];
entrie.flat(); //clean the empty ones

const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🦖');
jurassicParkChaos;

//trimming 
const userEmail = '              kalama@mymail.com';
const userEmail2 = 'kalama@mymail.com              ';

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd())


const userProfiles = [['commanderTom', 23], ['derekZlander', 24], ['aldriguz', 28]];
Object.fromEntries(userProfiles);//convert to an object


//try catch

try {
    bob + '!!'
} catch (e) {
    console.log('Error!!!');
    console.log(e);
}
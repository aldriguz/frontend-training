//if two values compared are different types, one of them will be converted
1 == '1' //true (dynamic compare)
1 === '1' //false (hard compare)


if (1){ //converted to bool -> true
    console.log(6);
}



/* excersices */
//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

console.log('object1', object1);
console.log('object2', object2);
console.log('object3', object3);
console.log('object4', object4);

//object1 { a: 4 }
//object2 { a: 4 }
//object3 { a: 4 }
//object4 { a: 5 }


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color);
    }

    moo(){
        console.log('name:', this.name);
        console.log('type:', this.type);
        console.log('color:', this.color);
    }
}

const cow = new Mamal('Paulita', 'Americana', 'Blanca');
cow.moo();
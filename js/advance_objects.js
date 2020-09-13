//reference type
var obj1 = {value: 10};
var obj2 = obj1;
var obj3 = {value: 10};

obj1 === obj2; //true
obj3 === obj2; //false

obj2.value = 11;
console.log("obj1", obj1); //11
console.log("obj2", obj2); //11


//contect vs scope
function myFn() {
    let a = 4;
    console.log(this);
}

const myObject = {
    name: "Kevin",
    fun: myFn //this will be current myObject
}


//instatiation
class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
    }

    play(){
        console.log(`Weeeee I am a ${this.type}`);
    }
}


const player1 = new Player("Kevin", "admin");
const wizard1 = new Wizard("Shawn", "magic");


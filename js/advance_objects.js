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



//assigning objects
const paymentData = {
    currency: 'USD',
    amount: 358.4,    
    creditCard: {
        type: 'VISA',
        number: '4111 1111 1111 1111',
        expMont: 08,
        expYear: 2010,
        ccv: '0234'
    }
};
let clonePayData = Object.assign({}, paymentData); //assinginig obj to clone as a copy, and not as a reference
let clonePayDataNew = {...paymentData}; //new syntax
let objAssigned = Object.assign({}, paymentData, {currency: 'CAD' }); //replace 'USD' to 'CAD' in existing object
paymentData.currency = 'ASD'; //valid
paymentData = { monto: 300};//invalid: TypeError: Assignment to constant variable.

paymentData.creditCard.type = 'AMEX';

console.log('original:', paymentData);
console.log('standard clone:', clonePayData);
console.log('new syntax clone:', clonePayDataNew);
console.log('assigning property', objAssigned);
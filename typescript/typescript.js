//boolean
var isCool = false;
//number
var age = 56;
//string
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, I'm only " + age;
var fixedString = "'' \"\" characters are allowed";
//Array
var pets = ['cat', 'mouse', 'dragon'];
var pets2 = ['pig', 'lion', 'dragon'];
//Tuple
var basket;
basket = ['basketball', 10];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
//alert(sizeName); // Displays 'Medium' as its value is 2 above
//Any
var whatever = 'aaaaghhhhhh noooooo!';
//void
var sing = function () { return console.log('Lalalala'); };
//null and undefined
var meh = undefined;
var noo = null;
//never
var error = function () {
    throw Error('blah!');
};
// Type Assertions:
var ohhithere = "OH HI THERE";
var strLength = ohhithere.length;
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
//Function
var fightRobotArmyF = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2F = function (robots) {
    console.log('FIGHT!');
};
// *** Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello, " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("Lion");
// lion.sing
console.log(lion.greet());
//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
var x = 3;
// automatimally detexts x is a number.
//Union Type
var confused = 384;

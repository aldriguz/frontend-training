/*
1. Closures
2. Currying
3. Compose
*/

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures: Función que guarda referencias de estado y permite acceder al ámbito de una función externa desde su ámbito local 
// 1. Una función se ejecuta, y nunca se volverá a ejecutar
// 2. Pero recordará referencias a sus variables
// 3. Entonces el ámbito de sus funciones hijas podrán acceder al ámbito de la funcion padre

//Currying: Arte de convertir funciones de multiples parametros en funciones anidadas que reciben un solo parametro
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
/*
const curriedMultiply = (a) => {
    const child = (b) => a * b;
    return child;
}
*/
curriedMultiply(3); //retorna funcion (b) => a * b; donde a sería 3
curriedMultiply(3)(4); // a = 3, b = 4 => da como resultado 12

//asignar una funcion donde 'a' siempre sera 5, solo recibirá
//segundo parámetro que será 'b' que siempre será multiplicado por 5
const multiplyBy5 = curriedMultiply(5); 
multiplyBy5(10)//resultado será 50


//Compose
//Acto de llamar a dos funciones donde el input de una es el output de la otra
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(5);
//(5) => sum(sum(5))
//result is 7


//Most important thing
//Avoiding Side Effects, functional purity => Determinism
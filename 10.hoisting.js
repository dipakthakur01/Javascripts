behaviour of js movinhg variable and function declarations to the top of their scope before code execution

memory creation phase
execution phase


console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5

myFunction(); // "Hello, World!"
function myFunction() {
    console.log("Hello, World!");
}



let 
hoisted but in TDZ(Tenporal Dead Zone) from the start of the block until the declaration is encountered
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myLet); // 10

const
hoisted but also in TDZ until the declaration is encountered
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 15;
console.log(myConst); // 15

console.log(myConst);
const myConst = 15;
console.log(myConst);

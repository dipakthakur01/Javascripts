// const person1 ={
// const Person1={
//     name: 'John',
//     age: 30,
// };



class person{
    name;
    email;
    password;
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
}
const person2 = new person('Alice','alice@gmail.com','alice@123');
const person3 = new person('dipak','dipak@gmail.com','dipak@123');

console.log(person2);
console.log(person3);


class person{
    name;
    email;
    password;
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
    getName(){
        return this.name;
    }
    ChangeName(name){
        this.name=name;
    }
}
const person2 = new person('Alice','alice@gmail.com','alice@123');
const person3 = new person('dipak','dipak@gmail.com','dipak@123');

console.log(person2.getName());

person2.ChangeName('Bob');

console.log(person2);



// Static 
class Calculator{
    static add(a,b){
        return a+b;
    }
    static subtract(a,b){
        return a-b;
    }
}
console.log(Calculator.add(5,3));
console.log(Calculator.subtract(5,3));



//abstraction 
class MakeCoffee{
    constructor(){}
    start(){
        this.#turnOnMachine();
        this.#boilWater();
        this.#brewCoffee();
        this.#pourInCup();
        this.#addSugarAndMilk();
        this.#turnOffMachine();
    }
    #turnOnMachine(){
        console.log("Turning on the coffee machine...");
    }
    #boilWater(){
        console.log("Boiling water...");
    }
    #brewCoffee(){
        console.log("Brewing coffee...");
    }
    #pourInCup(){
        console.log("Pouring coffee into cup...");
    }
    #addSugarAndMilk(){
        console.log("Adding sugar and milk...");
    }
    #turnOffMachine(){
        console.log("Turning off the coffee machine...");
    }
}
const coffee = new MakeCoffee();
coffee.start();
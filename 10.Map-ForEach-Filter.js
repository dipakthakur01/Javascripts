//MAp     --> creates a new array by performing a function on each array element

var arr = [1,2,3,4,5];

var newArr = arr.map((value)=>{
    return value*2;
})
console.log(newArr);


//Filter  --> creates a new array by keeping the elements that satisfy a condition

var arr2 = [10,15,20,25,30,35,40];
var newArr2 = arr2.filter((value)=>{
    return value>20;
})
console.log(newArr2);


//ForEach  --> performs a function on each array element but does not create a new array

var arr3 = [100,200,300,400,500];
arr3.forEach((value)=>{
    console.log(value);
})
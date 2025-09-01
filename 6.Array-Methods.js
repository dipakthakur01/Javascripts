const nums=[17,8,9,10,77,11,32,45,29,42,50];
const users=['John','Jane','Doe','Smith'];

//sort
//arr_name.sort()

//users.sort();
users.sort((a,b)=> b.localeCompare(a));

nums.sort((a,b)=>{
    return a-b});
console.log(nums);
console.log(users);

// reverse
// arr_name.reverse()
nums.reverse();
console.log(nums);


//Some /Every
const is_every_even=nums.every ((value)=>{
    return value%2===0;
})
console.log(is_every_even);

const is_some_even=nums.some ((value)=>{
    return value%2===0;
})
console.log(is_some_even);
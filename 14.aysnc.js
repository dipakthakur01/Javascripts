console.log("Start");

setTimeout 
setTimeout(task,timer(ms),a,b,c)


setTimeout(function(user_id,name){
    console.log("processing data for user:",user_id,name);
},50,101,"Dipak");
console.log("End");

 //clear timer
clearTimeout(timerId);
console.log("End");


setInterval(task,interval)
setInterval(function(){
    console.log("interval")
},1000)


let count =0
const id = setInterval(function(){
    count++;
    console.log("Thakur",count)
    if (count ===10)
        {
        clearInterval(id)
    }
},1000)
console.log("End");



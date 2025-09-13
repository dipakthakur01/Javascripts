// promises 
// onsuccess (){}
//onReject (){}

console.log("script");
const promise =new promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("data is ready")
        reject(new Error("some error occured"))
    },2000)
})
console.log(promise);

// hqndling promise
promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("inside catch block",err)
})
console.log("end of script")
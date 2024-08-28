// const userEmail = "divmish@gmail.ai"

// if(userEmail){
//     console.log("Got user Email")
// }
// else{
//     console.log("Don't have user email")
// }

// Falsy Values =
//  fasle, 0, -0, ""(empty string), BigInt 0n, null, NaN , undefined

// Truthy Values = 
// "0", "false", " ",[], {}, function(){} 


const userEmail = []

// How to check userEmail array is empty or not
if(userEmail.length === 0){
    console.log("Array is empty , did not got user email")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty, did not get user email")
}

// Nullish Coalesing Operator(??): null  undefined

let val1;
// val1 = 5 ?? 10               // O/P -> 5
// val1 = null ?? undefined     // O/P-> undefined
// val1 = null ?? 5             // O/P -> 5
// val1 = undefined ?? 5           // O/P -> 5

console.log(val1);

// Terniary operator

// Condition ? true : false

const icePrice = 100

icePrice <= 80 ? console.log("less than 80"): console.log("more than 80")

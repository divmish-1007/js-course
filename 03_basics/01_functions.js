function sayMyName(){
    console.log("D")
    console.log("I")
    console.log("V")
    console.log("A")
    console.log("K")
    console.log("A")
    console.log("R")
}

// sayMyName();


// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }

// No need to declare the data type of the parameters in function

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
} 
  

addTwoNumbers(3, 4);

addTwoNumbers(3, "4")  // 34

const result = addTwoNumbers(8, 9)
console.log("Result: ", result);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please Enter a valid UserName");
    //     return
    // }
    if(!username){
        console.log("Please Enter a valid UserName");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Divmish"));
console.log(loginUserMessage());       // o/p -> undefined just logged in
 
// #20 Part -2
// ...num1 is Rest Operator

// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200, 400, 500)); // O/P -> [200, 300, 400]
function calculateCartPrice(val1, val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 1000));  // O/P -> [500, 1000]

// Object Handling Using Function

const user = {
    username: "Kachra",
    price: 1999
}

function handleObject(anyObject){
    console.log(`User Name is ${anyObject.username} and Price is ${anyObject.price}`)
}
handleObject(user);

// Alternate , We can directly pass the Object in Function

handleObject({
    username: "Ajit Yadav",
    price: "free"
})


// Pass Array in functions

const myArray = [200, 300, 400, 500]

function  secondValue(anyArray){
    return anyArray[1]
}

console.log(secondValue(myArray));
// Direct pass the array in function
console.log(secondValue([100, 500, 10000, 100000]));


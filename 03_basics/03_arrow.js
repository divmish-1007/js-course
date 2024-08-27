const user = {
    username: "Divakar",
    price:999,
// Function as a Object Element
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
    // "This" refering the current context
}
// user.welcomeMessage();  // O/P -> Divakar, welcome to website
                        // {
                        //   username: 'Divakar',
                        //   price: 999,
                        //   welcomeMessage: [Function: welcomeMessage]
                        // }

user.username = "Sam"      // it will overWrite the user name bcoz it's not hard coded

// user.welcomeMessage()   // O/P -> Divakar, welcome to website
                        // {
                        //   username: 'Divakar',
                        //   price: 999,
                        //   welcomeMessage: [Function: welcomeMessage]
                        // }

// function one(){
//     let username = "hitesh"
//     console.log(this.username);
// } 
// one();  // Undefined bcoz 'this' is not for normal functions 

// const one = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// one();  //  Undefined 

// +++++++++ Arrow Functions +++++++++

// const one = () =>{
//     let username = "hitesh"
//     console.log(this.username);
// }
// one();  // Undefined

// Explicitly Return the value
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));

// Implicit return (No need to use the return keyword)

// const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) =>  (num1 + num2)

console.log(addTwo(3, 4));
// For returning the Object in Implicit Way use ({})

const JsUser = () => ({username: "hitesh"})

console.log(JsUser());

// Conclusion: Explicit return = use return keyWord With curly brackets {}
//             Implicit return = Don't use the return key word , Use parantheses ()
//             Spesial: For Objects in Implicit Way use this ({write object here})



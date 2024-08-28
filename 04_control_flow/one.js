// if
const isUserloggedIn = true
const temperature = 41
if(temperature < 50){
    console.log("less than 50");
    
}
else{
    console.log("temp is greater than 50");
    
}
// <, >, <=, >=, ==, !=, ===(strict equal/tiple equal checks condition as well as data type), !==

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`); 
// }
// console.log(`user power: ${power}`); // Error bcoz of power is not defined globaly 

const balance = 1000

if (balance >500) console.log("implicit scope within one line");  // It could be done 
// if (balance >500) console.log("implicit scope within one line"), console.log("implicit scope with other line");
// it's not advisable to write the more than one line code after comma(,) in implicit scope


// if(balance < 500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
    
// }
// else {
//     console.log("less than 1200")
// }

const UserloggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(UserloggedIn && debitCard){
    console.log("Allow to buy the course")
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User Logged in")
}

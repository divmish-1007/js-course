const  user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from databae")
        console.log(`username: ${this.username}`)
    }
}
// This: Current Context
// console.log(user.username);
// console.log(user.getUserDetails())

// Above discussed things are all about the Object(literals)

// Construtor: function

function Person(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
const user1 = new Person("hitesh", 9, false);
const user2 = new Person("chai", 8, true);
// console.log(user1);
// console.log(user2);
console.log(user1.constructor);




  
// Constructor -> Singleton
// Object.create

// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "divmish",
    "full name": "Divakar Mishra",
    age: 20,
    mySym: "MyKey1",            // It's not symbol as a key it's string 
    [mySym]: "MyKey2",          // It's symbol use as a key
    location: "Jaipur",
    email: "divmish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Acess the object

// 1. Using dot(.)
console.log(JsUser.email);

// 2. Using the square bracets
console.log(JsUser["age"]);
console.log(JsUser["full name"]);  // it's only access by bracets method it's not accessed by the (.) method
console.log(JsUser[mySym]);        // it's symbol **** Important -> to access the symbol [] must
console.log(JsUser.mySym);         // it's normal string

// OverWrite in Objects/change the value of keys

JsUser.email = "divmish@chatgpt.com"
console.log(JsUser.email)

// We can frezze the object so that OverWrite in Objects will not reflect in objects

// Object.freeze(JsUser);
JsUser.email = "divmish@mmicrosft.com"
console.log(JsUser.email);

// Add a function in Object

JsUser.grettings = function(){
    console.log("Hello JS user");
}
JsUser.grettingsTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.grettings());
console.log(JsUser.grettingsTwo());













// Primitive

// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 116451848498481549n  // BigInt

// Refrence (Non Primitive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"]  // Arrays

let myObj = {
    name: "Divmish",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros)

// Link to read
// https://262.ecma-international.org/5.1/#sec-11.4.3

// Table 20 — typeof Operator Results
// Type of val   ->	Result
// Undefined  ->	"undefined"
// Null	    ->   "object"
// Boolean	->    "boolean"
// Number	->   "number"
// String  ->  "string"
// Object(native and does not implement [[Call]])  ->	"object"
// Object(native or host and does implement [[Call]])  ->	"function"
// Object(host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
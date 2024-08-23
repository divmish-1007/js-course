const score = 400;

const balance = new Number(100);
console.log(balance)

// cobnverted into string 

// console.log(balance.toString().length)

// Precision value

// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000;

// handling zeroez in indian method
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MIN_VALUE);

// +++++++++++++++++++++ Maths +++++++++++++++++++++++


console.log(Math)
// console.log(Math.abs(-1))
// console.log(Math.round(5.499));  // Round off --> Most of the time we used it rather than flooer and ceil
// console.log(Math.ceil(5.499));   // It takes Greater Values as Ceil mentioned that means "TOP"
// console.log(Math.floor(5.499));  // It takes lower Values as floor mentioned that means "LOWER"

// console.log(Math.min(4, 3, 6, 9)); // It gives us min element from the array
// console.log(Math.max(4, 3, 6, 9)); // It gives us max element from the array


console.log(Math.random());  // It gives a rondom value between 0 and 1
console.log((Math.random()*10)+1); // It gives  value between 1 and 10
console.log(Math.floor((Math.random()*10))+1);

const min = 10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min+1)) + min));  // Formula For gettting a value between given range

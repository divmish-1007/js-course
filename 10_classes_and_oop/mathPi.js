// console.log(Math.PI)   o/p -> 3.141592653589793
// Math.PI = 5;           we can't overwrite the PI value becoz of their property which disccused below
// console.log(Math.PI)   o/p -> 3.141592653589793

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor)

// Description of PI:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//  }

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log('Chai nahi bani');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// O/P -> 
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false // we can't access by value of name by itteration
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// O/P ->
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}
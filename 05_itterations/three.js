// For of

// ["", "", ""]
// [{}, {}, {}]

// let myArray = [1, 2, 3, 4, 5]
// for (const num of myArray) {
//     console.log(num)
// }

const greetings = "Hello World!"
// for (const greet of greetings) {
//     if(greet == " "){
//         continue;
//     }
//     else{
//         console.log(`Each character is ${greet}`)
//     }
// }

// Maps

const maps = new Map()
maps.set('IN', 'India')
maps.set('USA', 'United States of America')
maps.set('Fr', 'France')
maps.set('IN', 'India')

// console.log(maps)

//1. Key and values in the form of individual arrays: [ 'IN', 'India' ],[ 'USA', 'United States of America' ],
// [ 'Fr', 'France' ]
// for (const key of maps) {
//     console.log(key)
// }

//2. Only keys are printed: IN, USA, Fr
// for (const [key] of maps) {
//     console.log(key)
// }

//3. Only Values are Printed: India , United States of America, France
// for (const [,value] of maps) {
//     console.log(value)
// }

//4. Keys and values areprinted in the form of: IN :- India,  USA :- United States of America, Fr :- France
for (const [key, value] of maps) {
    console.log(key ,':-', value)
}

const myObj = {
    game1: 'NFS',
    game2: 'Spideerman'
}

// Objects are not itteratble by this loop

// for (const [key] of myObj) {
//     console.log(key)
// }
const myObj = {
    js:'Javascript',
    cpp:'C++',
    rb: 'rubby',
    swift: 'Swift by apple'
}
// Forin loop for Objects

// 1. Prints onlly keys: js, cpp, rb, swift
// for (const key in myObj) {
//     console.log(key)
// }

// 2. prints only values: Javascrip, C++, rubby, Swift by apple
// for (const key in myObj) {
//     console.log(myObj[key])
// }

// 3. print key values both:
for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`)
}


const programming = ["js", 'rb', 'py', 'java','cpp']

// For in loop direct access only keys
// It prints indexs(keys) of the array: 0, 1, 2, 3, 4
// for (const key in programming) {
//     console.log(key);
// }

// It prints the elements of array: js, rb, py, java, cpp
for (const key in programming) {
    console.log(programming[key]);
}
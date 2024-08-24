// array

const myArr = [2, 4, 8, 7, 5, 9]
const myHeroes = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6);

console.log(myArr[3]);
console.log(myArr);
console.log(myArr2[3]);
console.log(myArr2);
console.log(myHeroes[1]);
console.log(myHeroes);


// Array Methods

// 1. Push and Pop

myArr.push(10);
myArr.push(11);
console.log(myArr);
myArr.pop();
console.log(myArr);

// 2. Unshift and Shift
// Unshift -> Placed an item on 0th index
// Shift -> Remove an item from 0th index

myArr.unshift(15);
console.log(myArr);
myArr.shift();
console.log(myArr);

// 3. Questionare Methods 

console.log(myArr.includes(9))  // return type -> boolean
console.log(myArr.indexOf(9));  // return type -> integer

// 4. join convertes the element of an array into string and also change the data_type

const newarr = myArr.join();
console.log(myArr);
console.log(newarr);
console.log(typeof newarr);  // string 

// 5. slice and splice
// The main difference between alice and splice is that, 
// Slice -> Does not manipulate the original array and exclude the last index element
// Splice -> manipulate the original array inlcude the last index element

console.log("Original Array befor the slice operation", myArr);

const myn1 = myArr.slice(1,3); //  3 is excluded 
console.log(myn1); // o/p -> element of 1st and 2nd index only 3rd index is excluded
console.log("Original Array after the slice operation", myArr);

const myn2 = myArr.splice(1, 3);    // make the array of 1st, 2nd amd 3rd index element of original array and also reomve them
console.log("Original Array after the splice operation", myArr);    // remaining elements left in the original array
console.log(myn2); // O/P -> an array of element of index 1, 2 and 3 but they also get removed from original array














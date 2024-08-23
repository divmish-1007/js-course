// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

console.log(typeof myDate)

// Method -> 1 to coustmize the "toLocalString"

// let options = {timeZone:'Asia/Kolkata',  timeStyle: 'long',}
// console.log(myDate.toLocaleString('en-IN',options));

// Method -> 2 to coustmize the "toLocalString"

console.log(myDate.toLocaleString('default',{
    timeZone:'Asia/Kolkata',  
    timeStyle: 'long'
}));

// let myCreatedDate = new Date(2023, 0, 1, 11, 22, 45, 22)
// let myCreatedDate = new Date("2023-01-04") // YYYY MM DD
let myCreatedDate = new Date("01-14-2023") // MM DD YYYY
// console.log(myCreatedDate.toLocaleString());


// TimeStamp

let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


console.log(myDate.getDate())  // O/p -> Current Date
console.log(myDate.getDay())  // O/p -> Current Day
console.log(myDate.getFullYear())  // O/p -> Current Year 
console.log(myDate.getTime())  // O/p -> Time in milisecond from 1 jan 1970
console.log(myDate.getMonth()+1) // o/p -> current Month(addition of 1 becoz months starting from 0 index )



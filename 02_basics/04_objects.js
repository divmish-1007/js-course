// const tinderUser = new Object()  // Singalton Object
const tinderUser1 = {};          // Non-singalton Object

tinderUser1.id = "KachraBhai@123"
tinderUser1.name = "Ajit Yadav"
tinderUser1.isLoggedIn = false

// console.log(tinderUser1);

const regularUser = {
    email: "ajityadav@coolboy.com",
    fullname:{
        userFullName: {
            firstName: "Ajit",
            lastName:"Yadav"
        }
    }
    
}

console.log(regularUser.fullname.userFullName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2};   // Object ke andar object similar to array insinde array like 2D array

const obj3 = Object.assign( obj1, obj2, obj4)
console.log(obj3);
console.log(obj1 === obj3);  // "True" Becoz all the object Elments merge in target object that is Obj1 is here tha
                                // that's why an option {} target is given.
                            
const obj5 = Object.assign({}, obj1, obj2, obj4)
console.log(obj3);
console.log(obj1 === obj5); // "False", target is changed to '{}' from obj1

// Spread Operator

const obj6 = {...obj1, ...obj2, ...obj4}
// console.log(obj6);

// Array ke andar Objects hai.
const users = [
    {
        id:1,
        email:"h1@gmail.com"
    },
    {
        id:2,
        email:"h1@gmail.com"
    },
    {
        id:3,
        email:"h1@gmail.com"
    }
]
// Access karne ke liye 
users[1].id

console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));

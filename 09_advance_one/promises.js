// Creation of Promise

const promiseOne = new Promise(function(resolve, reject){
    // Do any ASync task
    // DB calls cryptography, network
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve();   // connect resolve and .then
    }, 1000);
})

// Counsumption of promises

promiseOne.then(function(){
    console.log('Promises Consumed');
})

// Another method of Creating Promise and consuming: promiseTwo
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve();
    }, 1000)
}).then(function(){
    console.log('Asyns 2 resolved');
})

// pass the data in resolve and access the data: promiseThree

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// promiseFour:

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"hitesh", password:"123"});
        }
        else{
            reject('ERROR: Something went worng')
        }
    },2000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{   // Chaining: return value from above function get as parameter insdie then
    console.log(username)
})
.catch(function(err){   // Check Error 
    console.log(err);
}).finally(()=>{
    console.log('The promise is either resolved or rejected')
})

// It's not required to always handle the Promise with .then and .catch
// PromiseFive: handle with 'async await'
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript", password:"123"});
        }
        else{
            reject('ERROR: JS went worng')
        }
    },2000)
})

// graceFully handle the error using 'try-catch'

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
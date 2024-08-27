// Immediately Invoked Function Expressions  (IIFE)

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

// ()(); => similar to chai();

// Don't forget to use the semicolon when you write more than 1 iife

// We can write Arrow function 

(()=>{
    console.log('DB CONNECTED TWO');
})();

// if we want two pass the arguments then we can pass like normal functions

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh');

 
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// Var is accessibale outside the scope that is not the good thing that's why we didn't talk about var 
// a and b is not accessible outside the Block Scope

// console.log(c);

// let a=300
// if(true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }

// console.log(a);

function One(){
    const username = "divakar"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)  // Not accessible outside the Scope
    two()
}

// One();

if(true){
    const username= "divakar"
    if(username === "divakar"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // Block Scope
}
// console.log(username)    // Can't accessible bcoz of Block Scope

// ++++++++++++++++++++++++++Interesting

function addOne(num){
    return num+1
}

addOne(5);

const addTwo = function(num){
    return num+2
}

 
// For loop

// Syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(i=0; i<=10; i++){
    if(i==5){
        console.log("5 is best number ")
    }
    console.log(i);

}

// Table from 1 to 10

for(i=1; i<=10; i++){
    console.log(`Table of ${i}`)
    for(j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    // console.log(`\n`);
    
}

let myArray = ["flash", "batman", "superman"]
for(let i=0; i<myArray.length; i++){
    const element = myArray[i];
    console.log(element)
}
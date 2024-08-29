const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNum = myNumbers.map( (num) => num+10)
// console.log(newNum)


// Using forEach 

// newNum = []

// myNumbers.forEach((item)=>{
//         newNum.push(item+10)
// })
// console.log(newNum)

// chaining

const newNums = myNumbers
                    .map( (num)=> num*10)
                    .map( (num)=> num+5).filter((num) => num>40)

console.log(newNums);
                    
// the Basic difference between "map" & "filter" is:
    // filter: write the condition for checking true and false
    // map: write the condition for performing the operation 

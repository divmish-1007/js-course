// For each loop

const coding = ['js', 'rubby', 'python', 'java','cpp']

// In call back functions, function name is not mentioned
// 1.
// coding.forEach(function (element){
//     console.log(element);
// })

// 2. Arrow function can be used in for-each 
// coding.forEach( (element)=>{
//     console.log(element);
// })

// 3. Alternative method 
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// 4. In forEach loop there will be more than one argument: values, indexs, whole Array

// coding.forEach((item, index, Arr) => {
//     console.log(item, index, Arr);
// })

// Access of Objects inside the array 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})


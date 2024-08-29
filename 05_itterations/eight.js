const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//         console.log(`acc: ${acc}, currval: ${currval}`)
//         return acc+currval
// }, 0)

// Using Arrow function
const myTotal = myNums.reduce( (acc, currval) => acc+currval,0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 2999
    },
    {
        itemName: "Cpp Course",
        price: 2999
    },
    {
        itemName: "DSA Course",
        price: 3999
    }
]

// Add shoping cart prices

const priceTopay = shoppingCart.reduce((acc, item)=> (acc + item.price),0)
console.log(priceTopay)
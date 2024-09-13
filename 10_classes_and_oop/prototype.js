// let myName = "hitesh       "
// let myChannel = "chai      "

// console.log(myName.trim().length)
// console.log(myName.truelength)

let myHeroes = ["thor", "spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects")
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello`)
}

heroPower.hitesh() // In this case prototype created in the object, so it is accessible to all 
myHeroes.hitesh()

myHeroes.heyHitesh()  // The protyotype behaviour adds in Array so it's only accessible to the array only
// heroPower.heyHitesh()  // it will show the error coz arrays prototype behaviour not accessable in objects

// Inheritance:

// old syntax:
const user={
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Now TASupport can access all propperties of TeachingSupport
    // __proto__: Syntax of prototypal inheritance 
}

Teacher.__proto__= user // Now Teacher can access all prperties of user

// modern Syntax:

Object.setPrototypeOf(TeachingSupport, Teacher)
// Now TeachingSupport can access all the properties of Teacher

let anotherUserName = "chaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"hitesh  ".trueLength()
"iceTea".trueLength();
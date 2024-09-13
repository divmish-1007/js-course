// ES6

class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptpassword(){
        return `${this.password}abc`
    }

    changeUserName(username){
        return`${this.username.toUpperCase()}`;
    }
}

const chai = new user("chai", "chai@gmail.com", "123")

// console.log(chai);
console.log(chai.encryptpassword());
console.log(chai.changeUserName());

// Bheind the scene 

function person(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

person.prototype.encryptpassword = function(){
    return `${this.password}abc`
}

person.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new person("tea", "tea@gmail.com", "987");

console.log(tea.encryptpassword());
console.log(tea.changeUserName())
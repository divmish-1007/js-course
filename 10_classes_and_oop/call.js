function SetUserName(username){
    // Complex DB calls
    this.username = username
    console.log("called")
}

function creatUser(username, email, pasword){
    SetUserName.call(this, username)

    this.email = email
    this.pasword = pasword
}

const chai = new creatUser("chai", "chai@google.com", "123")
console.log(chai);
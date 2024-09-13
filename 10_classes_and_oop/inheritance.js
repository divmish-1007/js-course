// #45
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);

        this.password = password
        this.email = email;
    }

    addCouse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Teacher1 = new Teacher("V. K. Giri", "chai@Teacher.com", "1234@#$")
Teacher1.addCouse();

const user1 = new User("SKS", "sk@mmmut.ac.in", "@123sks");
user1.logMe();

Teacher1.logMe()

console.log(user1 === Teacher1);

console.log(Teacher1 instanceof Teacher);
console.log(Teacher1 instanceof User);
// #45
class User {
    
    constructor(username){
      this.username = username  
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
// "static" prohbited the access of property to the object which is insencitated by this classs 
    static createId(){
        return `123`
    }
}

const hitesh = new User("Hitesh")
// console.log(hitesh.createId());  // Can't access bcoz "createId" is static

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
}

const prof = new Teacher("Prabhakar t.", "pt@mmmut.ac.in");
prof.logMe();
// prof.createId()  // cann't access bcoz "createId" is static
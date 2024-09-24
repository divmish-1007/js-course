class user{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}Getteer_returns_the_Password`
    }

    set password(value){
        this._password = value;
    }

}

const user1 = new user('anjan@google.com', '123#@Anjan');
console.log(user1.password);
console.log(user1.email);
class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(`${this.email} just login`);
        return this
    }

    logout(){
        console.log(`${this.email} just logged out`);
        return this
    }

    updateScore(){
        this.score++;
        console.log(`${this.email} score is now ${this.score}`);
        return this
        
    }
}



class Admin extends User{
    deleteUser(user){
        users.filter(u =>{
            u.email != user.email;
        })
    }
}

const user1 = new User("meekail@gmail.com","Meekail");
const user2 = new User("mahir@gmail.com","Mahir");
const admin = new Admin("shaun@gmail.com","Shaun");

const users = [user1,user2]

admin.deleteUser(admin);

console.log(users)
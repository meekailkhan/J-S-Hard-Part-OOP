function UserCreate(name, score) {
    this.name = name;
    this.score = score;
}

UserCreate.prototype.increament = function () {
    // function add(){
    //     this.score++
    // };
    const add = () => {
        this.score++
    }

    add()
}

UserCreate.prototype.login = function () {
    return `user ${this.name} new login`
}

const user1 = new UserCreate("meekail", 5)

console.log(user1);
user1.increament();
console.log(user1.score) // this will be 5 becuase this key word reffer to left hand side to dot where is called and when we add function who defined inside increament function and when we call its we not clear its laft hand side 
console.log(user1.login())
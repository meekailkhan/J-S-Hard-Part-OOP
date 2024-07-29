function UserCreate(name,score){
    this.name = name;
    this.score = score;
}

UserCreate.prototype.increment = function(){
    this.score++
}

UserCreate.prototype.login = function(){
    return `${this.name} loggedin`
}

let user1 = new UserCreate("phil",5)
let user2 = new UserCreate('david',4)

console.log(user1)
console.log(user1.score)
console.log(user2)
console.log(user2.score)

user1.increment()
user2.increment()

console.log(user1.login())
console.log(user1.score)
console.log(user2.login())
console.log(user2.score)

function UserCreator(name,score){
    this.name = name;
    this.score = score;
}

UserCreator.prototype.sayName = function(){
    console.log(`I am ${this.name}`);
}

UserCreator.prototype.increament = function(){
    this.score++
}

const user1 = new UserCreator("Phil",5);
const user2 = new UserCreator("Tim",4);

user2.sayName() // I am Tim
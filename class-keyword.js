class UserCreator{
    constructor(name,score){
        this.name = name;
        this.score =  score;
    }

    increament(){
        this.score++
    }

    login(){
        return `${this.name} has been login`
    }
}

const user1 = new UserCreator("meekail",5);
const user2 = new UserCreator("mujaahid",8);

console.log(user1);
console.log(user2);

user1.increament();
user2.increament();

console.log(user1.score);
console.log(user2.score);
console.log(user2.login());


for(const key in user1){
    console.log(user2[key])
}
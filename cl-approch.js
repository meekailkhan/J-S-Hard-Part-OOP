class UserCreator{
    constructor(name,score){
        this.name = name;
        this.score =  score;
    }

    sayName(){
        console.log(`I am ${this.name}`)
    }

    increament(){
        this.score++
    }
}

const user1 = new UserCreator("Phil",5);
const user2 = new UserCreator("Tim",4);

user1.sayName() // I am Thil
user2.sayName() // I am Tim

class PaidUserCreator extends UserCreator{
    constructor(paidName,paidScore,accountBalance){
        super(paidName,paidScore);
        this.accountBalance = accountBalance;
    }

    increasBalance(){
        this.accountBalance++
    }
}

const paidUser1 = new PaidUserCreator("Alyssa",8,25);
const paidUser2 = new PaidUserCreator("Brial",9,22);

paidUser1.sayName();
paidUser2.increasBalance();
console.log(paidUser2.accountBalance) // 0
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

function PaidUserCreator(paidName,paidScore,accountBalance){
    UserCreator.call(this,paidName,paidScore);
    // UserCreator.apply(this,[paidName,paidScore])

    this.accountBalance = accountBalance;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);
PaidUserCreator.prototype.increamentBalance = function(){
    this.accountBalance++
}

const paidUser1 = new PaidUserCreator("Alyssa",8,25);

paidUser1.sayName()
console.log(paidUser1.name)
paidUser1.increamentBalance();
console.log(paidUser1.accountBalance) // 26

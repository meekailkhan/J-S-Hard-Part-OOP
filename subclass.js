// function userCreator(name,score){
//     const newUser = Object.create(userFuntions);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser
// }

// const userFuntions = {
//     sayName : function(){
//         console.log(`usern name is ${this.name}`)
//     },
//     increament : function(){
//         this.score++
//     }
// }

// function paidUserCreator(paidName,paidScore,accountBalance){
//     const paidUser = userCreator(paidName,paidScore);
//     Object.setPrototypeOf(paidUser,paidUserFuntion);
//     paidUser.accountBalance = accountBalance;
//     return paidUser;
// }

// const paidUserFuntion = {
//     increamentBalance : function(){
//         this.accountBalance++
//     }
// }


// const user1 = userCreator("meekail",5);
// const paidUser1 = paidUserCreator("mujaahid",8,25);


// paidUser1.increamentBalance()
// console.log(paidUser1)
// user1.sayName()
// user1.increament()
// console.log(user1)

class UserCreator{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }

    sayName() {
        return `user name is ${this.name}`
    }

    increament() {
        this.score++
    }
}


class PaidUserCreator extends UserCreator{
    constructor(paidName,paidScore,accountBalance){
        super(paidName,paidScore);
        this.accountBalance = accountBalance
    }

    increamentBalance() {
        this.accountBalance++
    }
} 



const user1 = new UserCreator("meekail",5);
const paidUser1 = new PaidUserCreator('mujaahid',8,50);

paidUser1.increament();
paidUser1.increamentBalance()

console.log(paidUser1)
console.log(paidUser1.sayName())

user1.increament()
console.log(user1)
